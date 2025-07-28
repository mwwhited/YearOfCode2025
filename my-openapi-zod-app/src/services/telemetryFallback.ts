// Fallback telemetry service for when Application Insights is not available
// This ensures the application continues to work even without telemetry

export class TelemetryFallback {
  private isEnabled = false;

  constructor() {
    // Check if we're in development mode or if window exists (browser environment)
    this.isEnabled = process.env.NODE_ENV === 'development' || (typeof window !== 'undefined');
    console.log('📊 [Telemetry Fallback] Initialized, enabled:', this.isEnabled);
  }

  trackEvent(name: string, properties?: Record<string, any>, measurements?: Record<string, number>): void {
    if (this.isEnabled) {
      console.log('📊 [Telemetry] Event:', name, { properties, measurements });
    }
  }

  trackPageView(name?: string, url?: string, properties?: Record<string, any>): void {
    if (this.isEnabled) {
      console.log('📄 [Telemetry] Page View:', name || url, { properties });
    }
  }

  trackException(error: Error, severityLevel?: number, properties?: Record<string, any>): void {
    if (this.isEnabled) {
      console.log('🚨 [Telemetry] Exception:', error.message, { severityLevel, properties, stack: error.stack });
    }
  }

  trackMetric(name: string, average: number, sampleCount?: number, min?: number, max?: number, properties?: Record<string, any>): void {
    if (this.isEnabled) {
      console.log('📈 [Telemetry] Metric:', name, { average, sampleCount, min, max, properties });
    }
  }

  trackApiCall(url: string, method: string, statusCode: number, duration: number, success: boolean): void {
    if (this.isEnabled) {
      console.log('🌐 [Telemetry] API Call:', method, url, { statusCode, duration, success });
    }
  }

  trackBusinessEvent(eventName: string, properties?: Record<string, any>): void {
    if (this.isEnabled) {
      console.log('💼 [Telemetry] Business Event:', eventName, { properties });
    }
  }

  trackFeatureUsage(featureName: string, properties?: Record<string, any>): void {
    if (this.isEnabled) {
      console.log('🎯 [Telemetry] Feature Usage:', featureName, { properties });
    }
  }

  trackPerformanceMetric(metricName: string, value: number, properties?: Record<string, any>): void {
    if (this.isEnabled) {
      console.log('⚡ [Telemetry] Performance:', metricName, { value, properties });
    }
  }

  trackUserAuthentication(userId: string, properties?: Record<string, any>): void {
    if (this.isEnabled) {
      console.log('👤 [Telemetry] User Auth:', userId, { properties });
    }
  }

  clearUserContext(): void {
    if (this.isEnabled) {
      console.log('👤 [Telemetry] User Context Cleared');
    }
  }

  flush(): void {
    if (this.isEnabled) {
      console.log('📤 [Telemetry] Flush Called');
    }
  }
}

export const telemetryFallback = new TelemetryFallback();