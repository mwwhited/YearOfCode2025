# User Management Feature

## Overview
Implemented a comprehensive user management system accessible through the Settings menu.

## Components Created

### 1. Settings Menu (`src/components/layout/SettingsMenu.tsx`)
- **Location**: Header toolbar, next to user avatar
- **Icon**: Gear icon (pi pi-cog)
- **Features**:
  - Role-based menu items
  - "Manage Users" option for Admin and Manager roles
  - "System Settings" option for Admin role only
  - "Application Settings" for all authenticated users

### 2. Users List Page (`src/pages/UsersList.tsx`)
- **Route**: `/users/list`
- **Access**: Admin and Manager roles only
- **Features**:
  - Displays comprehensive user data in a data grid
  - Utilizes GenericDataTable with ZQueryUserModel schema
  - Integrated with UserClient for API calls
  - Custom column headers for better UX

### 3. Enhanced GenericDataTable (`src/components/controls/GenericDataTable.tsx`)
- **New Features**:
  - Client integration for automatic data loading
  - Loading states with progress spinner
  - Error handling with retry functionality
  - Record count display
  - Empty state messaging
  - Improved header layout

## API Integration

### UserClient Integration
- **Client**: Uses existing generated `UserClient` from `@/api/GreenOnion/Clients/UserClient`
- **Interface**: Implements `IUserClient` interface
- **Method**: Calls `client.Query({ body: {} })` to fetch user data
- **Response**: Handles `IQueryUserModelPagedQueryResult` with `rows` property

### Data Schema
- **Schema**: `ZQueryUserModel` from generated API schema
- **Fields**: Includes user details like firstName, lastName, email, role, status, etc.
- **Validation**: Full Zod schema validation for type safety

## Routing
- **Route**: `/users/list` protected by role-based access control
- **Protection**: Requires Admin or Manager role
- **Integration**: Added to main AppRoutes with ProtectedRoute wrapper

## User Experience

### Navigation Flow
1. User clicks Settings (gear) icon in header
2. Dropdown menu appears with role-appropriate options
3. "Manage Users" option navigates to `/users/list`
4. Data loads automatically with loading indicator
5. Users can search, filter, and view paginated results

### Data Grid Features
- **Pagination**: 10 records per page
- **Global Search**: Search across all fields
- **Column Filtering**: Individual column filters
- **Column Management**: Resizable and reorderable columns
- **Sorting**: Sortable columns
- **Empty States**: Proper messaging when no data
- **Error Handling**: Graceful error display with retry option

## Security
- **Role-Based Access**: Only Admin and Manager can access user management
- **Route Protection**: Server-side route protection with ProtectedRoute
- **API Authentication**: Automatic MSAL token inclusion via enhanced ClientBase
- **Correlation Tracking**: Full request correlation for audit trails

## Technical Implementation

### Files Created
- `src/components/layout/SettingsMenu.tsx` - Settings dropdown menu
- `src/pages/UsersList.tsx` - User management page
- `USER_MANAGEMENT_FEATURE.md` - This documentation

### Files Modified
- `src/components/layout/AppHeader.tsx` - Added SettingsMenu integration
- `src/routes/AppRoutes.tsx` - Added `/users/list` route
- `src/components/controls/GenericDataTable.tsx` - Enhanced with client integration

### Dependencies Used
- Existing UserClient and IUserClient from generated API
- ZQueryUserModel schema for type safety
- Enhanced GenericDataTable for data display
- Role-based access control system
- MSAL authentication with correlation tracking

## Future Enhancements
- User creation/editing functionality
- Bulk user operations
- Advanced filtering options
- Export functionality
- User role management
- User activity logging

This implementation provides a solid foundation for comprehensive user management while maintaining security, performance, and user experience standards.