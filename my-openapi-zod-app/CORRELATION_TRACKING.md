# API Correlation Tracking System

## Overview
The API correlation tracking system provides comprehensive request tracing and user action correlation for all API calls made through the generated client base.

## Key Features

### 1. Header Management
All API requests now include the following headers:

#### Authentication & Session
- `Authorization: Bearer <token>` - MSAL-acquired JWT token
- `X-Session-ID` - User's MSAL homeAccountId for session tracking

#### Request Correlation
- `X-Request-ID` - **Unique per API call** (UUID v4)
- `X-Correlation-ID` - **Set per user action request chain** (when user initiates an action)

#### User Action Tracking
- `X-USER-ACTION-ID` - Button component ID (e.g., `btn-dashboard-add-product`)
- `X-USER-ACTION-LABEL` - Computed label (e.g., `dashboard-add-product`)
- `X-USER-ACTION-PAGE` - Current page (e.g., `dashboard`)
- `X-USER-ACTION-TYPE` - Action type (e.g., `Add Product`)
- `X-USER-ACTION-EVENT` - Event name for telemetry (e.g., `ButtonClick`)
- `X-USER-ACTION-TIMESTAMP` - When the action was initiated

## Implementation Details

### Components

#### 1. CorrelationManager (`src/utils/correlationManager.ts`)
- Singleton pattern for global correlation state
- Manages correlation IDs and user action data
- Provides headers for API requests

#### 2. CorrelationContext (`src/contexts/CorrelationContext.tsx`)
- React context for component-level correlation management
- Integrates with CorrelationManager for state persistence

#### 3. Updated Button Component (`src/components/controls/Button.tsx`)
- Automatically starts user action correlation on click
- Tracks same values as Application Insights telemetry
- Generates consistent action IDs and labels

#### 4. Enhanced ClientBase (`src/api/_ClientBase.ts`)
- Uses MSAL for authentication instead of GlobalState
- Automatically includes correlation headers
- Generates unique request IDs per API call

## Request Flow Example

```
1. User clicks "Add Product" button on Dashboard
   ↓
2. Button.tsx calls correlationManager.startUserAction({
     id: "btn-dashboard-add-product",
     label: "dashboard-add-product", 
     page: "dashboard",
     action: "Add Product",
     eventName: "ButtonClick"
   })
   ↓
3. New correlation ID generated (e.g., "abc123...")
   ↓
4. API call made through generated client
   ↓
5. ClientBase.transformOptions() adds headers:
   - X-Correlation-ID: "abc123..."
   - X-Request-ID: "def456..." (unique per call)
   - X-USER-ACTION-ID: "btn-dashboard-add-product"
   - X-USER-ACTION-LABEL: "dashboard-add-product"
   - X-USER-ACTION-PAGE: "dashboard"
   - X-USER-ACTION-TYPE: "Add Product"
   - X-USER-ACTION-EVENT: "ButtonClick"
   - X-USER-ACTION-TIMESTAMP: "1643723400000"
```

## Usage

### For Generated API Clients
No changes required! All generated clients automatically include correlation headers:

```typescript
import { ProductsClient } from '@/api/GreenOnion';

const client = new ProductsClient();
// Headers are automatically added by ClientBase
const products = await client.getAll();
```

### For Custom Correlation Tracking
```typescript
import { useCorrelation } from '@/contexts/CorrelationContext';

const MyComponent = () => {
  const { startUserAction } = useCorrelation();
  
  const handleCustomAction = () => {
    startUserAction({
      id: 'custom-action-id',
      label: 'custom-action',
      page: 'my-page',
      action: 'Custom Action',
      eventName: 'CustomEvent'
    });
    
    // Subsequent API calls will include correlation headers
  };
};
```

## Benefits

1. **Request Tracing**: Each API call has unique ID for debugging
2. **User Action Correlation**: Multiple API calls from same user action share correlation ID
3. **Telemetry Integration**: Headers match Application Insights tracking data
4. **Automatic MSAL Integration**: Seamless authentication with token refresh
5. **Zero Configuration**: Works automatically with all generated API clients

## Header Lifecycle

- **X-Request-ID**: Generated fresh for each API call
- **X-Correlation-ID**: Set when user initiates action, persists until new action
- **User Action Headers**: Set when user clicks tracked button, persists until new action
- **Authorization**: Acquired from MSAL with automatic refresh

This system provides comprehensive API request tracking while maintaining compatibility with existing generated API clients.