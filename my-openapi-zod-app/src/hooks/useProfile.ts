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
}

export const useProfile = (): UseProfileReturn => {
  const { instance, accounts } = useMsal();
  const [profile, setProfile] = useState<IQueryUserModel | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeProfile = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Check if we have accounts from MSAL
        if (accounts.length === 0) {
          console.log('ℹ️ No MSAL accounts available yet');
          return;
        }

        const account = accounts[0];
        console.log('🔍 Processing account for profile:', account.username);

        // Extract and cache idToken (like original useProfile.ts:27-38)
        if (account.idToken) {
          tokenCache.setTokenFromAccount(account);
          
          // Initialize API client with MSAL instance and account
          ClientBase.initialize(instance, account);
          
          console.log('✅ Token cached, loading profile...');
          
          // Load profile from API (like original useProfile.ts:63-87)
          await loadUserProfile();
        } else {
          throw new Error('No idToken available in account');
        }

      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to initialize profile';
        console.error('❌ Profile initialization error:', errorMessage);
        setError(errorMessage);
        
        // Track error
        applicationInsights.trackException(
          err instanceof Error ? err : new Error(errorMessage),
          2,
          { context: 'useProfile_initialize' }
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
      
      console.log("SPECIAL!");
      // Call UserClient.get() without parameters to get current user
      const userData = await userClient.Get({});
      
      console.log("SPECIAL!", userData);
      
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
      
      // Like original app - if profile is invalid, we could logout
      // For now, just set error state
      const errorMessage = err instanceof Error ? err.message : 'Failed to load profile';
      setError(errorMessage);
      
      // Could implement logout redirect like original:
      // if (userData && !userData.objectId) {
      //   console.log('Invalid profile, redirecting to logout');
      //   await instance.logoutRedirect();
      // }
      
      throw err;
    }
  };

  return {
    profile,
    isLoading,
    error,
    hasValidProfile: profile !== null && !error
  };
};