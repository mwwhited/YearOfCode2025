import React, { createContext } from 'react';
import type { ReactNode } from 'react';
import { useMsal, useAccount } from '@azure/msal-react';
import type { AccountInfo } from '@azure/msal-browser';
import { configManager } from '@/config/appConfig';
import { createLoginRequest } from '@/config/msalConfig';
import { applicationInsights } from '@/services/applicationInsights';
import { ClientBase } from '@/api/_ClientBase';
import { UserRole, hasRolePermission, hasAnyRolePermission } from '@/types/roles';
import { useProfile } from '@/hooks/useProfile';
import { tokenCache } from '@/services/tokenCache';
import { logger } from '@/utils/logger';
import type { IQueryUserModel } from '@/api/GreenOnion';
import { MaintenanceMessage } from '@/components/auth/MaintenanceMessage';

interface User {
  // B2C Account Information
  id?: string;
  accountInfo?: AccountInfo;
  
  // API User Data (from UserClient.Get())
  email?: string;
  name?: string;
  apiUserData?: IQueryUserModel;
  
  // Derived convenience properties
  roles?: string[];
}

interface AuthContextType {
  user: User | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  isLoading: boolean;
  hasRole: (roleName: string) => boolean;
  hasAnyRole: (roleNames: string[]) => boolean;
  getAccessToken: () => Promise<string | null>;
  
  // Convenience methods for accessing user data
  getUserFullName: () => string | null;
  getUserDistrict: () => { id: number | undefined; name: string | undefined } | null;
  getUserManufacturer: () => { id: number | undefined; name: string | undefined } | null;
  getUserRole: () => string | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { instance, accounts, inProgress } = useMsal();
  const { profile, isLoading: isLoadingProfile, hasValidProfile, isSystemMaintenance, clearProfile } = useProfile();
  
  // Get the active account 
  const activeAccount = accounts && accounts.length > 0 ? accounts[0] : null;
  const account = useAccount(activeAccount || {});

  const user: User | null = activeAccount && profile ? {
    // Use API user data as primary source
    id: activeAccount.homeAccountId,
    email: profile.email,
    name: `${profile.firstName || ''} ${profile.lastName || ''}`.trim() || profile.email || 'Unknown User',
    accountInfo: activeAccount,
    
    // API User Data from useProfile
    apiUserData: profile,
    
    // Derived convenience properties
    roles: profile.roleName ? [profile.roleName] : [],
  } : null;

  // Debug logging
  React.useEffect(() => {
    logger.debug('AuthProvider state:', {
      accounts: accounts?.length || 0,
      activeAccount: activeAccount?.username || 'none',
      hasProfile: !!profile,
      profileRole: profile?.roleName || 'none',
      isLoadingProfile,
      hasValidProfile,
      inProgress,
      isAuthenticated: !!activeAccount
    });
  }, [accounts, activeAccount, profile, isLoadingProfile, hasValidProfile, inProgress]);

  // Track authentication state changes and initialize API client
  React.useEffect(() => {
    logger.info("USER PROFILE", user);
    if (user && user.id) {
      applicationInsights.trackUserAuthentication(user.id, {
        username: user.email,
        email: user.email,
        roles: user.roles?.join(','),
        hasRoles: user.roles ? user.roles.length > 0 : false,
      });

      // Initialize API ClientBase with MSAL instance and account
      ClientBase.initialize(instance, account);
    } else {
      // Clear API ClientBase when user is not authenticated
      ClientBase.initialize(instance, null);
    }
  }, [user, instance, account]);

  const hasRole = (roleName: string): boolean => {
    if (!user?.roles || user.roles.length === 0) return false;
    
    const userRole = user.roles[0] as UserRole; // User should only have one role
    const requiredRole = roleName as UserRole;
    
    // Use the enum-based permission check
    return hasRolePermission(userRole, requiredRole);
  };

  const hasAnyRole = (roleNames: string[]): boolean => {
    if (!user?.roles || user.roles.length === 0) return false;
    
    const userRole = user.roles[0] as UserRole;
    const allowedRoles = roleNames as UserRole[];
    
    // Use the enum-based permission check
    return hasAnyRolePermission(userRole, allowedRoles);
  };

  const login = async (): Promise<void> => {
    try {
      const config = configManager.getConfig();
      if (!config) {
        throw new Error('Configuration not loaded');
      }
      const loginRequest = createLoginRequest(config);
      await instance.loginRedirect(loginRequest);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      // Clear user profile first
      clearProfile();
      
      // Clear Application Insights user context before logout
      applicationInsights.clearUserContext();
      
      // Clear token cache
      tokenCache.clearToken();
      
      // Clear any other localStorage items related to user session
      try {
        // Remove any user-specific localStorage items
        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && (
            key.startsWith('msal.') || 
            key.startsWith('greenonion_') ||
            key.includes('user') ||
            key.includes('profile') ||
            key.includes('auth')
          )) {
            keysToRemove.push(key);
          }
        }
        keysToRemove.forEach(key => localStorage.removeItem(key));
        
        // Also clear sessionStorage
        sessionStorage.clear();
        
        logger.cleanup('Cleared all user data from storage');
      } catch (storageError) {
        logger.warn('Error clearing storage:', storageError);
      }
      
      await instance.logoutRedirect({
        postLogoutRedirectUri: '/',
      });
    } catch (error) {
      console.error('Logout failed:', error);
      applicationInsights.trackException(
        error instanceof Error ? error : new Error(String(error)),
        2, // Warning level
        { context: 'logout' }
      );
      throw error;
    }
  };

  const getAccessToken = async (): Promise<string | null> => {
    if (!account) return null;

    try {
      const config = configManager.getConfig();
      if (!config) {
        throw new Error('Configuration not loaded');
      }
      const loginRequest = createLoginRequest(config);
      
      const response = await instance.acquireTokenSilent({
        ...loginRequest,
        account: account,
      });
      return response.accessToken;
    } catch (error) {
      console.error('Token acquisition failed:', error);
      
      // Check if this is a typical MSAL error that can be resolved
      if (error && typeof error === 'object' && 'errorCode' in error) {
        const msalError = error as any;
        
        // Handle specific MSAL errors
        if (msalError.errorCode === 'consent_required' || 
            msalError.errorCode === 'interaction_required' ||
            msalError.errorCode === 'login_required') {
          
          console.log('Interactive login required, redirecting...');
          try {
            const config = configManager.getConfig();
            if (!config) {
              throw new Error('Configuration not loaded');
            }
            const loginRequest = createLoginRequest(config);
            
            // Note: acquireTokenRedirect doesn't return a value, it redirects
            await instance.acquireTokenRedirect({
              ...loginRequest,
              account: account,
            });
            return null;
          } catch (redirectError) {
            console.error('Token acquisition via redirect failed:', redirectError);
            return null;
          }
        }
      }
      
      // For other errors, don't trigger redirect as it might cause logout loops
      console.warn('Token acquisition failed, but not triggering redirect to avoid loops');
      return null;
    }
  };

  // Convenience methods for accessing user data
  const getUserFullName = (): string | null => {
    if (!profile) return null;
    const firstName = profile.firstName?.trim();
    const lastName = profile.lastName?.trim();
    if (firstName && lastName) {
      return `${firstName} ${lastName}`;
    }
    return firstName || lastName || null;
  };

  const getUserDistrict = () => {
    if (!profile) return null;
    return {
      id: profile.schoolDistrictId,
      name: profile.schoolDistrictName
    };
  };

  const getUserManufacturer = () => {
    if (!profile) return null;
    return {
      id: profile.manufacturerId,
      name: profile.manufacturerName
    };
  };

  const getUserRole = (): string | null => {
    return profile?.roleName || null;
  };

  // Show maintenance message if system is under maintenance
  if (isSystemMaintenance) {
    return <MaintenanceMessage />;
  }

  const contextValue: AuthContextType = {
    user,
    login,
    logout,
    // With MsalAuthenticationTemplate, if we reach here, user is authenticated
    // We're authenticated as soon as we have an activeAccount (MsalAuthenticationTemplate ensures this)
    isAuthenticated: !!activeAccount,
    isLoading: inProgress !== 'none' || isLoadingProfile,
    hasRole,
    hasAnyRole,
    getAccessToken,
    getUserFullName,
    getUserDistrict,
    getUserManufacturer,
    getUserRole,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
