import React, { createContext } from 'react';
import type { ReactNode } from 'react';
import { useMsal, useAccount } from '@azure/msal-react';
import type { AccountInfo } from '@azure/msal-browser';
import { configManager } from '@/config/appConfig';
import { createLoginRequest } from '@/config/msalConfig';
import { applicationInsights } from '@/services/applicationInsights';
import { ClientBase } from '@/api/_ClientBase';
import UserClient from '@/api/GreenOnion/Clients/UserClient';
import type { IQueryUserModel } from '@/api/GreenOnion';
import { UserRole, ROLE_HIERARCHY, hasRolePermission, hasAnyRolePermission } from '@/types/roles';

interface User {
  // B2C Account Information
  id?: string;
  username?: string;
  email?: string;
  name?: string;
  accountInfo?: AccountInfo;
  
  // API User Data (from UserClient.Get())
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
  const [msalInitialized, setMsalInitialized] = React.useState(false);
  const [apiUserData, setApiUserData] = React.useState<IQueryUserModel | null>(null);
  const [isLoadingUserData, setIsLoadingUserData] = React.useState(false);
  
  // Check if MSAL is initialized
  React.useEffect(() => {
    const checkInitialization = async () => {
      try {
        // MSAL should be initialized by now, but let's verify
        const isInitialized = instance.getConfiguration() !== undefined;
        setMsalInitialized(isInitialized);
        
        if (isInitialized) {
          console.log('✅ MSAL is properly initialized');
        } else {
          console.warn('⚠️ MSAL may not be properly initialized');
        }
      } catch (error) {
        console.error('❌ Error checking MSAL initialization:', error);
        setMsalInitialized(false);
      }
    };
    
    checkInitialization();
  }, [instance]);
  
  // Get the active account with better fallback logic
  const activeAccount = React.useMemo(() => {
    // Try to get the active account from MSAL instance first
    const msalActiveAccount = instance.getActiveAccount();
    if (msalActiveAccount) {
      return msalActiveAccount;
    }
    
    // Fallback to first account in accounts array
    if (accounts && accounts.length > 0) {
      // Set the first account as active if none is set
      instance.setActiveAccount(accounts[0]);
      return accounts[0];
    }
    
    return null;
  }, [instance, accounts]);
  
  const account = useAccount(activeAccount || {});

  const user: User | null = account ? {
    // B2C Account Information
    id: account.homeAccountId,
    username: account.username,
    email: account.username, // In B2C, username is typically the email
    name: account.name,
    accountInfo: account,
    
    // API User Data
    apiUserData,
    
    // Derived convenience properties
    roles: apiUserData?.roleName ? [apiUserData.roleName] : [],
  } : null;

  // Debug logging for account state and recovery
  React.useEffect(() => {
    console.log('🔧 AuthProvider account state:', {
      accounts: accounts?.length || 0,
      activeAccount: activeAccount?.username || 'none',
      account: account?.username || 'none',
      inProgress,
      user: user?.username || 'none',
      msalActiveAccount: instance.getActiveAccount()?.username || 'none',
      msalInitialized,
      apiUserData: apiUserData ? `${apiUserData.firstName} ${apiUserData.lastName} (${apiUserData.roleName})` : 'none',
      isLoadingUserData
    });
    
    // Recovery mechanism: If we have no accounts but MSAL is initialized and not in progress,
    // it might be a refresh issue - let's try to get all accounts from cache
    if (msalInitialized && accounts.length === 0 && inProgress === 'none') {
      console.log('🔄 No accounts found, attempting recovery from cache...');
      try {
        const cachedAccounts = instance.getAllAccounts();
        if (cachedAccounts.length > 0) {
          console.log('✅ Found cached accounts:', cachedAccounts.map(acc => acc.username));
          instance.setActiveAccount(cachedAccounts[0]);
        } else {
          console.log('ℹ️ No cached accounts found');
        }
      } catch (error) {
        console.error('❌ Error during account recovery:', error);
      }
    }
  }, [accounts, activeAccount, account, inProgress, user, instance, msalInitialized, apiUserData, isLoadingUserData]);

  // Fetch complete user data from API when account is available
  React.useEffect(() => {
    const fetchUserData = async () => {
      if (!account || !msalInitialized || isLoadingUserData) {
        return;
      }

      try {
        setIsLoadingUserData(true);
        console.log('🔍 Fetching complete user data from API for:', account.username);
        
        // Initialize API client first
        ClientBase.initialize(instance, account);
        
        const userClient = new UserClient();
        
        // Get currently authenticated user (no parameters needed)
        const userData = await userClient.Get({});
        
        if (userData) {
          console.log('✅ Complete user data fetched from API:', {
            userId: userData.userId,
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            roleName: userData.roleName,
            schoolDistrictName: userData.schoolDistrictName,
            manufacturerName: userData.manufacturerName
          });
          
          setApiUserData(userData);
          
          // Track the user data load
          applicationInsights.trackCustomEvent('UserDataLoaded', {
            userId: account.homeAccountId,
            apiUserId: userData.userId?.toString(),
            roleName: userData.roleName,
            hasDistrict: !!userData.schoolDistrictName,
            hasManufacturer: !!userData.manufacturerName,
            method: 'api'
          });
        } else {
          console.log('⚠️ No user data found, setting to null');
          setApiUserData(null);
        }
        
      } catch (error) {
        console.error('❌ Error fetching user data:', error);
        setApiUserData(null); // Default to null on error
        
        applicationInsights.trackException(
          error instanceof Error ? error : new Error(String(error)),
          2, // Warning level
          { context: 'fetchUserData', userId: account.homeAccountId }
        );
      } finally {
        setIsLoadingUserData(false);
      }
    };

    fetchUserData();
  }, [account, msalInitialized, instance, isLoadingUserData]);

  // Track authentication state changes and initialize API client
  React.useEffect(() => {
    if (user && user.id) {
      applicationInsights.trackUserAuthentication(user.id, {
        username: user.username,
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
      // Clear Application Insights user context before logout
      applicationInsights.clearUserContext();
      
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
    if (!apiUserData) return null;
    const firstName = apiUserData.firstName?.trim();
    const lastName = apiUserData.lastName?.trim();
    if (firstName && lastName) {
      return `${firstName} ${lastName}`;
    }
    return firstName || lastName || null;
  };

  const getUserDistrict = () => {
    if (!apiUserData) return null;
    return {
      id: apiUserData.schoolDistrictId,
      name: apiUserData.schoolDistrictName
    };
  };

  const getUserManufacturer = () => {
    if (!apiUserData) return null;
    return {
      id: apiUserData.manufacturerId,
      name: apiUserData.manufacturerName
    };
  };

  const getUserRole = (): string | null => {
    return apiUserData?.roleName || null;
  };

  const contextValue: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!account && !!user && msalInitialized && !isLoadingUserData && !!apiUserData,
    isLoading: !msalInitialized || inProgress !== 'none' || isLoadingUserData,
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

// Helper function to extract roles from account claims
function extractRolesFromClaims(account: AccountInfo): string[] {
  try {
    // B2C roles might be stored in different claim names depending on your configuration
    // Common locations: extension_Role, roles, groups
    const idTokenClaims = account.idTokenClaims as Record<string, unknown>;
    
    if (idTokenClaims?.extension_Role) {
      return Array.isArray(idTokenClaims.extension_Role) 
        ? idTokenClaims.extension_Role as string[]
        : [idTokenClaims.extension_Role as string];
    }
    
    if (idTokenClaims?.roles) {
      return Array.isArray(idTokenClaims.roles) 
        ? idTokenClaims.roles as string[]
        : [idTokenClaims.roles as string];
    }
    
    if (idTokenClaims?.groups) {
      return Array.isArray(idTokenClaims.groups) 
        ? idTokenClaims.groups as string[]
        : [idTokenClaims.groups as string];
    }
    
    return [];
  } catch (error) {
    console.error('Error extracting roles from claims:', error);
    return [];
  }
}