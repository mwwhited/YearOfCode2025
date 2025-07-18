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
    <div className="p-5 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Component Demo</h1>
      
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Enhanced Data Grid with Sorting & Filtering</h2>
        <div className="mb-4">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-green-600 text-white border-none py-2 px-4 rounded cursor-pointer mr-2 hover:bg-green-700 transition-colors"
          >
            {showForm ? 'Cancel' : 'Add User'}
          </button>
          <button
            onClick={() => setUsers([])}
            className="bg-red-600 text-white border-none py-2 px-4 rounded cursor-pointer hover:bg-red-700 transition-colors"
          >
            Clear All
          </button>
        </div>

        {showForm && (
          <div className="bg-gray-50 p-5 rounded-lg mb-5">
            <h3 className="text-lg font-medium mb-3 text-gray-700">Add New User</h3>
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

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Component Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-gray-700">GenericDataGrid</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>✅ Automatic column generation from Zod schemas</li>
              <li>✅ Global search functionality</li>
              <li>✅ Per-column filtering</li>
              <li>✅ Sortable columns</li>
              <li>✅ Responsive design</li>
              <li>✅ Empty state handling</li>
              <li>✅ Configurable features</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-gray-700">GenericForm</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>✅ Automatic form generation from Zod schemas</li>
              <li>✅ Real-time validation</li>
              <li>✅ Type-safe form handling</li>
              <li>✅ Error display</li>
              <li>✅ Loading states</li>
              <li>✅ Field type inference</li>
              <li>✅ Customizable styling</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-gray-700">Error Boundaries</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>✅ Graceful error handling</li>
              <li>✅ Error recovery</li>
              <li>✅ User-friendly error messages</li>
              <li>✅ Component isolation</li>
              <li>✅ Development error details</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Usage Statistics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-center bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{users.length}</div>
            <div className="text-sm text-gray-600">Total Users</div>
          </div>
          <div className="text-center bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{users.filter(u => u.active).length}</div>
            <div className="text-sm text-gray-600">Active Users</div>
          </div>
          <div className="text-center bg-orange-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">
              {users.length > 0 ? Math.round(users.reduce((sum, u) => sum + u.age, 0) / users.length) : 0}
            </div>
            <div className="text-sm text-gray-600">Average Age</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;