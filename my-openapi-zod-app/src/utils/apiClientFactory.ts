/**
 * Optimized API client factory with lazy loading and tree shaking
 */

import { logger } from './logger';

// Define client types for better tree shaking
export type ClientType = 
  | 'product' 
  | 'category' 
  | 'ingredient' 
  | 'allergen' 
  | 'user' 
  | 'manufacturer' 
  | 'district' 
  | 'dashboard';

// Client cache for singleton pattern
const clientCache = new Map<string, any>();

/**
 * Lazy load and cache API clients
 */
export const getApiClient = async <T>(
  clientType: ClientType,
  baseUrl?: string,
  http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }
): Promise<T> => {
  const cacheKey = `${clientType}_${baseUrl || 'default'}`;
  
  // Return cached instance if available
  if (clientCache.has(cacheKey)) {
    return clientCache.get(cacheKey);
  }

  let ClientClass: new (baseUrl?: string, http?: any) => T;

  // Lazy load the specific client
  switch (clientType) {
    case 'product':
      const { default: ProductClient } = await import('@/api/GreenOnion/Clients/ProductClient');
      ClientClass = ProductClient as any;
      break;
    
    case 'category':
      const { default: CategoryClient } = await import('@/api/GreenOnion/Clients/CategoryClient');
      ClientClass = CategoryClient as any;
      break;
    
    case 'ingredient':
      const { default: IngredientClient } = await import('@/api/GreenOnion/Clients/IngredientClient');
      ClientClass = IngredientClient as any;
      break;
    
    case 'allergen':
      const { default: AllergenClient } = await import('@/api/GreenOnion/Clients/AllergenClient');
      ClientClass = AllergenClient as any;
      break;
    
    case 'user':
      const { default: UserClient } = await import('@/api/GreenOnion/Clients/UserClient');
      ClientClass = UserClient as any;
      break;
    
    case 'manufacturer':
      const { default: ManufacturerClient } = await import('@/api/GreenOnion/Clients/ManufacturerClient');
      ClientClass = ManufacturerClient as any;
      break;
    
    case 'district':
      const { default: SchoolDistrictClient } = await import('@/api/GreenOnion/Clients/SchoolDistrictClient');
      ClientClass = SchoolDistrictClient as any;
      break;
    
    case 'dashboard':
      const { default: DashBoardClient } = await import('@/api/GreenOnion/Clients/DashBoardClient');
      ClientClass = DashBoardClient as any;
      break;
    
    default:
      throw new Error(`Unknown client type: ${clientType}`);
  }

  // Create and cache the client instance
  const client = new ClientClass(baseUrl, http);
  clientCache.set(cacheKey, client);
  
  logger.debug(`API client loaded: ${clientType}`);
  
  return client;
};

/**
 * Preload specific clients for better UX
 */
export const preloadApiClients = async (clientTypes: ClientType[]) => {
  const promises = clientTypes.map(type => getApiClient(type));
  await Promise.all(promises);
  logger.info(`Preloaded ${clientTypes.length} API clients`);
};

/**
 * Clear client cache (useful for testing or memory management)
 */
export const clearClientCache = () => {
  clientCache.clear();
  logger.debug('API client cache cleared');
};

/**
 * Get cache statistics
 */
export const getCacheStats = () => {
  const stats = {
    size: clientCache.size,
    keys: Array.from(clientCache.keys())
  };
  
  if (process.env.NODE_ENV === 'development') {
    console.log('🔧 API Client Cache Stats:', stats);
  }
  
  return stats;
};