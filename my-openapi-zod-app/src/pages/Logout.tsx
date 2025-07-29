/**
 * Logout Page - Forces immediate logout
 * When user navigates to /logout, immediately trigger logout process
 */

import { useEffect } from 'react';
import { useMsal } from '@azure/msal-react';
import { ProgressSpinner } from '@/components/controls';
import { applicationInsights } from '@/services/applicationInsights';
import { tokenCache } from '@/services/tokenCache';
import { useProfile } from '@/hooks/useProfile';

export const Logout: React.FC = () => {
  const { instance } = useMsal();
  const { clearProfile } = useProfile();

  useEffect(() => {
    const performLogout = async () => {
      try {
        console.log('🚪 Forced logout initiated from /logout route');
        
        // Clear user profile first
        clearProfile();
        
        // Clear Application Insights user context
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
          
          console.log('🧹 Cleared all user data from storage');
        } catch (storageError) {
          console.warn('⚠️ Error clearing storage:', storageError);
        }
        
        // Track logout event
        applicationInsights.trackEvent('ForcedLogout', {
          source: 'logout_route',
          timestamp: new Date().toISOString()
        });

        // Perform logout without redirect URI since we don't want to come back
        // This ensures user stays on B2C logout confirmation page
        await instance.logoutRedirect({
          postLogoutRedirectUri: undefined, // Explicitly don't redirect back
        });
        
      } catch (error) {
        console.error('❌ Logout failed:', error);
        
        // Track logout failure
        applicationInsights.trackException(
          error instanceof Error ? error : new Error(String(error)),
          2,
          { context: 'forced_logout' }
        );
        
        // Fallback: try to redirect to root and let B2C handle it
        window.location.href = '/';
      }
    };

    // Trigger logout immediately when component mounts
    performLogout();
  }, [instance]);

  return (
    <div className="min-h-screen flex align-items-center justify-content-center">
      <div className="text-center">
        <ProgressSpinner style={{ width: '50px', height: '50px' }} />
        <div className="mt-3">
          <h3>Logging out...</h3>
          <p className="text-600">Please wait while we log you out</p>
        </div>
      </div>
    </div>
  );
};