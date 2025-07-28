/**
 * Helper utility to test API client integration with MSAL authentication
 * This demonstrates how to use the updated _ClientBase with MSAL tokens
 */

import { useAuth } from '@/hooks/useAuth';

/**
 * Example hook to demonstrate API client usage with authentication
 * This can be used as a template for actual API calls
 */
export const useApiClient = () => {
  const { isAuthenticated, user } = useAuth();

  /**
   * Example function showing how API clients will now automatically
   * include MSAL authentication tokens in requests
   */
  const makeAuthenticatedRequest = async (endpoint: string, options: RequestInit = {}) => {
    if (!isAuthenticated) {
      throw new Error('User must be authenticated to make API requests');
    }

    try {
      // Note: When you use any generated API client (e.g., ProductsClient, CategoriesClient),
      // they will now automatically:
      // 1. Get access token from MSAL using ClientBase.getAccessToken()
      // 2. Add Authorization: Bearer <token> header
      // 3. Add X-Session-ID, X-Correlation-ID, and X-Request-ID headers
      // 4. Use the configured API base URL from config.json
      
      const response = await fetch(endpoint, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  };

  return {
    makeAuthenticatedRequest,
    isAuthenticated,
    user,
  };
};

/**
 * Example of how to use generated API clients with MSAL authentication
 * 
 * Before these changes:
 * - API clients used GlobalState.getJwtToken() which returned null
 * - No automatic token acquisition
 * - Manual token management required
 * 
 * After these changes:
 * - API clients automatically use MSAL token acquisition
 * - Tokens are acquired silently when possible
 * - Automatic fallback to redirect flow if silent acquisition fails
 * - Proper session and correlation ID tracking
 * 
 * Usage example:
 * ```typescript
 * import { ProductsClient } from '@/api/GreenOnion';
 * 
 * const productsClient = new ProductsClient();
 * // The client will now automatically include MSAL authentication
 * const products = await productsClient.getAll();
 * ```
 */