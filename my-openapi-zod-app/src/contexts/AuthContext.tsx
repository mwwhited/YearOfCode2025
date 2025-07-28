import React, { createContext } from 'react';
import type { ReactNode } from 'react';
import { useMsal, useAccount } from '@azure/msal-react';
import type { AccountInfo } from '@azure/msal-browser';
import { configManager } from '@/config/appConfig';
import { createLoginRequest } from '@/config/msalConfig';
import { applicationInsights } from '@/services/applicationInsights';

interface User {
  id?: string;
  username?: string;
  email?: string;
  roles?: string[];
  name?: string;
  accountInfo?: AccountInfo;
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
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { instance, accounts, inProgress } = useMsal();
  const account = useAccount(accounts[0] || {});

  const user: User | null = account ? {
    id: account.homeAccountId,
    username: account.username,
    email: account.username, // In B2C, username is typically the email
    name: account.name,
    roles: extractRolesFromClaims(account),
    accountInfo: account,
  } : null;

  // Track authentication state changes
  React.useEffect(() => {
    if (user && user.id) {
      applicationInsights.trackUserAuthentication(user.id, {
        username: user.username,
        email: user.email,
        roles: user.roles?.join(','),
        hasRoles: user.roles ? user.roles.length > 0 : false,
      });
    }
  }, [user]);

  const hasRole = (roleName: string): boolean => {
    return user?.roles?.includes(roleName) ?? false;
  };

  const hasAnyRole = (roleNames: string[]): boolean => {
    return roleNames.some(roleName => hasRole(roleName));
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
  };

  const contextValue: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!account,
    isLoading: inProgress !== 'none',
    hasRole,
    hasAnyRole,
    getAccessToken,
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