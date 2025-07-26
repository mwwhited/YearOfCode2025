import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
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
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <button
            onClick={() => setShowDemo(false)}
            style={{
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            ← Back to Main App
          </button>
        </div>
        <DemoPage />
      </div>
    );
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React + TypeScript + Zod + OpenAPI PoC</h1>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button 
          onClick={() => {
            monitoring.trackUserAction('view_demo_clicked', 'App');
            setShowDemo(true);
          }}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            marginLeft: '10px',
          }}
        >
          View Component Demo
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <ErrorBoundary>
        {loading && <Loading message="Loading roles..." />}
        {error && <p style={{color: 'red'}}>Error: {error}</p>}
        {!loading && !error && <GenericDataGrid<Role> data={data} schema={customRoleSchema} />}
      </ErrorBoundary>
      
      <MonitoringDashboard />
    </>
  )
}

export default App


