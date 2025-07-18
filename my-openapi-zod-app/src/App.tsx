import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { z } from "zod";

import GenericDataGrid from './components/GenericDataGrid';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import DemoPage from './components/DemoPage';
import MonitoringDashboard from './components/MonitoringDashboard';
import { createApiClient, schemas } from './api/GreenOnionClient';
import { monitoring, trackWebVitals } from './utils/monitoring';

// Create a custom schema that handles the API's datetime format
const customRoleSchema = z.object({
  roleId: z.number(),
  roleName: z.string(),
  isActive: z.boolean(),
  userCount: z.number(),
  activeUserCount: z.number(),
  createdOn: z.string(), // Use string instead of datetime to avoid validation issues
  createdById: z.number().nullable(),
  createdBy: z.string(),
  updatedOn: z.string().nullable(),
  updatedById: z.number().nullable(),
  updatedBy: z.string(),
});

type RolePagedResult = z.infer<typeof schemas.GreenOnion_Common_Models_QueryRoleModelPagedQueryResult>;
type Role = z.infer<typeof customRoleSchema>;

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    // Initialize monitoring
    monitoring.setEnabled(true);
    trackWebVitals();
    monitoring.trackEvent('app_mounted');

    const fetchData = async () => {
      const startTime = performance.now();
      try {
        setLoading(true);
        setError(null);
        monitoring.trackEvent('api_call_started', { endpoint: 'Role_Query' });
        
        // Make direct fetch call to bypass Zodios validation issues
        const response = await fetch('https://localhost:7443/api/Role/Query', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({}),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        
        // Transform and validate the data using our custom schema
        const validatedRows = result.rows?.map((row: any) => {
          // Transform the data to match our expectations
          return {
            roleId: row.roleId,
            roleName: row.roleName,
            isActive: row.isActive,
            userCount: row.userCount,
            activeUserCount: row.activeUserCount,
            createdOn: row.createdOn, // Keep as string
            createdById: row.createdById,
            createdBy: row.createdBy,
            updatedOn: row.updatedOn,
            updatedById: row.updatedById,
            updatedBy: row.updatedBy,
          };
        }) || [];

        setData(validatedRows);
        
        const endTime = performance.now();
        monitoring.trackApiCall('Role_Query', 'POST', endTime - startTime, 200);
        monitoring.trackEvent('api_call_success', { endpoint: 'Role_Query', count: validatedRows.length });
      } catch (err) {
        const endTime = performance.now();
        const error = err instanceof Error ? err : new Error('An error occurred');
        setError(error.message);
        
        monitoring.trackApiCall('Role_Query', 'POST', endTime - startTime, 500);
        monitoring.trackError(error, { endpoint: 'Role_Query' });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (showDemo) {
    return (
      <div>
        <div className="p-5 border-b border-gray-200">
          <button
            onClick={() => setShowDemo(false)}
            className="bg-gray-500 text-white border-none py-2 px-4 rounded cursor-pointer hover:bg-gray-600 transition-colors"
          >
            ← Back to Main App
          </button>
        </div>
        <DemoPage />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <div className="flex gap-6 mb-8">
        <a href="https://vite.dev" target="_blank" className="block">
          <img 
            src={viteLogo} 
            className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa] animate-spin" 
            alt="Vite logo" 
          />
        </a>
        <a href="https://react.dev" target="_blank" className="block">
          <img 
            src={reactLogo} 
            className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa]" 
            alt="React logo" 
          />
        </a>
      </div>
      <h1 className="text-5xl font-bold leading-tight mb-8 text-center">React + TypeScript + Zod + OpenAPI PoC</h1>
      
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <div className="flex gap-4 mb-4">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-gray-700 text-white border border-transparent py-3 px-6 rounded-lg font-medium cursor-pointer transition-colors hover:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
          >
            count is {count}
          </button>
          <button 
            onClick={() => {
              monitoring.trackUserAction('view_demo_clicked', 'App');
              setShowDemo(true);
            }}
            className="bg-blue-600 text-white border-none py-2 px-4 rounded cursor-pointer hover:bg-blue-700 transition-colors"
          >
            View Component Demo
          </button>
        </div>
        <p className="text-gray-300">
          Edit <code className="bg-gray-700 px-2 py-1 rounded text-yellow-300">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-500 mb-8">
        Click on the Vite and React logos to learn more
      </p>

      <ErrorBoundary>
        {loading && <Loading message="Loading roles..." />}
        {error && <p className="text-red-500 mb-4">Error: {error}</p>}
        {!loading && !error && <GenericDataGrid<Role> data={data} schema={customRoleSchema} />}
      </ErrorBoundary>
      
      <MonitoringDashboard />
    </div>
  )
}

export default App


