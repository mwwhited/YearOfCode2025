// App.js
import { PrimeReactProvider } from 'primereact/api';
import './App.css';

// PrimeReact styles
import 'primereact/resources/themes/saga-blue/theme.css'; // or any other theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <PrimeReactProvider>
      <div className="App">
        {/* Add your components here */}
        <h1>Hello, PrimeReact!</h1>
      </div>
    </PrimeReactProvider>
  );
}

export default App;
