// Runtime configuration management for the application
// This allows configuration changes without rebuilding the application

export interface AppConfig {
  azure: {
    clientId: string;
    authority: string;
    knownAuthorities: string[];
    redirectUri: string;
    postLogoutRedirectUri: string;
  };
  api: {
    baseUrl: string;
    scopes: string[];
    timeout: number;
  };
  app: {
    name: string;
    version: string;
    environment: string;
    features: {
      monitoring: boolean;
      analytics: boolean;
    };
  };
  applicationInsights: {
    connectionString: string;
    instrumentationKey?: string;
    enableAutoRouteTracking: boolean;
    enableRequestHeaderTracking: boolean;
    enableResponseHeaderTracking: boolean;
    enableAjaxErrorStatusText: boolean;
    enableAjaxPerfTracking: boolean;
    enableUnhandledPromiseRejectionTracking: boolean;
    enableCorsCorrelation: boolean;
    disableFetchTracking: boolean;
    enableDebug: boolean;
  };
  ui: {
    theme: string;
    sidebarCollapsed: boolean;
    itemsPerPage: number;
  };
}

class ConfigManager {
  private config: AppConfig | null = null;
  private loadPromise: Promise<AppConfig> | null = null;

  async loadConfig(): Promise<AppConfig> {
    // Return cached config if already loaded
    if (this.config) {
      return this.config;
    }

    // Return existing promise if already loading
    if (this.loadPromise) {
      return this.loadPromise;
    }

    // Start loading config
    this.loadPromise = this.fetchConfig();
    this.config = await this.loadPromise;
    
    return this.config;
  }

  private async fetchConfig(): Promise<AppConfig> {
    try {
      const response = await fetch('/config.json', {
        cache: 'no-cache', // Always fetch fresh config
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to load config: ${response.status} ${response.statusText}`);
      }

      const config: AppConfig = await response.json();
      this.validateConfig(config);
      return config;
    } catch (error) {
      console.error('❌ Failed to load application configuration:', error);
      
      // Fallback to default configuration
      const fallbackConfig = this.getDefaultConfig();
      console.warn('⚠️ Using fallback configuration');
      return fallbackConfig;
    }
  }

  private validateConfig(config: AppConfig): void {
    const requiredFields = [
      'azure.clientId',
      'azure.authority',
      'api.baseUrl'
    ];

    for (const field of requiredFields) {
      const value = this.getNestedProperty(config, field);
      if (!value || (typeof value === 'string' && value.includes('your-'))) {
        console.warn(`⚠️ Configuration field '${field}' appears to be a placeholder`);
      }
    }

    // Validate Application Insights configuration
    if (!config.applicationInsights) {
      console.warn('⚠️ Application Insights configuration is missing');
    } else {
      const aiConfig = config.applicationInsights;
      if (!aiConfig.connectionString) {
        console.warn('⚠️ Application Insights connection string is empty');
      } else if (aiConfig.connectionString.includes('your-')) {
        console.warn('⚠️ Application Insights connection string appears to be a placeholder');
      }
    }
  }

  private getNestedProperty(obj: any, path: string): any {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }

  private getDefaultConfig(): AppConfig {
    return {
      azure: {
        clientId: 'default-client-id',
        authority: 'https://login.microsoftonline.com/common',
        knownAuthorities: ['login.microsoftonline.com'],
        redirectUri: '/',
        postLogoutRedirectUri: '/'
      },
      api: {
        baseUrl: 'http://localhost:3000',
        scopes: ['openid', 'profile'],
        timeout: 30000
      },
      app: {
        name: 'GreenOnion Application',
        version: '1.0.0',
        environment: 'development',
        features: {
          monitoring: false,
          analytics: false
        }
      },
      applicationInsights: {
        connectionString: '',
        enableAutoRouteTracking: true,
        enableRequestHeaderTracking: false,
        enableResponseHeaderTracking: false,
        enableAjaxErrorStatusText: true,
        enableAjaxPerfTracking: true,
        enableUnhandledPromiseRejectionTracking: true,
        enableCorsCorrelation: true,
        disableFetchTracking: false,
        enableDebug: false
      },
      ui: {
        theme: 'saga-blue',
        sidebarCollapsed: false,
        itemsPerPage: 25
      }
    };
  }

  getConfig(): AppConfig | null {
    return this.config;
  }

  // Utility methods for accessing specific config sections
  getAzureConfig() {
    return this.config?.azure;
  }

  getApiConfig() {
    return this.config?.api;
  }

  getAppConfig() {
    return this.config?.app;
  }

  getUiConfig() {
    return this.config?.ui;
  }

  getApplicationInsightsConfig() {
    return this.config?.applicationInsights;
  }

  // Reload configuration (useful for runtime updates)
  async reloadConfig(): Promise<AppConfig> {
    this.config = null;
    this.loadPromise = null;
    return this.loadConfig();
  }
}

// Export singleton instance
export const configManager = new ConfigManager();

// Export helper hook for React components
export { useConfig } from './useConfig';