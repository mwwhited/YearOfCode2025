import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { z } from "zod";

import GenericDataGrid from '@/components/GenericDataGrid';
import { createApiClient, schemas } from '@/api/GreenOnionClient';

type RolePagedResult = z.infer<typeof schemas.GreenOnion_Common_Models_QueryRoleModelPagedQueryResult>;
type Role = z.infer<typeof schemas.GreenOnion_Common_Models_QueryRoleModel>;

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const client = createApiClient('https://localhost:7443');
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result : RolePagedResult = await client.Role_Query({});
        setData(result.rows ?? []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {loading && <p>Loading roles...</p>}
      {error && <p style={{color: 'red'}}>Error: {error}</p>}
      {!loading && !error && <GenericDataGrid<Role, typeof schemas.GreenOnion_Common_Models_QueryRoleModel.shape> data={data} schema={schemas.GreenOnion_Common_Models_QueryRoleModel} />}
    </>
  )
}

export default App


