import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import { useMsal } from '@azure/msal-react';
import { AuthProvider } from '@/contexts/AuthContext';
import { CorrelationProvider } from '@/contexts/CorrelationContext';
import { AppRoutes } from '@/routes/AppRoutes';

// PrimeReact styles
import 'primereact/resources/themes/lara-light-teal/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';

function App() {
  const { instance } = useMsal();

  useEffect(() => {
    // Add MSAL event listeners for debugging account state
    const callbackId = instance.addEventCallback((event) => {
      console.log('🔧 MSAL Event:', event.eventType, event.payload);
      
      if (event.eventType === 'msal:acquireTokenSuccess') {
        console.log('✅ Token acquired successfully');
      } else if (event.eventType === 'msal:acquireTokenFailure') {
        console.log('❌ Token acquisition failed:', event.error);
      } else if (event.eventType === 'msal:loginSuccess') {
        console.log('✅ Login successful:', event.payload);
      } else if (event.eventType === 'msal:loginFailure') {
        console.log('❌ Login failed:', event.error);
      }
    });

    // Cleanup event listener on unmount
    return () => {
      if (callbackId) {
        instance.removeEventCallback(callbackId);
      }
    };
  }, [instance]);

  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <CorrelationProvider>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </CorrelationProvider>
      </BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;
