// Simple monitoring and analytics utilities
import React from 'react';

export interface MonitoringEvent {
  name: string;
  timestamp: number;
  data?: Record<string, unknown>;
  level: 'info' | 'warn' | 'error';
}

export interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  timestamp: number;
}

class MonitoringService {
  private events: MonitoringEvent[] = [];
  private metrics: PerformanceMetric[] = [];
  private isEnabled: boolean;

  constructor() {
    this.isEnabled = process.env.NODE_ENV === 'production';
  }

  // Event tracking
  trackEvent(name: string, data?: Record<string, unknown>, level: 'info' | 'warn' | 'error' = 'info') {
    if (!this.isEnabled) return;

    const event: MonitoringEvent = {
      name,
      timestamp: Date.now(),
      data,
      level,
    };

    this.events.push(event);
    console.log(`[MONITORING] ${level.toUpperCase()}: ${name}`, data);

    // In production, you would send this to your monitoring service
    // this.sendToMonitoringService(event);
  }

  // Performance metrics
  trackMetric(name: string, value: number, unit: string = 'ms') {
    if (!this.isEnabled) return;

    const metric: PerformanceMetric = {
      name,
      value,
      unit,
      timestamp: Date.now(),
    };

    this.metrics.push(metric);
    console.log(`[PERFORMANCE] ${name}: ${value}${unit}`);

    // In production, you would send this to your monitoring service
    // this.sendMetricToService(metric);
  }

  // Error tracking
  trackError(error: Error, context?: Record<string, unknown>) {
    this.trackEvent('error', {
      message: error.message,
      stack: error.stack,
      context,
    }, 'error');
  }

  // User interactions
  trackUserAction(action: string, component: string, data?: Record<string, unknown>) {
    this.trackEvent('user_action', {
      action,
      component,
      ...data,
    });
  }

  // API call tracking
  trackApiCall(endpoint: string, method: string, duration: number, status: number) {
    this.trackEvent('api_call', {
      endpoint,
      method,
      duration,
      status,
    });

    this.trackMetric(`api_${method.toLowerCase()}_${endpoint.replace(/\//g, '_')}`, duration);
  }

  // Component performance
  trackComponentRender(componentName: string, renderTime: number) {
    this.trackMetric(`component_render_${componentName}`, renderTime);
  }

  // Get events for debugging
  getEvents(): MonitoringEvent[] {
    return [...this.events];
  }

  // Get metrics for debugging
  getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  // Clear events and metrics
  clear() {
    this.events = [];
    this.metrics = [];
  }

  // Enable/disable monitoring
  setEnabled(enabled: boolean) {
    this.isEnabled = enabled;
  }

  // Get summary stats
  getSummary() {
    const errorCount = this.events.filter(e => e.level === 'error').length;
    const warnCount = this.events.filter(e => e.level === 'warn').length;
    const infoCount = this.events.filter(e => e.level === 'info').length;

    return {
      totalEvents: this.events.length,
      errorCount,
      warnCount,
      infoCount,
      totalMetrics: this.metrics.length,
      timeRange: {
        start: Math.min(...this.events.map(e => e.timestamp)),
        end: Math.max(...this.events.map(e => e.timestamp)),
      },
    };
  }
}

// Create singleton instance
export const monitoring = new MonitoringService();

// React hook for component monitoring
export function useMonitoring(componentName: string) {
  const trackRender = (renderTime: number) => {
    monitoring.trackComponentRender(componentName, renderTime);
  };

  const trackUserAction = (action: string, data?: Record<string, unknown>) => {
    monitoring.trackUserAction(action, componentName, data);
  };

  const trackError = (error: Error, context?: Record<string, unknown>) => {
    monitoring.trackError(error, { component: componentName, ...context });
  };

  return {
    trackRender,
    trackUserAction,
    trackError,
  };
}

// Higher-order component for automatic monitoring
export function withMonitoring<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  componentName: string
) {
  return function MonitoredComponent(props: P) {
    const startTime = performance.now();
    
    React.useEffect(() => {
      const endTime = performance.now();
      monitoring.trackComponentRender(componentName, endTime - startTime);
    });

    return React.createElement(WrappedComponent, props);
  };
}

// Performance measurement utilities
export function measurePerformance<T>(
  name: string,
  fn: () => T
): T {
  const startTime = performance.now();
  const result = fn();
  const endTime = performance.now();
  
  monitoring.trackMetric(name, endTime - startTime);
  return result;
}

export async function measureAsyncPerformance<T>(
  name: string,
  fn: () => Promise<T>
): Promise<T> {
  const startTime = performance.now();
  const result = await fn();
  const endTime = performance.now();
  
  monitoring.trackMetric(name, endTime - startTime);
  return result;
}

// Web Vitals tracking (if available)
export function trackWebVitals() {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Track page load time
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      monitoring.trackMetric('page_load_time', loadTime);
    });

    // Track first contentful paint (if available)
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            monitoring.trackMetric('first_contentful_paint', entry.startTime);
          }
        });
      });
      observer.observe({ entryTypes: ['paint'] });
    }
  }
}

export default monitoring;