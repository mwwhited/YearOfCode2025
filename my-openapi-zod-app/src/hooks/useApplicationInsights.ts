import { useCallback } from 'react';
import { applicationInsights } from '@/services/applicationInsights';

export interface UseApplicationInsightsReturn {
  trackEvent: (name: string, properties?: Record<string, any>, measurements?: Record<string, number>) => void;
  trackPageView: (name?: string, url?: string, properties?: Record<string, any>) => void;
  trackException: (error: Error, severityLevel?: number, properties?: Record<string, any>) => void;
  trackMetric: (name: string, average: number, sampleCount?: number, min?: number, max?: number, properties?: Record<string, any>) => void;
  trackApiCall: (url: string, method: string, statusCode: number, duration: number, success: boolean) => void;
  trackBusinessEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackFeatureUsage: (featureName: string, properties?: Record<string, any>) => void;
  trackPerformanceMetric: (metricName: string, value: number, properties?: Record<string, any>) => void;
  trackUserAuthentication: (userId: string, properties?: Record<string, any>) => void;
  clearUserContext: () => void;
  flush: () => void;
}

export const useApplicationInsights = (): UseApplicationInsightsReturn => {
  const trackEvent = useCallback((name: string, properties?: Record<string, any>, measurements?: Record<string, number>) => {
    applicationInsights.trackEvent(name, properties, measurements);
  }, []);

  const trackPageView = useCallback((name?: string, url?: string, properties?: Record<string, any>) => {
    applicationInsights.trackPageView(name, url, properties);
  }, []);

  const trackException = useCallback((error: Error, severityLevel?: number, properties?: Record<string, any>) => {
    applicationInsights.trackException(error, severityLevel, properties);
  }, []);

  const trackMetric = useCallback((name: string, average: number, sampleCount?: number, min?: number, max?: number, properties?: Record<string, any>) => {
    applicationInsights.trackMetric(name, average, sampleCount, min, max, properties);
  }, []);

  const trackApiCall = useCallback((url: string, method: string, statusCode: number, duration: number, success: boolean) => {
    applicationInsights.trackApiCall(url, method, statusCode, duration, success);
  }, []);

  const trackBusinessEvent = useCallback((eventName: string, properties?: Record<string, any>) => {
    applicationInsights.trackBusinessEvent(eventName, properties);
  }, []);

  const trackFeatureUsage = useCallback((featureName: string, properties?: Record<string, any>) => {
    applicationInsights.trackFeatureUsage(featureName, properties);
  }, []);

  const trackPerformanceMetric = useCallback((metricName: string, value: number, properties?: Record<string, any>) => {
    applicationInsights.trackPerformanceMetric(metricName, value, properties);
  }, []);

  const trackUserAuthentication = useCallback((userId: string, properties?: Record<string, any>) => {
    applicationInsights.trackUserAuthentication(userId, properties);
  }, []);

  const clearUserContext = useCallback(() => {
    applicationInsights.clearUserContext();
  }, []);

  const flush = useCallback(() => {
    applicationInsights.flush();
  }, []);

  return {
    trackEvent,
    trackPageView,
    trackException,
    trackMetric,
    trackApiCall,
    trackBusinessEvent,
    trackFeatureUsage,
    trackPerformanceMetric,
    trackUserAuthentication,
    clearUserContext,
    flush,
  };
};