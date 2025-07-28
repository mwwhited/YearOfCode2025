import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';
import { createBrowserHistory } from 'history';
import type { AppConfig } from '@/config/appConfig';
import { telemetryFallback } from './telemetryFallback';

class ApplicationInsightsService {
  private appInsights: ApplicationInsights | null = null;
  private reactPlugin: ReactPlugin | null = null;
  private browserHistory: any = null;
  private useFallback = false;

  private shouldUseFallback(): boolean {
    return this.useFallback || !this.appInsights;
  }

  initialize(config: AppConfig): void {
    console.log('🔧 Application Insights initialize called with config:', config);
    
    // Check if Application Insights configuration exists
    if (!config || !config.applicationInsights) {
      console.warn('⚠️ Application Insights configuration not found - using fallback telemetry');
      console.log('🔧 Config object:', config);
      console.log('🔧 ApplicationInsights property:', config?.applicationInsights);
      this.useFallback = true;
      return;
    }

    const aiConfig = config.applicationInsights;
    console.log('🔧 AI Config extracted:', aiConfig);
    
    // Skip initialization if no connection string provided
    if (!aiConfig.connectionString || aiConfig.connectionString.trim() === '') {
      console.warn('⚠️ Application Insights connection string not provided - using fallback telemetry');
      this.useFallback = true;
      return;
    }

    // Skip if connection string appears to be a placeholder
    if (aiConfig.connectionString.includes('your-instrumentation-key') || aiConfig.connectionString.includes('your-region')) {
      console.warn('⚠️ Application Insights connection string appears to be a placeholder - using fallback telemetry');
      this.useFallback = true;
      return;
    }

    // Check if using localhost endpoint (development mode)
    if (aiConfig.connectionString.includes('localhost')) {
      console.warn('⚠️ Application Insights is configured with localhost endpoint - this may not be available');
      console.log('🔧 Attempting to initialize anyway, will fall back on failure...');
    }

    try {
      console.log('🔧 Creating Application Insights instance...');
      
      // In development, skip React plugin to avoid conflicts
      let extensions: any[] = [];
      let extensionConfig: any = {};
      
      const isDevelopment = config.app.environment === 'development';
      
      if (!isDevelopment) {
        // Only try to create React plugin in production
        try {
          console.log('🔧 Creating browser history...');
          this.browserHistory = createBrowserHistory({ window });
          
          console.log('🔧 Creating React plugin...');
          this.reactPlugin = new ReactPlugin();
          
          extensions = [this.reactPlugin];
          extensionConfig = {
            [this.reactPlugin.identifier]: {
              history: this.browserHistory,
            },
          };
          console.log('✅ React plugin created successfully');
        } catch (reactPluginError) {
          console.warn('⚠️ Failed to create React plugin, continuing without it:', reactPluginError);
          this.reactPlugin = null;
          extensions = [];
          extensionConfig = {};
        }
      } else {
        console.log('🔧 Development mode: skipping React plugin to avoid conflicts');
      }

      // Initialize Application Insights
      this.appInsights = new ApplicationInsights({
        config: {
          connectionString: aiConfig.connectionString,
          instrumentationKey: aiConfig.instrumentationKey,
          
          // Performance and tracking settings (disable problematic features in development)
          enableAutoRouteTracking: !isDevelopment && aiConfig.enableAutoRouteTracking && this.reactPlugin !== null,
          enableRequestHeaderTracking: aiConfig.enableRequestHeaderTracking,
          enableResponseHeaderTracking: aiConfig.enableResponseHeaderTracking,
          enableAjaxErrorStatusText: aiConfig.enableAjaxErrorStatusText,
          enableAjaxPerfTracking: aiConfig.enableAjaxPerfTracking,
          enableUnhandledPromiseRejectionTracking: aiConfig.enableUnhandledPromiseRejectionTracking,
          enableCorsCorrelation: aiConfig.enableCorsCorrelation,
          disableFetchTracking: aiConfig.disableFetchTracking,
          
          // Environment and debugging
          enableDebug: aiConfig.enableDebug && config.app.environment === 'development',
          loggingLevelConsole: aiConfig.enableDebug ? 2 : 0, // 2 = WARNING and above
          loggingLevelTelemetry: aiConfig.enableDebug ? 2 : 1, // 1 = CRITICAL only
          
          // Extensions (only if React plugin was created successfully)
          extensions: extensions,
          extensionConfig: extensionConfig,
        },
      });

      console.log('🔧 Loading Application Insights...');
      // Load Application Insights with additional error handling
      try {
        this.appInsights.loadAppInsights();
        console.log('✅ Application Insights loaded successfully');
      } catch (loadError) {
        console.warn('⚠️ Failed to load Application Insights, but continuing:', loadError);
        // Don't fail completely, just log the error
      }

      console.log('🔧 Setting initial context...');
      // Set initial context
      try {
        this.setInitialContext(config);
        console.log('✅ Initial context set successfully');
      } catch (contextError) {
        console.warn('⚠️ Failed to set initial context, but continuing:', contextError);
        // Don't fail completely, just log the error
      }

      console.info('✅ Application Insights initialized successfully');
    } catch (error) {
      console.error('❌ Failed to initialize Application Insights:', error);
      
      // Try to extract more meaningful error information
      if (error && typeof error === 'object') {
        if ('message' in error) {
          console.error('❌ Error message:', error.message);
        }
        if ('stack' in error) {
          console.error('❌ Stack trace:', error.stack);
        }
        if ('messageId' in error) {
          console.error('❌ Message ID:', error.messageId);
        }
      }
      
      console.warn('⚠️ Switching to fallback telemetry mode');
      // Set fallback mode on any initialization error
      this.useFallback = true;
      this.appInsights = null;
      this.reactPlugin = null;
    }
  }

  private setInitialContext(config: AppConfig): void {
    if (!this.appInsights) return;

    // Set global properties that will be included with all telemetry
    this.appInsights.addTelemetryInitializer((envelope) => {
      envelope.tags = envelope.tags || {};
      envelope.data = envelope.data || {};
      
      // Add custom properties
      envelope.tags['ai.application.ver'] = config.app.version;
      envelope.tags['ai.cloud.role'] = 'frontend';
      envelope.tags['ai.cloud.roleInstance'] = config.app.environment;
      
      // Add custom dimensions
      const customProperties = envelope.data.baseData?.properties || {};
      customProperties.applicationName = config.app.name;
      customProperties.environment = config.app.environment;
      customProperties.version = config.app.version;
      
      if (envelope.data.baseData) {
        envelope.data.baseData.properties = customProperties;
      }
      
      return true;
    });
  }

  // Get the React plugin for HOC usage
  getReactPlugin(): ReactPlugin | null {
    return this.reactPlugin;
  }

  // Get the Application Insights instance
  getAppInsights(): ApplicationInsights | null {
    return this.appInsights;
  }

  // Track custom events
  trackEvent(name: string, properties?: Record<string, any>, measurements?: Record<string, number>): void {
    if (this.shouldUseFallback()) {
      telemetryFallback.trackEvent(name, properties, measurements);
      return;
    }

    this.appInsights!.trackEvent({
      name,
      properties,
      measurements,
    });
  }

  // Track page views
  trackPageView(name?: string, url?: string, properties?: Record<string, any>): void {
    if (this.shouldUseFallback()) {
      telemetryFallback.trackPageView(name, url, properties);
      return;
    }

    this.appInsights!.trackPageView({
      name,
      uri: url,
      properties,
    });
  }

  // Track exceptions
  trackException(error: Error, severityLevel?: number, properties?: Record<string, any>): void {
    if (this.shouldUseFallback()) {
      telemetryFallback.trackException(error, severityLevel, properties);
      return;
    }

    this.appInsights!.trackException({
      exception: error,
      severityLevel,
      properties,
    });
  }

  // Track custom metrics
  trackMetric(name: string, average: number, sampleCount?: number, min?: number, max?: number, properties?: Record<string, any>): void {
    if (this.shouldUseFallback()) {
      telemetryFallback.trackMetric(name, average, sampleCount, min, max, properties);
      return;
    }

    this.appInsights!.trackMetric({
      name,
      average,
      sampleCount,
      min,
      max,
      properties,
    });
  }

  // Track dependencies (API calls, etc.)
  trackDependencyData(id: string, absoluteUrl: string, pathName: string, totalTime: number, success: boolean, resultCode: number, method?: string): void {
    if (this.shouldUseFallback()) {
      // Fallback doesn't have trackDependencyData, so we'll track as an API call
      telemetryFallback.trackApiCall(absoluteUrl, method || 'HTTP', resultCode, totalTime, success);
      return;
    }

    this.appInsights!.trackDependencyData({
      id,
      target: absoluteUrl,
      name: pathName,
      duration: totalTime,
      success,
      responseCode: resultCode,
      type: method || 'HTTP',
    });
  }

  // Track user authentication events
  trackUserAuthentication(userId: string, properties?: Record<string, any>): void {
    if (this.shouldUseFallback()) {
      telemetryFallback.trackUserAuthentication(userId, properties);
      return;
    }

    // Set authenticated user context
    this.appInsights!.setAuthenticatedUserContext(userId);

    // Track login event
    this.trackEvent('UserAuthenticated', {
      userId,
      ...properties,
    });
  }

  // Clear user context on logout
  clearUserContext(): void {
    if (this.shouldUseFallback()) {
      telemetryFallback.clearUserContext();
      return;
    }

    this.appInsights!.clearAuthenticatedUserContext();
    this.trackEvent('UserLoggedOut');
  }

  // Track API calls with timing
  trackApiCall(url: string, method: string, statusCode: number, duration: number, success: boolean): void {
    this.trackDependencyData(
      `API-${method}-${url}`,
      url,
      new URL(url, window.location.origin).pathname,
      duration,
      success,
      statusCode,
      method
    );

    // Also track as custom event for easier querying
    this.trackEvent('ApiCall', {
      url,
      method,
      statusCode: statusCode.toString(),
      success: success.toString(),
      duration: duration.toString(),
    });
  }

  // Track business events
  trackBusinessEvent(eventName: string, properties?: Record<string, any>): void {
    this.trackEvent(`Business.${eventName}`, properties);
  }

  // Track feature usage
  trackFeatureUsage(featureName: string, properties?: Record<string, any>): void {
    this.trackEvent(`Feature.${featureName}`, properties);
  }

  // Track performance metrics
  trackPerformanceMetric(metricName: string, value: number, properties?: Record<string, any>): void {
    this.trackMetric(`Performance.${metricName}`, value, 1, value, value, properties);
  }

  // Flush telemetry (useful before page unload)
  flush(): void {
    if (this.shouldUseFallback()) {
      telemetryFallback.flush();
      return;
    }

    this.appInsights!.flush();
  }
}

// Export singleton instance
export const applicationInsights = new ApplicationInsightsService();
export { ApplicationInsightsService };