import { applicationInsights } from './applicationInsights';

interface ApiCallInfo {
  url: string;
  method: string;
  startTime: number;
}

// Store ongoing API calls
const apiCalls = new Map<string, ApiCallInfo>();

// Generate unique ID for API call tracking
const generateCallId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Intercept fetch requests
const originalFetch = window.fetch;

window.fetch = async function(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  const callId = generateCallId();
  const url = typeof input === 'string' ? input : input.toString();
  const method = init?.method || 'GET';
  const startTime = performance.now();

  // Store call info
  apiCalls.set(callId, {
    url,
    method,
    startTime,
  });

  try {
    const response = await originalFetch(input, init);
    const endTime = performance.now();
    const duration = endTime - startTime;

    // Track successful API call
    applicationInsights.trackApiCall(
      url,
      method,
      response.status,
      duration,
      response.ok
    );

    // Clean up
    apiCalls.delete(callId);

    return response;
  } catch (error) {
    const endTime = performance.now();
    const duration = endTime - startTime;

    // Track failed API call
    applicationInsights.trackApiCall(
      url,
      method,
      0, // No status code for network errors
      duration,
      false
    );

    // Track the exception
    applicationInsights.trackException(
      error instanceof Error ? error : new Error(String(error)),
      2, // Warning level
      {
        url,
        method,
        duration: duration.toString(),
        callId,
      }
    );

    // Clean up
    apiCalls.delete(callId);

    throw error;
  }
};

// Intercept XMLHttpRequest (for older libraries that don't use fetch)
const originalXHROpen = XMLHttpRequest.prototype.open;
const originalXHRSend = XMLHttpRequest.prototype.send;

XMLHttpRequest.prototype.open = function(method: string, url: string | URL, async?: boolean, user?: string | null, password?: string | null): void {
  // Store request info on the XHR object
  (this as any)._aiMethod = method;
  (this as any)._aiUrl = typeof url === 'string' ? url : url.toString();
  (this as any)._aiStartTime = performance.now();
  
  return originalXHROpen.call(this, method, url, async ?? true, user, password);
};

XMLHttpRequest.prototype.send = function(body?: Document | XMLHttpRequestBodyInit | null): void {
  const xhr = this;
  const method = (xhr as any)._aiMethod;
  const url = (xhr as any)._aiUrl;
  const startTime = (xhr as any)._aiStartTime;

  if (method && url && startTime) {
    // Add event listeners to track completion
    xhr.addEventListener('loadend', () => {
      const endTime = performance.now();
      const duration = endTime - startTime;

      applicationInsights.trackApiCall(
        url,
        method,
        xhr.status,
        duration,
        xhr.status >= 200 && xhr.status < 400
      );
    });

    xhr.addEventListener('error', () => {
      const endTime = performance.now();
      const duration = endTime - startTime;

      applicationInsights.trackApiCall(
        url,
        method,
        xhr.status || 0,
        duration,
        false
      );

      applicationInsights.trackException(
        new Error(`XHR request failed: ${method} ${url}`),
        2, // Warning level
        {
          url,
          method,
          status: xhr.status.toString(),
          duration: duration.toString(),
        }
      );
    });
  }

  return originalXHRSend.call(this, body);
};

// Track unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  applicationInsights.trackException(
    event.reason instanceof Error ? event.reason : new Error(String(event.reason)),
    3, // Error level
    {
      type: 'UnhandledPromiseRejection',
      reason: String(event.reason),
    }
  );
});

// Track global errors
window.addEventListener('error', (event) => {
  applicationInsights.trackException(
    event.error || new Error(event.message),
    3, // Error level
    {
      type: 'GlobalError',
      filename: event.filename,
      lineno: event.lineno?.toString(),
      colno: event.colno?.toString(),
      message: event.message,
    }
  );
});

// Clean up on page unload
window.addEventListener('beforeunload', () => {
  // Flush any pending telemetry
  applicationInsights.flush();
  
  // Clear pending API calls
  apiCalls.clear();
});

export { apiCalls };