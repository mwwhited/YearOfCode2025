import { useState, useEffect } from 'react';
import { PublicClientApplication, InteractionType } from '@azure/msal-browser';
import { MsalProvider, MsalAuthenticationTemplate, useMsal } from '@azure/msal-react';
import { Button, ProgressSpinner, Message } from '@/components/controls';
import { configManager } from '@/config/appConfig';
import { createMsalConfig, createLoginRequest } from '@/config/msalConfig';
import { applicationInsights } from '@/services/applicationInsights';
import { tokenCache } from '@/services/tokenCache';
import { logger } from '@/utils/logger';
import '@/services/apiInterceptor'; // Initialize API interceptors
import App from '@/App';

export const AppWithConfig = () => {
  const [msalInstance, setMsalInstance] = useState<PublicClientApplication | null>(null);
  const [loginRequest, setLoginRequest] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const initializeApp = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Load configuration from public/config.json
      const config = await configManager.loadConfig();
      
      // Initialize Application Insights (with error handling)
      try {
        applicationInsights.initialize(config);
      } catch (aiError) {
        console.warn('⚠️ Application Insights initialization failed:', aiError);
        // Continue with app initialization even if AI fails
      }
      
      // Create MSAL configuration
      const msalConfig = createMsalConfig(config);
      const authRequest = createLoginRequest(config);
      
      // Initialize MSAL instance
      const msalInstance = new PublicClientApplication(msalConfig);
      await msalInstance.initialize();
      
      console.log('ℹ️ MSAL instance initialized, redirect handling will be done by AppWithAuthCheck');
      
      setMsalInstance(msalInstance);
      setLoginRequest(authRequest);
      logger.success('Application initialized successfully');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to initialize application';
      setError(errorMessage);
      logger.error('Application initialization failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const retryInitialization = () => {
    initializeApp();
  };

  useEffect(() => {
    initializeApp();
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex align-items-center justify-content-center">
        <div className="text-center">
          <ProgressSpinner style={{ width: '50px', height: '50px' }} />
          <div className="mt-3">
            <h3>Loading Configuration...</h3>
            <p className="text-600">Please wait while we initialize the application</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !msalInstance) {
    return (
      <div className="min-h-screen flex align-items-center justify-content-center px-4">
        <div className="max-w-md w-full">
          <Message 
            severity="error" 
            text="Failed to load application configuration" 
            className="w-full mb-3"
          />
          <div className="text-center">
            <h3 className="mt-0">Configuration Error</h3>
            <p className="text-600 mb-4">
              {error || 'Unable to initialize the application. Please check your configuration.'}
            </p>
            <div className="mb-3">
              <strong>Troubleshooting:</strong>
              <ul className="text-left mt-2 text-sm">
                <li>• Ensure <code>/config.json</code> exists and is accessible</li>
                <li>• Verify Azure B2C configuration values</li>
                <li>• Check browser console for detailed errors</li>
                <li>• Ensure API endpoints are reachable</li>
              </ul>
            </div>
            <Button 
              label="Retry" 
              icon="pi pi-refresh" 
              onClick={retryInitialization}
              className="p-button-outlined"
            />
          </div>
        </div>
      </div>
    );
  }

  // Success state - render the main application 
  return (
    <MsalProvider instance={msalInstance}>
      <AppWithAuthCheck msalInstance={msalInstance} loginRequest={loginRequest} />
    </MsalProvider>
  );
};

/**
 * Component that handles authentication logic more intelligently
 * Checks for cached tokens first, then falls back to MsalAuthenticationTemplate
 */
const AppWithAuthCheck: React.FC<{ msalInstance: PublicClientApplication; loginRequest: any }> = ({
  msalInstance,
  loginRequest
}) => {
  const { accounts, inProgress } = useMsal();
  const [authCheckComplete, setAuthCheckComplete] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        logger.debug('Checking authentication state...', {
          accounts: accounts.length,
          inProgress,
          hasValidToken: tokenCache.hasValidToken()
        });

        // ALWAYS try to handle any pending redirects first
        logger.loading('Checking for pending redirects...');
        const redirectResult = await msalInstance.handleRedirectPromise();
        
        if (redirectResult) {
          logger.success('Handled redirect result:', redirectResult.account?.username);
          // After handling redirect, accounts should be updated by MSAL automatically
          setAuthCheckComplete(true);
          return;
        }

        // If we have accounts from MSAL, we're good to go
        if (accounts.length > 0) {
          logger.success('MSAL has accounts, proceeding with app');
          setAuthCheckComplete(true);
          return;
        }

        // If we have cached tokens but no MSAL accounts after redirect check
        if (tokenCache.hasValidToken()) {
          logger.warn('Have cached token but no MSAL accounts, clearing stale cache');
          tokenCache.clearToken();
        }

        // No valid authentication, let MsalAuthenticationTemplate handle it
        logger.auth('No valid authentication, using MsalAuthenticationTemplate');
        setAuthCheckComplete(true);
        
      } catch (error) {
        logger.error('Error during auth check:', error);
        setAuthCheckComplete(true);
      }
    };

    if (inProgress === 'none') {
      checkAuthentication();
    }
  }, [accounts, inProgress, msalInstance]);

  // Show loading while checking authentication
  if (!authCheckComplete) {
    return (
      <div className="min-h-screen flex align-items-center justify-content-center">
        <div className="text-center">
          <ProgressSpinner style={{ width: '50px', height: '50px' }} />
          <div className="mt-3">
            <h3>Checking authentication...</h3>
            <p className="text-600">Please wait</p>
          </div>
        </div>
      </div>
    );
  }

  // If we have accounts, render the app directly
  if (accounts.length > 0) {
    return <App />;
  }

  // Otherwise, use MsalAuthenticationTemplate for authentication
  return (
    <MsalAuthenticationTemplate 
      interactionType={InteractionType.Redirect}
      authenticationRequest={loginRequest}
      loadingComponent={
        () => (
          <div className="min-h-screen flex align-items-center justify-content-center">
            <div className="text-center">
              <ProgressSpinner style={{ width: '50px', height: '50px' }} />
              <div className="mt-3">
                <h3>Authenticating...</h3>
                <p className="text-600">Please wait while we authenticate you</p>
              </div>
            </div>
          </div>
        )
      }
      errorComponent={
        () => (
          <div className="min-h-screen flex align-items-center justify-content-center px-4">
            <div className="max-w-md w-full">
              <Message 
                severity="error" 
                text="Authentication failed" 
                className="w-full mb-3"
              />
              <div className="text-center">
                <h3 className="mt-0">Authentication Error</h3>
                <p className="text-600 mb-4">
                  Unable to authenticate. Please try refreshing the page.
                </p>
              </div>
            </div>
          </div>
        )
      }
    >
      <App />
    </MsalAuthenticationTemplate>
  );
};