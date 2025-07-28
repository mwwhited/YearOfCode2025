# GreenOnion Role-Based Authentication System Guide

## Overview

The GreenOnion application uses a comprehensive role-based authentication system that integrates Azure B2C for initial authentication and then fetches complete user data from the GreenOnion API. This guide covers how to use the role system throughout the application.

## Role Hierarchy

The system supports a 6-tier role hierarchy with inheritance-based permissions:

1. **Manufacturer User** (lowest permissions)
2. **Cooperative User**
3. **District User**
4. **District Admin**
5. **Cooperative Admin**
6. **Super Admin** (highest permissions)

Higher roles automatically inherit permissions from lower roles. For example, a District Admin can access everything that a District User can access.

## Using Roles in Components

### Basic Role Checking

```typescript
import { useAuth } from '@/hooks/useAuth';
import { UserRole } from '@/types/roles';

const MyComponent = () => {
  const { hasRole, hasAnyRole } = useAuth();
  
  // Check for specific role (includes permission inheritance)
  const canManageUsers = hasRole(UserRole.DISTRICT_ADMIN);
  
  // Check for any of multiple roles
  const canViewReports = hasAnyRole([UserRole.DISTRICT_ADMIN, UserRole.COOPERATIVE_ADMIN]);
  
  return (
    <div>
      {canManageUsers && <button>Manage Users</button>}
      {canViewReports && <div>Reports Section</div>}
    </div>
  );
};
```

### Using Role Groups

```typescript
import { useAuth } from '@/hooks/useAuth';
import { ROLE_GROUPS } from '@/types/roles';

const MyComponent = () => {
  const { hasAnyRole } = useAuth();
  
  // Use predefined role groups
  const isAdmin = hasAnyRole(ROLE_GROUPS.ADMIN_ROLES);
  const canAccess = hasAnyRole(ROLE_GROUPS.ALL_USERS);
  
  return (
    <div>
      {isAdmin && <AdminPanel />}
      {canAccess && <MainContent />}
    </div>
  );
};
```

## Accessing User Data

The authentication context provides access to complete user information from the API:

### Basic User Information

```typescript
import { useAuth } from '@/hooks/useAuth';

const UserProfile = () => {
  const { 
    user, 
    getUserFullName, 
    getUserRole, 
    getUserDistrict, 
    getUserManufacturer 
  } = useAuth();
  
  const fullName = getUserFullName();
  const role = getUserRole();
  const district = getUserDistrict();
  const manufacturer = getUserManufacturer();
  
  return (
    <div>
      <h2>{fullName}</h2>
      <p>Role: {role}</p>
      <p>District: {district?.name} (ID: {district?.id})</p>
      <p>Manufacturer: {manufacturer?.name} (ID: {manufacturer?.id})</p>
    </div>
  );
};
```

### Complete API User Data

```typescript
import { useAuth } from '@/hooks/useAuth';

const DetailedUserInfo = () => {
  const { user } = useAuth();
  const apiData = user?.apiUserData;
  
  if (!apiData) return <div>Loading user data...</div>;
  
  return (
    <div>
      <h3>Personal Information</h3>
      <p>Email: {apiData.email}</p>
      <p>Mobile: {apiData.mobile}</p>
      <p>Address: {apiData.addressLine1}, {apiData.city}, {apiData.state}</p>
      
      <h3>Organization</h3>
      <p>School District: {apiData.schoolDistrictName}</p>
      <p>Manufacturer: {apiData.manufacturerName}</p>
      
      <h3>System Information</h3>
      <p>User ID: {apiData.userId}</p>
      <p>Active: {apiData.isActive ? 'Yes' : 'No'}</p>
      <p>Created: {new Date(apiData.createdOn || '').toLocaleDateString()}</p>
    </div>
  );
};
```

## Route Protection

### Basic Route Protection

```typescript
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { ROLE_GROUPS } from '@/types/roles';

// Protect routes with role requirements
<Route 
  path="admin" 
  element={
    <ProtectedRoute roles={ROLE_GROUPS.ADMIN_ROLES}>
      <AdminPage />
    </ProtectedRoute>
  } 
/>
```

### Navigation Menu with Roles

```typescript
import { useAuth } from '@/hooks/useAuth';
import { UserRole, ROLE_GROUPS } from '@/types/roles';

const NavigationMenu = () => {
  const { hasRole, hasAnyRole } = useAuth();
  
  const menuItems = [
    {
      label: 'Dashboard',
      visible: true // Always visible
    },
    {
      label: 'Manage Users',
      visible: hasAnyRole(ROLE_GROUPS.ADMIN_ROLES)
    },
    {
      label: 'System Settings',
      visible: hasRole(UserRole.SUPER_ADMIN)
    }
  ].filter(item => item.visible);
  
  return (
    <nav>
      {menuItems.map(item => (
        <a key={item.label} href="#">{item.label}</a>
      ))}
    </nav>
  );
};
```

## Available Role Groups

The system provides predefined role groups for common permission patterns:

- `ROLE_GROUPS.ALL_USERS` - All authenticated users
- `ROLE_GROUPS.ADMIN_ROLES` - District Admin, Cooperative Admin, Super Admin
- `ROLE_GROUPS.DISTRICT_ROLES` - District User, District Admin
- `ROLE_GROUPS.COOPERATIVE_ROLES` - Cooperative User, Cooperative Admin
- `ROLE_GROUPS.MANUFACTURER_ROLES` - Manufacturer User
- `ROLE_GROUPS.SUPER_ADMIN_ONLY` - Super Admin only

## Authentication Flow

1. **B2C Authentication**: User authenticates with Azure B2C
2. **API Data Fetch**: System automatically calls `UserClient.Get()` to fetch complete user profile
3. **Context Population**: User data and roles are stored in AuthContext
4. **Permission Checking**: Components can check roles and access user data
5. **Loading States**: UI shows loading states while user data is being fetched

## Helper Functions

The role system provides several helper functions for advanced use cases:

```typescript
import { 
  hasRolePermission, 
  hasAnyRolePermission, 
  getRolesAtOrAbove,
  getRolesAtOrBelow 
} from '@/types/roles';

// Direct permission checking without context
const canAccess = hasRolePermission(UserRole.DISTRICT_USER, UserRole.COOPERATIVE_USER);

// Get roles for dropdown lists
const adminRoles = getRolesAtOrAbove(UserRole.DISTRICT_ADMIN);
const userRoles = getRolesAtOrBelow(UserRole.DISTRICT_USER);
```

## Best Practices

1. **Use Role Groups**: Prefer `ROLE_GROUPS` over hardcoded arrays for common patterns
2. **Check Loading States**: Always check if user data is loaded before accessing it
3. **Permission Inheritance**: Remember that higher roles inherit lower role permissions
4. **Type Safety**: Use the `UserRole` enum instead of strings for type safety
5. **Convenience Methods**: Use `getUserFullName()`, `getUserDistrict()`, etc. for common data access patterns

## Error Handling

The system gracefully handles various error scenarios:

```typescript
const MyComponent = () => {
  const { user, isLoading, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <div>Please log in</div>;
  }
  
  if (isLoading) {
    return <div>Loading user data...</div>;
  }
  
  if (!user?.apiUserData) {
    return <div>Unable to load user profile</div>;
  }
  
  // Safe to access user data here
  return <div>Welcome, {user.apiUserData.firstName}!</div>;
};
```

## Testing Role-Based Features

When testing components that use roles, you can mock the auth context:

```typescript
import { render } from '@testing-library/react';
import { AuthContext } from '@/contexts/AuthContext';
import { UserRole } from '@/types/roles';

const mockAuthValue = {
  user: {
    apiUserData: {
      firstName: 'Test',
      lastName: 'User',
      roleName: UserRole.DISTRICT_ADMIN
    }
  },
  isAuthenticated: true,
  hasRole: (role: string) => role === UserRole.DISTRICT_ADMIN,
  hasAnyRole: (roles: string[]) => roles.includes(UserRole.DISTRICT_ADMIN),
  // ... other auth context values
};

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <AuthContext.Provider value={mockAuthValue}>
    {children}
  </AuthContext.Provider>
);

// Use in tests
render(<MyComponent />, { wrapper: TestWrapper });
```

This guide covers the essential aspects of using the role-based authentication system in the GreenOnion application. The system provides both flexibility and type safety while maintaining a clear hierarchy of permissions.