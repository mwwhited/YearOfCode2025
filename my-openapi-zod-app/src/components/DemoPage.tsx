import { useState } from 'react';
import { z } from 'zod';
import GenericDataGrid from './GenericDataGrid';
import GenericForm from './GenericForm';
import ErrorBoundary from './ErrorBoundary';

// Demo schemas
const userSchema = z.object({
  id: z.number(),
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  age: z.number().min(0, 'Age must be positive').max(150, 'Age must be realistic'),
  active: z.boolean(),
});

const createUserSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  age: z.number().min(0, 'Age must be positive').max(150, 'Age must be realistic'),
  active: z.boolean(),
});

type User = z.infer<typeof userSchema>;
type CreateUser = z.infer<typeof createUserSchema>;

const DemoPage = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 30, active: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25, active: false },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 35, active: true },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', age: 28, active: true },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', age: 42, active: false },
  ]);

  const [showForm, setShowForm] = useState(false);

  const handleCreateUser = (userData: CreateUser) => {
    const newUser: User = {
      ...userData,
      id: Math.max(...users.map(u => u.id), 0) + 1,
    };
    setUsers(prev => [...prev, newUser]);
    setShowForm(false);
  };

  const handleDeleteUser = (userId: number) => {
    setUsers(prev => prev.filter(user => user.id !== userId));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Component Demo</h1>
      
      <div style={{ marginBottom: '40px' }}>
        <h2>Enhanced Data Grid with Sorting & Filtering</h2>
        <div style={{ marginBottom: '16px' }}>
          <button
            onClick={() => setShowForm(!showForm)}
            style={{
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '8px',
            }}
          >
            {showForm ? 'Cancel' : 'Add User'}
          </button>
          <button
            onClick={() => setUsers([])}
            style={{
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Clear All
          </button>
        </div>

        {showForm && (
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '20px', 
            borderRadius: '8px', 
            marginBottom: '20px' 
          }}>
            <h3>Add New User</h3>
            <ErrorBoundary>
              <GenericForm<CreateUser>
                schema={createUserSchema}
                onSubmit={handleCreateUser}
                submitText="Create User"
                initialData={{ active: true }}
              />
            </ErrorBoundary>
          </div>
        )}

        <ErrorBoundary>
          <GenericDataGrid<User>
            data={users}
            schema={userSchema}
            enableSorting={true}
            enableFiltering={true}
          />
        </ErrorBoundary>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2>Component Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px' }}>
            <h3>GenericDataGrid</h3>
            <ul>
              <li>✅ Automatic column generation from Zod schemas</li>
              <li>✅ Global search functionality</li>
              <li>✅ Per-column filtering</li>
              <li>✅ Sortable columns</li>
              <li>✅ Responsive design</li>
              <li>✅ Empty state handling</li>
              <li>✅ Configurable features</li>
            </ul>
          </div>
          
          <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px' }}>
            <h3>GenericForm</h3>
            <ul>
              <li>✅ Automatic form generation from Zod schemas</li>
              <li>✅ Real-time validation</li>
              <li>✅ Type-safe form handling</li>
              <li>✅ Error display</li>
              <li>✅ Loading states</li>
              <li>✅ Field type inference</li>
              <li>✅ Customizable styling</li>
            </ul>
          </div>
          
          <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px' }}>
            <h3>Error Boundaries</h3>
            <ul>
              <li>✅ Graceful error handling</li>
              <li>✅ Error recovery</li>
              <li>✅ User-friendly error messages</li>
              <li>✅ Component isolation</li>
              <li>✅ Development error details</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2>Usage Statistics</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
          <div style={{ textAlign: 'center', backgroundColor: '#e3f2fd', padding: '16px', borderRadius: '8px' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{users.length}</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Total Users</div>
          </div>
          <div style={{ textAlign: 'center', backgroundColor: '#e8f5e8', padding: '16px', borderRadius: '8px' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{users.filter(u => u.active).length}</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Active Users</div>
          </div>
          <div style={{ textAlign: 'center', backgroundColor: '#fff3e0', padding: '16px', borderRadius: '8px' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
              {users.length > 0 ? Math.round(users.reduce((sum, u) => sum + u.age, 0) / users.length) : 0}
            </div>
            <div style={{ fontSize: '14px', color: '#666' }}>Average Age</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;