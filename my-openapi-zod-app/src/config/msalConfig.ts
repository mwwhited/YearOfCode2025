import type { Configuration, PopupRequest, RedirectRequest } from '@azure/msal-browser';
import type { AppConfig } from './appConfig';

// Create MSAL configuration from runtime config
export const createMsalConfig = (config: AppConfig): Configuration => ({
  auth: {
    clientId: config.azure.clientId,
    authority: config.azure.authority,
    knownAuthorities: config.azure.knownAuthorities,
    redirectUri: config.azure.redirectUri,
    postLogoutRedirectUri: config.azure.postLogoutRedirectUri,
  },
  cache: {
    cacheLocation: 'localStorage', // Use localStorage for better persistence
    storeAuthStateInCookie: true, // Enable cookie fallback for B2C compatibility
  },
  system: {
    windowHashTimeout: 60000, // Increase timeout for B2C flows
    iframeHashTimeout: 6000,
    loadFrameTimeout: 0,
  }
});

// Create login request from runtime config
export const createLoginRequest = (config: AppConfig): RedirectRequest => ({
  scopes: config.api.scopes,
  prompt: 'select_account', // Allow user to select account
  extraQueryParameters: {
    // Add B2C specific parameters if needed
  },
});

// Create token request from runtime config
export const createTokenRequest = (config: AppConfig): PopupRequest => ({
  scopes: config.api.scopes
});

// Create API config from runtime config
export const createApiConfig = (config: AppConfig) => ({
  scopes: config.api.scopes,
  uri: config.api.baseUrl,
  timeout: config.api.timeout
});