# GreenOnion Application Configuration Guide

## Overview
The GreenOnion application uses runtime configuration via a `config.json` file, allowing you to modify settings without rebuilding the application. This is ideal for different deployment environments and post-build configuration changes.

## Configuration File Location
The configuration file must be placed at: **`public/config.json`**

## Setup Instructions

### 1. Initial Setup
```bash
# Copy the example configuration
cp config.example.json public/config.json

# Edit the configuration with your values
nano public/config.json  # or use your preferred editor
```

### 2. Azure B2C Configuration
Update the `azure` section with your Azure B2C tenant information:

```json
{
  "azure": {
    "clientId": "12345678-1234-1234-1234-123456789012",
    "authority": "https://yourtenant.b2clogin.com/yourtenant.onmicrosoft.com/B2C_1_signupsignin",
    "knownAuthorities": ["yourtenant.b2clogin.com"],
    "redirectUri": "/",
    "postLogoutRedirectUri": "/"
  }
}
```

**Required Steps in Azure Portal:**
1. Create or use an existing Azure B2C tenant
2. Register a new application
3. Configure redirect URIs to match your domain
4. Note the Application (client) ID
5. Configure user flows (sign-up/sign-in policies)

### 3. API Configuration
Update the `api` section with your GreenOnion API details:

```json
{
  "api": {
    "baseUrl": "https://api.yourdomain.com",
    "scopes": ["openid", "profile", "https://yourtenant.onmicrosoft.com/api/read"],
    "timeout": 30000
  }
}
```

### 4. Application Settings
Customize application behavior:

```json
{
  "app": {
    "name": "Your Organization - GreenOnion",
    "version": "1.0.0",
    "environment": "production",
    "features": {
      "monitoring": false,
      "analytics": true
    }
  }
}
```

### 5. Application Insights Configuration
Configure Azure Application Insights for telemetry and monitoring:

```json
{
  "applicationInsights": {
    "connectionString": "InstrumentationKey=12345678-1234-1234-1234-123456789012;IngestionEndpoint=https://eastus-8.in.applicationinsights.azure.com/;LiveEndpoint=https://eastus.livediagnostics.monitor.azure.com/",
    "enableAutoRouteTracking": true,
    "enableRequestHeaderTracking": false,
    "enableResponseHeaderTracking": false,
    "enableAjaxErrorStatusText": true,
    "enableAjaxPerfTracking": true,
    "enableUnhandledPromiseRejectionTracking": true,
    "enableCorsCorrelation": true,
    "disableFetchTracking": false,
    "enableDebug": false
  }
}
```

**Required Steps in Azure Portal:**
1. Create an Application Insights resource
2. Copy the connection string from the resource overview
3. Configure data retention policies
4. Set up alerts and dashboards

### 6. UI Preferences
Configure default UI settings:

```json
{
  "ui": {
    "theme": "saga-blue",
    "sidebarCollapsed": false,
    "itemsPerPage": 25
  }
}
```

## Environment-Specific Configurations

### Development Environment
```json
{
  "azure": {
    "clientId": "dev-client-id",
    "authority": "https://dev-tenant.b2clogin.com/..."
  },
  "api": {
    "baseUrl": "http://localhost:5000",
    "timeout": 10000
  },
  "app": {
    "environment": "development",
    "features": {
      "monitoring": true,
      "analytics": false
    }
  }
}
```

### Staging Environment
```json
{
  "azure": {
    "clientId": "staging-client-id",
    "authority": "https://staging-tenant.b2clogin.com/..."
  },
  "api": {
    "baseUrl": "https://staging-api.yourdomain.com",
    "timeout": 20000
  },
  "app": {
    "environment": "staging",
    "features": {
      "monitoring": true,
      "analytics": true
    }
  }
}
```

### Production Environment
```json
{
  "azure": {
    "clientId": "prod-client-id",
    "authority": "https://prod-tenant.b2clogin.com/..."
  },
  "api": {
    "baseUrl": "https://api.yourdomain.com",
    "timeout": 30000
  },
  "app": {
    "environment": "production",
    "features": {
      "monitoring": false,
      "analytics": true
    }
  }
}
```

## Deployment Workflow

### 1. Build Once, Deploy Everywhere
```bash
# Build the application
npm run build

# The built files in 'dist/' can be deployed to any environment
# Just place the appropriate config.json in the deployed public folder
```

### 2. Container Deployment
```dockerfile
# Dockerfile example
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
# config.json will be mounted or injected at runtime
```

```bash
# Deploy with config injection
docker run -d \
  -v /path/to/production-config.json:/usr/share/nginx/html/config.json \
  your-app:latest
```

### 3. Kubernetes Deployment
```yaml
# ConfigMap for the configuration
apiVersion: v1
kind: ConfigMap
metadata:
  name: greenonion-config
data:
  config.json: |
    {
      "azure": {
        "clientId": "k8s-client-id",
        ...
      }
    }
---
# Deployment with config volume
apiVersion: apps/v1
kind: Deployment
metadata:
  name: greenonion-app
spec:
  template:
    spec:
      containers:
      - name: app
        image: greenonion:latest
        volumeMounts:
        - name: config
          mountPath: /usr/share/nginx/html/config.json
          subPath: config.json
      volumes:
      - name: config
        configMap:
          name: greenonion-config
```

## Configuration Validation

The application automatically validates configuration on load:

### ✅ Valid Configuration
- Configuration loads successfully
- Application initializes normally
- Azure B2C authentication works
- API calls use correct endpoints

### ❌ Invalid Configuration
- Shows error screen with troubleshooting tips
- Provides retry mechanism
- Falls back to default configuration if possible
- Logs detailed error information to console

## Runtime Configuration Changes

### Hot Reload (Development Only)
During development, you can reload configuration without restarting:
```javascript
// In browser console
window.configManager?.reloadConfig()
```

### Production Updates
1. Update the `public/config.json` file on your server
2. Users will get the new configuration on their next browser refresh
3. No application rebuild or redeployment needed

## Security Considerations

### ⚠️ Important Security Notes
- **Never put secrets in config.json** - it's publicly accessible
- Client IDs are safe (they're meant to be public)
- Use Azure B2C's built-in security features
- Configure CORS properly on your API endpoints
- Use HTTPS in production environments

### Safe Configuration Items
- ✅ Azure B2C client IDs
- ✅ Public API endpoints
- ✅ UI preferences
- ✅ Feature flags
- ✅ Timeout values

### Unsafe Configuration Items
- ❌ Client secrets (use Azure B2C implicit flow instead)
- ❌ Private API keys
- ❌ Database connection strings
- ❌ Internal service URLs

## Troubleshooting

### Common Issues

**1. Configuration not loading**
- Check that `public/config.json` exists
- Verify JSON syntax is valid
- Check browser network tab for 404 errors

**2. Azure B2C authentication fails**
- Verify client ID is correct
- Check authority URL format
- Ensure redirect URIs are registered in Azure
- Verify user flows are configured correctly

**3. API calls failing**
- Check API base URL is accessible
- Verify CORS configuration on API server
- Check authentication token is being sent
- Validate API scopes in Azure B2C

**4. Application shows error screen**
- Check browser console for detailed errors
- Verify all required configuration fields are present
- Try the retry button after fixing configuration
- Compare with config.example.json structure

### Debugging Tools

**Browser Console Commands:**
```javascript
// Check current configuration
console.log(window.configManager?.getConfig())

// Reload configuration
window.configManager?.reloadConfig()

// Check authentication state
console.log(window.msalInstance?.getAllAccounts())
```

**Network Tab:**
- Look for `/config.json` request
- Check for CORS errors on API calls
- Verify authentication headers

## Configuration Schema Reference

### Complete Configuration Object
```typescript
interface AppConfig {
  azure: {
    clientId: string;           // Azure B2C Application ID
    authority: string;          // B2C Authority URL
    knownAuthorities: string[]; // Trusted B2C domains
    redirectUri: string;        // Post-login redirect
    postLogoutRedirectUri: string; // Post-logout redirect
  };
  api: {
    baseUrl: string;           // GreenOnion API base URL
    scopes: string[];          // OAuth scopes to request
    timeout: number;           // Request timeout in milliseconds
  };
  app: {
    name: string;              // Application display name
    version: string;           // Application version
    environment: string;       // Environment identifier
    features: {
      monitoring: boolean;     // Enable performance monitoring
      analytics: boolean;      // Enable usage analytics
    };
  };
  applicationInsights: {
    connectionString: string;  // Application Insights connection string
    instrumentationKey?: string; // Legacy instrumentation key (optional)
    enableAutoRouteTracking: boolean; // Automatic page view tracking
    enableRequestHeaderTracking: boolean; // Track HTTP request headers
    enableResponseHeaderTracking: boolean; // Track HTTP response headers
    enableAjaxErrorStatusText: boolean; // Include error text in telemetry
    enableAjaxPerfTracking: boolean; // Track AJAX performance
    enableUnhandledPromiseRejectionTracking: boolean; // Track promise rejections
    enableCorsCorrelation: boolean; // Enable CORS correlation headers
    disableFetchTracking: boolean; // Disable automatic fetch tracking
    enableDebug: boolean;      // Enable debug logging
  };
  ui: {
    theme: string;             // PrimeReact theme name
    sidebarCollapsed: boolean; // Default sidebar state
    itemsPerPage: number;      // Default pagination size
  };
}
```