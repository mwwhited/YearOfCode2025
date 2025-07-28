// Quick test to run in browser console to debug MSAL token acquisition
// Copy and paste this into your browser console while on the app

console.log('=== MSAL Token Debug Test ===');

// Get the MSAL instance from React
const msalInstance = window.msal || (() => {
    console.log('Looking for MSAL instance in React...');
    const reactRoot = document.querySelector('#root')._reactInternalInstance || 
                     document.querySelector('#root')._reactInternals;
    // This is a simplified approach - the actual instance might be deeper
    return null;
})();

if (!msalInstance) {
    console.log('❌ Could not find MSAL instance');
    console.log('Try: window.location.reload() and run this again after login');
} else {
    console.log('✅ Found MSAL instance');
    
    // Get accounts
    const accounts = msalInstance.getAllAccounts();
    console.log('Accounts:', accounts);
    
    if (accounts.length === 0) {
        console.log('❌ No accounts found');
    } else {
        console.log('✅ Found accounts:', accounts.length);
        
        // Try simple token request
        const testRequest = {
            account: accounts[0],
            scopes: ['openid']
        };
        
        console.log('Testing token acquisition with:', testRequest);
        
        msalInstance.acquireTokenSilent(testRequest)
            .then(response => {
                console.log('✅ Token acquisition successful!');
                console.log('Response:', response);
                console.log('Access token length:', response.accessToken?.length || 0);
            })
            .catch(error => {
                console.log('❌ Token acquisition failed:');
                console.log('Error:', error);
                console.log('Error code:', error.errorCode);
                console.log('Error message:', error.errorMessage);
            });
    }
}