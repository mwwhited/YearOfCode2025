/**
 * Token Cache Service - Similar to original app's GlobalState token management
 * Extracts idToken from MSAL accounts and caches until expiry
 */

import type { AccountInfo } from '@azure/msal-browser';

interface CachedToken {
  token: string;
  expiresAt: number;
  account: AccountInfo;
}

class TokenCacheService {
  private static instance: TokenCacheService;
  private cachedToken: CachedToken | null = null;
  private readonly STORAGE_KEY = 'greenonion_cached_token';

  private constructor() {
    // Try to restore from localStorage on initialization
    this.restoreFromStorage();
  }

  public static getInstance(): TokenCacheService {
    if (!TokenCacheService.instance) {
      TokenCacheService.instance = new TokenCacheService();
    }
    return TokenCacheService.instance;
  }

  /**
   * Extract and cache idToken from MSAL account (like original useProfile.ts)
   */
  public setTokenFromAccount(account: AccountInfo): void {
    if (!account.idToken) {
      console.warn('⚠️ No idToken found in account');
      return;
    }

    try {
      // Parse JWT to get expiry
      const tokenPayload = this.parseJwt(account.idToken);
      const expiresAt = tokenPayload.exp * 1000; // Convert to milliseconds

      const cachedToken: CachedToken = {
        token: account.idToken,
        expiresAt,
        account
      };

      this.cachedToken = cachedToken;
      
      // Store in localStorage (like original app)
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cachedToken));
      
      console.log('✅ Token cached successfully', {
        username: account.username,
        expiresAt: new Date(expiresAt).toISOString(),
        tokenLength: account.idToken.length
      });

    } catch (error) {
      console.error('❌ Error caching token:', error);
    }
  }

  /**
   * Get current token if valid (like original GlobalState.getToken())
   */
  public getToken(): string | null {
    if (!this.cachedToken) {
      return null;
    }

    // Check if token is expired
    const now = Date.now();
    if (now >= this.cachedToken.expiresAt) {
      console.log('⏰ Cached token expired, clearing cache');
      this.clearToken();
      return null;
    }

    return this.cachedToken.token;
  }

  /**
   * Get cached account info
   */
  public getAccount(): AccountInfo | null {
    if (!this.cachedToken) {
      return null;
    }

    // Check if token is expired
    const now = Date.now();
    if (now >= this.cachedToken.expiresAt) {
      this.clearToken();
      return null;
    }

    return this.cachedToken.account;
  }

  /**
   * Check if we have a valid cached token
   */
  public hasValidToken(): boolean {
    return this.getToken() !== null;
  }

  /**
   * Clear cached token (like logout)
   */
  public clearToken(): void {
    this.cachedToken = null;
    localStorage.removeItem(this.STORAGE_KEY);
    console.log('🗑️ Token cache cleared');
  }

  /**
   * Get token expiry info
   */
  public getTokenInfo(): { expiresAt: number; expiresIn: number } | null {
    if (!this.cachedToken) {
      return null;
    }

    const now = Date.now();
    return {
      expiresAt: this.cachedToken.expiresAt,
      expiresIn: Math.max(0, this.cachedToken.expiresAt - now)
    };
  }

  /**
   * Restore token from localStorage on app startup
   */
  private restoreFromStorage(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) return;

      const cachedToken: CachedToken = JSON.parse(stored);
      
      // Check if stored token is still valid
      const now = Date.now();
      if (now < cachedToken.expiresAt) {
        this.cachedToken = cachedToken;
        console.log('✅ Token restored from storage', {
          username: cachedToken.account.username,
          expiresIn: Math.round((cachedToken.expiresAt - now) / 1000 / 60) + ' minutes'
        });
      } else {
        // Remove expired token
        localStorage.removeItem(this.STORAGE_KEY);
        console.log('⏰ Stored token was expired, removed from storage');
      }
    } catch (error) {
      console.error('❌ Error restoring token from storage:', error);
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }

  /**
   * Parse JWT token payload (simple implementation)
   */
  private parseJwt(token: string): any {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Error parsing JWT:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const tokenCache = TokenCacheService.getInstance();