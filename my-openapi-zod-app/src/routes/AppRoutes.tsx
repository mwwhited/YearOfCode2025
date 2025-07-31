import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { RoleGuard } from '@/components/auth/RoleGuard';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import { ProgressSpinner } from '@/components/controls';
import { ROLE_GROUPS } from '@/types/roles';

// Lazy load page components for better code splitting
const Dashboard = lazy(() => import('@/pages/Dashboard').then(m => ({ default: m.Dashboard })));
const Profile = lazy(() => import('@/pages/Profile').then(m => ({ default: m.Profile })));
const Logout = lazy(() => import('@/pages/Logout').then(m => ({ default: m.Logout })));
const UsersList = lazy(() => import('@/pages/UsersList'));
const EditUserPanel = lazy(() => import('@/pages/EditUserPanel'));
const ProductsList = lazy(() => import('@/pages/ProductsList').then(m => ({ default: m.ProductsList })));
const EditProductPanel = lazy(() => import('@/pages/EditProductPanel').then(m => ({ default: m.EditProductPanel })));
const ProductsCardView = lazy(() => import('@/pages/ProductsCardView').then(m => ({ default: m.ProductsCardView })));
const CategoriesList = lazy(() => import('@/pages/CategoriesList').then(m => ({ default: m.CategoriesList })));
const EditCategoryPanel = lazy(() => import('@/pages/EditCategoryPanel').then(m => ({ default: m.EditCategoryPanel })));
const SubCategoriesList = lazy(() => import('@/pages/SubCategoriesList').then(m => ({ default: m.SubCategoriesList })));
const ManufacturersList = lazy(() => import('@/pages/ManufacturersList').then(m => ({ default: m.ManufacturersList })));
const AllergensList = lazy(() => import('@/pages/AllergensList').then(m => ({ default: m.AllergensList })));
const DistrictsList = lazy(() => import('@/pages/DistrictsList').then(m => ({ default: m.DistrictsList })));
const ComboboxTest = lazy(() => import('@/pages/ComboboxTest').then(m => ({ default: m.ComboboxTest })));
const IngredientsList = lazy(() => import('@/pages/IngredientsList').then(m => ({ default: m.IngredientsList })));
const EditIngredientPanel = lazy(() => import('@/pages/EditIngredientPanel').then(m => ({ default: m.EditIngredientPanel })));
const AuditLogsPage = lazy(() => import('@/pages/admin/AuditLogsPage').then(m => ({ default: m.AuditLogsPage })));

// Loading fallback component
const PageLoader = () => (
  <div className="flex align-items-center justify-content-center" style={{ minHeight: '400px' }}>
    <ProgressSpinner />
  </div>
);

// Higher-order component to wrap lazy components with Suspense
const withSuspense = (Component: React.ComponentType<any>) => (props: any) => (
  <Suspense fallback={<PageLoader />}>
    <Component {...props} />
  </Suspense>
);

// Placeholder components for other routes
const ReportsPage = () => <div className="p-4"><h1>Reports</h1><p>Reports page coming soon...</p></div>;
const AdminUsersPage = () => <div className="p-4"><h1>User Management</h1><p>Admin users page coming soon...</p></div>;
const AdminRolesPage = () => <div className="p-4"><h1>Role Management</h1><p>Admin roles page coming soon...</p></div>;
const NotFoundPage = () => <div className="p-4"><h1>404 - Page Not Found</h1><p>The page you're looking for doesn't exist.</p></div>;

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Logout route - accessible outside main layout for immediate logout */}
      <Route path="/logout" element={<Logout />} />
      
      {/* All other routes are authenticated via MsalAuthenticationTemplate */}
      <Route path="/" element={<AppLayout />} errorElement={<RouteErrorBoundary />}>
        {/* Default redirect to dashboard */}
        <Route index element={<Navigate to="/dashboard" replace />} />
        
        {/* Dashboard - accessible to all authenticated users */}
        <Route path="dashboard" element={withSuspense(Dashboard)({})} />
        
        {/* Profile - accessible to all authenticated users */}
        <Route path="profile" element={withSuspense(Profile)({})} />
        
        {/* Product routes - accessible to all authenticated users */}
        <Route path="products" element={<ProductsList />} />
        <Route path="products/cards" element={<ProductsCardView />} />
        <Route 
          path="products/edit/:id" 
          element={
            <RoleGuard roles={ROLE_GROUPS.ADMIN_ROLES}>
              <EditProductPanel />
            </RoleGuard>
          } 
        />
        <Route 
          path="products/add" 
          element={
            <RoleGuard roles={ROLE_GROUPS.ADMIN_ROLES}>
              <EditProductPanel />
            </RoleGuard>
          } 
        />
        <Route 
          path="products/suggested" 
          element={
            <RoleGuard roles={ROLE_GROUPS.ADMIN_ROLES}>
              <ProductsList />
            </RoleGuard>
          } 
        />
        
        {/* Category routes */}
        <Route path="categories" element={<CategoriesList />} />
        <Route 
          path="categories/edit/:id" 
          element={
            <RoleGuard roles={ROLE_GROUPS.ADMIN_ROLES}>
              <EditCategoryPanel />
            </RoleGuard>
          } 
        />
        <Route 
          path="categories/add" 
          element={
            <RoleGuard roles={ROLE_GROUPS.ADMIN_ROLES}>
              <EditCategoryPanel />
            </RoleGuard>
          } 
        />

        {/* Sub Category routes */}
        <Route path="subcategories" element={<SubCategoriesList />} />
        
        {/* Manufacturer routes */}
        <Route path="manufacturers" element={<ManufacturersList />} />
        
        {/* Ingredient routes */}
        <Route path="ingredients" element={<IngredientsList />} />
        <Route 
          path="ingredients/add" 
          element={
            <RoleGuard roles={ROLE_GROUPS.ADMIN_ROLES}>
              <EditIngredientPanel />
            </RoleGuard>
          } 
        />
        <Route 
          path="ingredients/edit/:id" 
          element={
            <RoleGuard roles={ROLE_GROUPS.ADMIN_ROLES}>
              <EditIngredientPanel />
            </RoleGuard>
          } 
        />
        
        {/* Allergen routes */}
        <Route path="allergens" element={<AllergensList />} />
        
        {/* District routes */}
        <Route path="districts" element={<DistrictsList />} />
        
        {/* Reports routes - Manager and Admin only */}
        <Route 
          path="reports/*" 
          element={
            <RoleGuard roles={ROLE_GROUPS.ADMIN_ROLES}>
              <ReportsPage />
            </RoleGuard>
          } 
        />
        
        {/* User management routes - Manager and Admin only */}
        <Route 
          path="users" 
          element={
            <RoleGuard roles={ROLE_GROUPS.ADMIN_ROLES}>
              <UsersList />
            </RoleGuard>
          } 
        />
        <Route 
          path="users/:userId/edit" 
          element={
            <RoleGuard roles={ROLE_GROUPS.ADMIN_ROLES}>
              <EditUserPanel />
            </RoleGuard>
          } 
        />
        
        {/* Admin routes - Admin only */}
        <Route 
          path="admin/users" 
          element={
            <RoleGuard roles={ROLE_GROUPS.SUPER_ADMIN_ONLY}>
              <AdminUsersPage />
            </RoleGuard>
          } 
        />
        <Route 
          path="admin/roles" 
          element={
            <RoleGuard roles={ROLE_GROUPS.SUPER_ADMIN_ONLY}>
              <AdminRolesPage />
            </RoleGuard>
          } 
        />
        <Route 
          path="admin/combobox-test" 
          element={
            <RoleGuard roles={ROLE_GROUPS.ADMIN_ROLES}>
              <ComboboxTest />
            </RoleGuard>
          } 
        />
        <Route 
          path="admin/audit-logs" 
          element={
            <RoleGuard roles={ROLE_GROUPS.SUPER_ADMIN_ONLY}>
              <AuditLogsPage />
            </RoleGuard>
          } 
        />
        <Route 
          path="admin/*" 
          element={
            <RoleGuard roles={ROLE_GROUPS.SUPER_ADMIN_ONLY}>
              <AdminUsersPage />
            </RoleGuard>
          } 
        />
        
        {/* Catch all for 404 within protected area */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      
      {/* Catch all for 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};