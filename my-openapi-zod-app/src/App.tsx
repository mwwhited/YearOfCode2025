import { BrowserRouter } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
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
