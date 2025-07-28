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
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  }
});

// Create login request from runtime config
export const createLoginRequest = (config: AppConfig): RedirectRequest => ({
  scopes: config.api.scopes,
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