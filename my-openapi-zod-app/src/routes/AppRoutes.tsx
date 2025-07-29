import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { RoleGuard } from '@/components/auth/RoleGuard';
import { Dashboard } from '@/pages/Dashboard';
import { Profile } from '@/pages/Profile';
import { Logout } from '@/pages/Logout';
import UsersList from '@/pages/UsersList';
import EditUserDynamic from '@/pages/EditUserDynamic';
import EditUserPanel from '@/pages/EditUserPanel';
import { ProductsList } from '@/pages/ProductsList';
import { EditProductDynamic } from '@/pages/EditProductDynamic';
import { EditProductPanel } from '@/pages/EditProductPanel';
import { ProductsCardView } from '@/pages/ProductsCardView';
import { CategoriesList } from '@/pages/CategoriesList';
import { EditCategoryDynamic } from '@/pages/EditCategoryDynamic';
import { EditCategoryPanel } from '@/pages/EditCategoryPanel';
import { SubCategoriesList } from '@/pages/SubCategoriesList';
import { ManufacturersList } from '@/pages/ManufacturersList';
import { AllergensList } from '@/pages/AllergensList';
import { DistrictsList } from '@/pages/DistrictsList';
import { ComboboxTest } from '@/pages/ComboboxTest';
import { ROLE_GROUPS } from '@/types/roles';

// Placeholder components for other routes
const IngredientsPage = () => <div className="p-4"><h1>Ingredients</h1><p>Ingredients page coming soon...</p></div>;
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
      <Route path="/" element={<AppLayout />}>
        {/* Default redirect to dashboard */}
        <Route index element={<Navigate to="/dashboard" replace />} />
        
        {/* Dashboard - accessible to all authenticated users */}
        <Route path="dashboard" element={<Dashboard />} />
        
        {/* Profile - accessible to all authenticated users */}
        <Route path="profile" element={<Profile />} />
        
        {/* Product routes - accessible to all authenticated users */}
        <Route path="products" element={<ProductsList />} />
        <Route path="products/cards" element={<ProductsCardView />} />
        <Route 
          path="products/edit-dynamic/:id" 
          element={
            <RoleGuard roles={ROLE_GROUPS.ADMIN_ROLES}>
              <EditProductDynamic />
            </RoleGuard>
          } 
        />
        <Route 
          path="products/edit-panel/:id" 
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
              <EditProductDynamic />
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
          path="categories/edit-dynamic/:id" 
          element={
            <RoleGuard roles={ROLE_GROUPS.ADMIN_ROLES}>
              <EditCategoryDynamic />
            </RoleGuard>
          } 
        />
        <Route 
          path="categories/edit-panel/:id" 
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
              <EditCategoryDynamic />
            </RoleGuard>
          } 
        />

        {/* Sub Category routes */}
        <Route path="subcategories" element={<SubCategoriesList />} />
        
        {/* Manufacturer routes */}
        <Route path="manufacturers" element={<ManufacturersList />} />
        
        {/* Ingredient routes */}
        <Route path="ingredients" element={<IngredientsPage />} />
        <Route 
          path="ingredients/add" 
          element={
            <RoleGuard roles={ROLE_GROUPS.ADMIN_ROLES}>
              <IngredientsPage />
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
          path="users/:userId/edit-dynamic" 
          element={
            <RoleGuard roles={ROLE_GROUPS.ADMIN_ROLES}>
              <EditUserDynamic />
            </RoleGuard>
          } 
        />
        <Route 
          path="users/:userId/edit-panel" 
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