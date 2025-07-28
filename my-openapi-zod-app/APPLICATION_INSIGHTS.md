# Application Insights Integration Guide

## Overview
The GreenOnion application includes comprehensive Azure Application Insights integration for monitoring, telemetry, and analytics. This provides real-time insights into application performance, user behavior, and error tracking.

## Features Included

### 🔍 **Automatic Tracking**
- **Page Views**: Automatic route tracking with React Router integration
- **API Calls**: All HTTP requests (fetch and XMLHttpRequest) are automatically tracked
- **User Sessions**: User authentication and session management
- **Performance Metrics**: Page load times, API response times
- **Errors & Exceptions**: Unhandled errors and promise rejections

### 📊 **Business Intelligence**
- **Feature Usage**: Track which features users interact with
- **User Journey**: Page flow and navigation patterns  
- **Custom Events**: Business-specific event tracking
- **Performance Monitoring**: Dashboard load times, API performance

### 🎯 **Custom Telemetry**
- **User Context**: Track authenticated users with roles
- **Custom Properties**: Environment, version, user roles
- **Business Events**: Product actions, category management
- **Performance Metrics**: Custom timing measurements

## Setup Instructions

### 1. Create Application Insights Resource

In the Azure Portal:
1. Navigate to "Create a resource" → "Application Insights"
2. Configure:
   - **Subscription**: Your Azure subscription
   - **Resource Group**: Same as your other Azure resources
   - **Name**: `greenonion-insights-[environment]`
   - **Region**: Same region as your web app
   - **Resource Mode**: Classic or Workspace-based

### 2. Get Connection String

1. Go to your Application Insights resource
2. Navigate to "Overview" → "Essentials"
3. Copy the "Connection String" (not the instrumentation key)
4. Format: `InstrumentationKey=xxx;IngestionEndpoint=https://xxx.in.applicationinsights.azure.com/;LiveEndpoint=https://xxx.livediagnostics.monitor.azure.com/`

### 3. Configure Application

Update your `public/config.json`:

```json
{
  "applicationInsights": {
    "connectionString": "YOUR_CONNECTION_STRING_HERE",
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

### 4. Environment-Specific Configuration

#### Development
```json
{
  "applicationInsights": {
    "connectionString": "YOUR_DEV_CONNECTION_STRING",
    "enableDebug": true,
    "enableAutoRouteTracking": true
  }
}
```

#### Production
```json
{
  "applicationInsights": {
    "connectionString": "YOUR_PROD_CONNECTION_STRING",
    "enableDebug": false,
    "enableAutoRouteTracking": true,
    "enableRequestHeaderTracking": false,
    "enableResponseHeaderTracking": false
  }
}
```

## Usage Examples

### Using the Hook in Components

```typescript
import { useApplicationInsights } from '../hooks/useApplicationInsights';

const MyComponent = () => {
  const { trackEvent, trackFeatureUsage, trackPerformanceMetric } = useApplicationInsights();

  const handleButtonClick = () => {
    trackFeatureUsage('MyFeature.ButtonClick', {
      userId: user?.id,
      userRole: user?.role,
      source: 'header'
    });
  };

  const handleDataLoad = async () => {
    const startTime = performance.now();
    
    try {
      const data = await fetchData();
      const loadTime = performance.now() - startTime;
      
      trackPerformanceMetric('DataLoadTime', loadTime, {
        recordCount: data.length.toString(),
        success: 'true'
      });
    } catch (error) {
      const loadTime = performance.now() - startTime;
      trackPerformanceMetric('DataLoadTime', loadTime, {
        success: 'false',
        error: error.message
      });
    }
  };

  return (
    <Button onClick={handleButtonClick}>
      Track This Click
    </Button>
  );
};
```

### Manual Tracking Examples

```typescript
import { applicationInsights } from '../services/applicationInsights';

// Track custom business events
applicationInsights.trackBusinessEvent('ProductCreated', {
  productId: '123',
  categoryId: '456',
  userId: 'user789'
});

// Track feature usage
applicationInsights.trackFeatureUsage('SearchFilter', {
  filterType: 'category',
  resultCount: 25
});

// Track performance metrics
applicationInsights.trackPerformanceMetric('DatabaseQuery', 150, {
  queryType: 'product-search',
  recordCount: 100
});

// Track custom events with measurements
applicationInsights.trackEvent('DataExport', 
  { 
    format: 'xlsx',
    userId: 'user123' 
  },
  { 
    recordCount: 1000,
    fileSizeMB: 2.5 
  }
);
```

## Data Available in Azure Portal

### 📈 **Performance Monitoring**
- **Application Map**: Visual representation of dependencies
- **Performance**: Page load times, API response times
- **Failures**: Error rates, failed requests
- **Metrics**: Custom metrics and KPIs

### 👥 **User Analytics**
- **Users**: Active users, new vs returning
- **User Flows**: How users navigate through the app
- **Cohorts**: User segments and retention analysis
- **Funnels**: Conversion tracking through processes

### 🔍 **Custom Dashboards**
- **Business Metrics**: Feature usage, product activity
- **Technical Metrics**: Performance, errors, availability
- **User Experience**: Page views, session duration
- **API Analytics**: Request patterns, response times

## Query Examples (KQL)

### User Activity
```kusto
// Daily active users
customEvents
| where timestamp > ago(30d)
| where name == "UserAuthenticated"
| summarize dcount(tostring(customDimensions.userId)) by bin(timestamp, 1d)
| render timechart
```

### Feature Usage
```kusto
// Most used features
customEvents
| where timestamp > ago(7d)
| where name startswith "Feature."
| summarize count() by name
| order by count_ desc
```

### Performance Analysis
```kusto
// API performance trends
customMetrics
| where timestamp > ago(24h)
| where name == "Performance.ApiCallDuration"
| summarize avg(value), percentile(value, 95) by bin(timestamp, 1h)
| render timechart
```

### Error Analysis
```kusto
// Recent exceptions by user
exceptions
| where timestamp > ago(1d)
| summarize count() by tostring(customDimensions.userId), problemId
| order by count_ desc
```

## Alerting and Monitoring

### Recommended Alerts

1. **High Error Rate**
   ```kusto
   exceptions
   | where timestamp > ago(5m)
   | summarize count()
   | where count_ > 10
   ```

2. **Slow API Response**
   ```kusto
   customMetrics
   | where name == "Performance.ApiCallDuration"
   | where timestamp > ago(5m)
   | summarize avg(value)
   | where avg_value > 2000  // 2 seconds
   ```

3. **Low User Activity**
   ```kusto
   customEvents
   | where name == "UserAuthenticated"
   | where timestamp > ago(1h)
   | summarize dcount(tostring(customDimensions.userId))
   | where dcount_customDimensions_userId < 5
   ```

### Dashboard Creation

1. Go to Azure Portal → Application Insights → Workbooks
2. Create custom workbooks with:
   - User activity charts
   - Performance metrics
   - Error rate trends
   - Feature usage statistics
   - API performance monitoring

## Privacy Considerations

### ✅ **Safe to Track**
- User IDs (hashed or anonymized)
- Feature usage patterns
- Performance metrics
- Error information
- Business events

### ❌ **Never Track**
- Personal information (names, emails, addresses)
- Authentication tokens or passwords
- Sensitive business data
- Personally identifiable information (PII)
- Financial information

### Data Retention
- Configure data retention in Application Insights
- Default: 90 days for detailed data
- Consider longer retention for aggregated metrics
- Implement data purging policies as needed

## Troubleshooting

### Common Issues

**1. No data appearing**
- Verify connection string is correct
- Check browser network tab for telemetry requests
- Ensure Application Insights resource is in same region
- Confirm configuration is loaded properly

**2. Missing custom events**
- Check if Application Insights is initialized
- Verify custom events are being called
- Check browser console for JavaScript errors
- Ensure proper async/await usage

**3. Performance impact**
- Monitor bundle size impact (~100KB for AI libraries)
- Consider lazy loading for non-critical telemetry
- Use sampling for high-volume applications
- Optimize custom event frequency

### Debug Commands

```javascript
// Check if Application Insights is loaded
console.log(window.appInsights);

// Check current configuration
console.log(applicationInsights.getAppInsights()?.config);

// View recent telemetry
console.log(applicationInsights.getAppInsights()?.core);

// Force flush pending telemetry
applicationInsights.flush();
```

## Best Practices

### 🎯 **Event Naming**
- Use consistent naming conventions
- Prefix with category: `Feature.`, `Business.`, `Performance.`
- Be specific but not overly verbose
- Include context in properties, not event names

### 📊 **Custom Properties**
- Always include user context when relevant
- Add environment and version information
- Use consistent property names across events
- Keep property values as strings for better querying

### ⚡ **Performance**
- Batch related events when possible
- Use sampling for high-frequency events
- Avoid tracking every user interaction
- Focus on meaningful business events

### 🔒 **Security**
- Never log sensitive information
- Hash or anonymize user identifiers
- Review telemetry data before production
- Implement data governance policies