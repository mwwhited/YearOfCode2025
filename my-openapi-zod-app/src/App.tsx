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

  const client = createApiClient('https://localhost:7443');

  useEffect(() => {
    const fetchData = async () => {
      const result : RolePagedResult = await client.Role_Query({});
      setData(result.rows ?? []);
    };
    fetchData();
  });

  //   const userSchema = z.object({
  //   id: z.number(),
  //   name: z.string(),
  //   age: z.number(),
  // });

  // type User = z.infer<typeof userSchema>;

  // const users: User[] = [
  //   { id: 1, name: "Alice", age: 25 },
  //   { id: 2, name: "Bob", age: 30 },
  // ];

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

      <GenericDataGrid<Role> data={data} schema={schemas.GreenOnion_Common_Models_QueryRoleModelPagedQueryResult} />
    </>
  )
}

export default App

// createApiClient

// // Usage example

// const userSchema = z.object({
//   id: z.number(),
//   name: z.string(),
//   age: z.number(),
// });

// type User = z.infer<typeof userSchema>;

// const users: User[] = [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
// ];

// export default function App() {
//   return <GenericDataGrid<User> data={users} schema={userSchema} />;
// }

