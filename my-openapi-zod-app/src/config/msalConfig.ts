import type { Configuration, PopupRequest, RedirectRequest } from '@azure/msal-browser';

// MSAL configuration
export const msalConfig: Configuration = {
  auth: {
    clientId: process.env.REACT_APP_AZURE_CLIENT_ID || 'your-client-id', // Replace with your client ID
    authority: process.env.REACT_APP_AZURE_AUTHORITY || 'https://your-tenant.b2clogin.com/your-tenant.onmicrosoft.com/B2C_1_signupsignin', // Replace with your authority
    knownAuthorities: [process.env.REACT_APP_AZURE_KNOWN_AUTHORITY || 'your-tenant.b2clogin.com'], // Replace with your known authority
    redirectUri: '/', // Must be registered as a redirect URI
    postLogoutRedirectUri: '/', // Must be registered as a logout redirect URI
  },
  cache: {
    cacheLocation: 'sessionStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest: RedirectRequest = {
  scopes: ['openid', 'profile'],
};

// Add scopes here for access token to be used at your API endpoints.
export const tokenRequest: PopupRequest = {
  scopes: ['openid', 'profile']
};

// Define the scopes you need for your API
export const apiConfig = {
  scopes: ['openid', 'profile'],
  uri: process.env.REACT_APP_API_BASE_URL || 'https://your-api-url.com' // Replace with your API base URL
};