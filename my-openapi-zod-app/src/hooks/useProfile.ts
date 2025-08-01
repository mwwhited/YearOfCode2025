/**
 * useProfile Hook - Similar to original app's useProfile.ts
 * Handles token extraction, caching, and profile loading
 */

import { useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react';
import { tokenCache } from '@/services/tokenCache';
import UserClient from '@/api/GreenOnion/Clients/UserClient';
import type { IQueryUserModel } from '@/api/GreenOnion/Models/QueryUserModel';
import { ClientBase } from '@/api/_ClientBase';
import { applicationInsights } from '@/services/applicationInsights';

interface UseProfileReturn {
  profile: IQueryUserModel | null;
  isLoading: boolean;
  error: string | null;
  hasValidProfile: boolean;
  isSystemMaintenance: boolean;
  clearProfile: () => void;
  refreshProfile: () => Promise<void>;
}

export const useProfile = (): UseProfileReturn => {
  const { instance, accounts } = useMsal();
  const [profile, setProfile] = useState<IQueryUserModel | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSystemMaintenance, setIsSystemMaintenance] = useState(false);

  /**
   * Check if error indicates API timeout or system maintenance
   */
  const isTimeoutError = (error: any): boolean => {
    if (!error) return false;
    
    const errorMessage = error.message || error.toString() || '';
    const errorCode = error.code || error.status || 0;
    
    // Check for common timeout indicators
    return (
      errorMessage.toLowerCase().includes('timeout') ||
      errorMessage.toLowerCase().includes('network error') ||
      errorMessage.toLowerCase().includes('fetch failed') ||
      errorMessage.toLowerCase().includes('connection') ||
      errorCode === 408 || // Request Timeout
      errorCode === 504 || // Gateway Timeout 
      errorCode === 503 || // Service Unavailable
      errorCode === 0      // Network error
    );
  };

  /**
   * Get current path for redirect URI, excluding login/logout paths
   */
  const getCurrentRedirectPath = (): string => {
    const currentPath = window.location.pathname;
    const excludedPaths = ['/login', '/logout', '/logoff'];
    
    if (excludedPaths.some(path => currentPath.toLowerCase().includes(path.toLowerCase()))) {
      return '/'; // Default to home for excluded paths
    }
    
    return currentPath + window.location.search; // Include query params
  };

  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 3;
    
    const initializeProfile = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Check if we have accounts from MSAL
        if (accounts.length === 0) {
          console.log('ℹ️ No MSAL accounts available yet - clearing profile');
          setProfile(null);
          return;
        }

        const account = accounts[0];
        console.log('🔍 Processing account for profile:', account.username);

        // Extract and cache idToken if available, otherwise proceed with account
        if (account.idToken) {
          tokenCache.setTokenFromAccount(account);
          console.log('✅ Token cached from idToken');
        } else {
          // No idToken available yet, but we can still initialize with the account
          console.log('⚠️ No idToken available, but proceeding with account authentication');
        }
        
        // Initialize API client with MSAL instance and account (always proceed)
        ClientBase.initialize(instance, account);
        
        console.log('✅ API client initialized, loading profile...');
        
        // Load profile from API - this should work even without cached idToken
        await loadUserProfile();

      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to initialize profile';
        console.error('❌ Profile initialization error:', errorMessage);
        setError(errorMessage);
        
        // Don't set profile to null immediately - keep trying
        // The user profile should never be null according to requirements
        if (!profile && retryCount < maxRetries) {
          retryCount++;
          console.log(`⚠️ Profile initialization failed, retrying (${retryCount}/${maxRetries}) in 2 seconds...`);
          
          setTimeout(() => {
            initializeProfile();
          }, 2000 * retryCount); // Exponential backoff
          return;
        }
        
        if (!profile) {
          console.log('⚠️ Profile initialization failed after all retries, but keeping existing profile if available');
        }
        
        // Track error but don't force logout
        applicationInsights.trackException(
          err instanceof Error ? err : new Error(errorMessage),
          2,
          { context: 'useProfile_initialize', forceLogout: false, retryCount }
        );
      } finally {
        setIsLoading(false);
      }
    };

    initializeProfile();
  }, [accounts, instance]);

  /**
   * Load user profile from API (similar to original useProfile.ts)
   */
  const loadUserProfile = async () => {
    try {
      const userClient = new UserClient();
      
      // Get the current user's objectId from MSAL account
      const account = accounts.length > 0 ? accounts[0] : null;
      if (!account) {
        throw new Error('No MSAL account available for profile lookup');
      }
      
      // Use the homeAccountId or localAccountId as the objectId
      const objectId = account.localAccountId || account.homeAccountId;
      if (!objectId) {
        throw new Error('No objectId available from MSAL account');
      }
      
      console.log('🔍 Loading profile for objectId:', objectId);
      
      // Call UserClient.Get() with the user's objectId
      const userData = await userClient.Get({ objectid: objectId });
      
      console.log('📋 Profile data received:', userData);
      
      if (userData) {
        // Validate user exists in system (like original objectId check)
        if (!userData.userId) {
          throw new Error('Invalid user profile: missing userId');
        }

        console.log('✅ Profile loaded successfully:', {
          userId: userData.userId,
          username: userData.firstName + ' ' + userData.lastName,
          roleName: userData.roleName,
          email: userData.email
        });

        setProfile(userData);
        
        // Track successful profile load
        applicationInsights.trackEvent('ProfileLoaded', {
          userId: userData.userId?.toString(),
          roleName: userData.roleName,
          hasDistrict: !!userData.schoolDistrictName,
          hasManufacturer: !!userData.manufacturerName
        });

      } else {
        throw new Error('No user data returned from API');
      }

    } catch (err) {
      console.error('❌ Failed to load user profile:', err);
      
      // Check if this is a timeout/maintenance error
      if (isTimeoutError(err)) {
        console.log('🚧 API timeout detected - system appears to be under maintenance');
        setIsSystemMaintenance(true);
        setError('System Offline For Maintenance');
        
        // Track maintenance event
        applicationInsights.trackEvent('SystemMaintenance', {
          error: err instanceof Error ? err.message : String(err),
          currentPath: window.location.pathname,
          timestamp: new Date().toISOString()
        });
        
        // Delay before logout to show maintenance message
        setTimeout(async () => {
          try {
            const redirectPath = getCurrentRedirectPath();
            console.log(`🔄 Redirecting to logout with return path: ${redirectPath}`);
            
            await instance.logoutRedirect({
              postLogoutRedirectUri: window.location.origin + redirectPath,
            });
          } catch (logoutError) {
            console.error('❌ Logout redirect failed:', logoutError);
            // Fallback: redirect to root
            window.location.href = '/';
          }
        }, 3000); // Show maintenance message for 3 seconds
        
        return; // Don't throw - let the maintenance UI show
      }
      
      // For other errors, set error state but don't trigger maintenance mode
      const errorMessage = err instanceof Error ? err.message : 'Failed to load profile';
      setError(errorMessage);
      
      throw err;
    }
  };

  /**
   * Clear profile data (used during logout)
   */
  const clearProfile = () => {
    console.log('🧹 Clearing user profile');
    setProfile(null);
    setError(null);
    setIsSystemMaintenance(false);
  };

  /**
   * Refresh profile data from API
   */
  const refreshProfile = async () => {
    if (accounts.length === 0) {
      console.log('ℹ️ No accounts available for profile refresh');
      return;
    }
    
    try {
      setIsLoading(true);
      setError(null);
      await loadUserProfile();
    } catch (err) {
      console.error('❌ Failed to refresh profile:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    profile,
    isLoading,
    error,
    hasValidProfile: profile !== null && !error,
    isSystemMaintenance,
    clearProfile,
    refreshProfile
  };
};