import { useState, useEffect } from 'react';
import { PublicClientApplication, InteractionType } from '@azure/msal-browser';
import { MsalProvider, MsalAuthenticationTemplate } from '@azure/msal-react';
import { Button, ProgressSpinner, Message } from '@/components/controls';
import { configManager } from '@/config/appConfig';
import { createMsalConfig, createLoginRequest } from '@/config/msalConfig';
import { applicationInsights } from '@/services/applicationInsights';
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
      
      // Handle redirect response immediately after initialization
      try {
        console.log('🔧 Handling redirect response during app initialization...');
        const response = await msalInstance.handleRedirectPromise();
        if (response) {
          console.log('✅ Redirect response handled during initialization:', response.account?.username);
        } else {
          console.log('ℹ️ No redirect response to handle during initialization');
        }
      } catch (redirectError) {
        console.warn('⚠️ Error handling redirect response during initialization:', redirectError);
        // Don't fail app initialization for redirect errors
      }
      
      setMsalInstance(msalInstance);
      setLoginRequest(authRequest);
      console.info('✅ Application initialized successfully');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to initialize application';
      setError(errorMessage);
      console.error('❌ Application initialization failed:', err);
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

  // Success state - render the main application with authentication template
  return (
    <MsalProvider instance={msalInstance}>
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
    </MsalProvider>
  );
};