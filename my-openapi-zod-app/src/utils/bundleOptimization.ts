/**
 * Bundle optimization utilities and strategies
 */

// Lazy loading utilities
export const loadComponent = async <T>(
  importFn: () => Promise<{ default: T }>,
  fallback?: React.ComponentType
): Promise<T> => {
  try {
    const module = await importFn();
    return module.default;
  } catch (error) {
    console.error('Failed to load component:', error);
    if (fallback) {
      return fallback as T;
    }
    throw error;
  }
};

// Performance monitoring for bundle loading
export const measureComponentLoad = async <T>(
  componentName: string,
  importFn: () => Promise<{ default: T }>
): Promise<T> => {
  const startTime = performance.now();
  
  try {
    const component = await loadComponent(importFn);
    const loadTime = performance.now() - startTime;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`🎯 Component "${componentName}" loaded in ${loadTime.toFixed(2)}ms`);
    }
    
    return component;
  } catch (error) {
    const loadTime = performance.now() - startTime;
    console.error(`❌ Component "${componentName}" failed to load after ${loadTime.toFixed(2)}ms:`, error);
    throw error;
  }
};

// Bundle size monitoring (development only)
export const logBundleMetrics = () => {
  if (process.env.NODE_ENV !== 'development') return;
  
  // Log performance metrics
  if ('performance' in window && 'getEntriesByType' in performance) {
    const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    const resourceEntries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    
    if (navigationEntries.length > 0) {
      const nav = navigationEntries[0];
      console.group('📊 Bundle Performance Metrics');
      console.log(`DOM Content Loaded: ${nav.domContentLoadedEventEnd - nav.domContentLoadedEventStart}ms`);
      console.log(`Total Load Time: ${nav.loadEventEnd - nav.loadEventStart}ms`);
      console.log(`First Contentful Paint: ${nav.domContentLoadedEventEnd - nav.fetchStart}ms`);
      
      // Log largest resources
      const jsResources = resourceEntries
        .filter(entry => entry.name.includes('.js'))
        .sort((a, b) => (b.transferSize || 0) - (a.transferSize || 0))
        .slice(0, 5);
        
      if (jsResources.length > 0) {
        console.log('Largest JS Files:');
        jsResources.forEach(resource => {
          const sizeKB = ((resource.transferSize || 0) / 1024).toFixed(1);
          const fileName = resource.name.split('/').pop();
          console.log(`  ${fileName}: ${sizeKB}KB`);
        });
      }
      
      console.groupEnd();
    }
  }
};

// Tree shaking optimization helpers
export const createSelectiveImport = <T extends Record<string, any>>(
  module: T,
  selectedKeys: (keyof T)[]
): Partial<T> => {
  const result: Partial<T> = {};
  selectedKeys.forEach(key => {
    if (key in module) {
      result[key] = module[key];
    }
  });
  return result;
};

// Memory usage monitoring
export const monitorMemoryUsage = () => {
  if (process.env.NODE_ENV !== 'development') return;
  
  if ('memory' in performance) {
    const memory = (performance as any).memory;
    console.log('🧠 Memory Usage:', {
      used: `${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB`,
      total: `${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)}MB`,
      limit: `${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)}MB`
    });
  }
};

// Initialize bundle monitoring in development
if (process.env.NODE_ENV === 'development') {
  // Log metrics after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      logBundleMetrics();
      monitorMemoryUsage();
    }, 1000);
  });
}