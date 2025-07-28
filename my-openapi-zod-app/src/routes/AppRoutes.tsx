import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from '../components/layout/AppLayout';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
import { LoginPage } from '../components/auth/LoginPage';
import { Dashboard } from '../pages/Dashboard';

// Placeholder components for other routes
const ProductsPage = () => <div className="p-4"><h1>Products</h1><p>Products page coming soon...</p></div>;
const CategoriesPage = () => <div className="p-4"><h1>Categories</h1><p>Categories page coming soon...</p></div>;
const IngredientsPage = () => <div className="p-4"><h1>Ingredients</h1><p>Ingredients page coming soon...</p></div>;
const AllergensPage = () => <div className="p-4"><h1>Allergens</h1><p>Allergens page coming soon...</p></div>;
const ReportsPage = () => <div className="p-4"><h1>Reports</h1><p>Reports page coming soon...</p></div>;
const AdminUsersPage = () => <div className="p-4"><h1>User Management</h1><p>Admin users page coming soon...</p></div>;
const AdminRolesPage = () => <div className="p-4"><h1>Role Management</h1><p>Admin roles page coming soon...</p></div>;
const NotFoundPage = () => <div className="p-4"><h1>404 - Page Not Found</h1><p>The page you're looking for doesn't exist.</p></div>;

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<LoginPage />} />
      
      {/* Protected routes with layout */}
      <Route 
        path="/" 
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        {/* Default redirect to dashboard */}
        <Route index element={<Navigate to="/dashboard" replace />} />
        
        {/* Dashboard - accessible to all authenticated users */}
        <Route path="dashboard" element={<Dashboard />} />
        
        {/* Product routes - accessible to all authenticated users */}
        <Route path="products" element={<ProductsPage />} />
        <Route 
          path="products/add" 
          element={
            <ProtectedRoute roles={['Admin', 'Manager']}>
              <ProductsPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="products/suggested" 
          element={
            <ProtectedRoute roles={['Admin', 'Manager']}>
              <ProductsPage />
            </ProtectedRoute>
          } 
        />
        
        {/* Category routes */}
        <Route path="categories" element={<CategoriesPage />} />
        <Route 
          path="categories/add" 
          element={
            <ProtectedRoute roles={['Admin', 'Manager']}>
              <CategoriesPage />
            </ProtectedRoute>
          } 
        />
        
        {/* Ingredient routes */}
        <Route path="ingredients" element={<IngredientsPage />} />
        <Route 
          path="ingredients/add" 
          element={
            <ProtectedRoute roles={['Admin', 'Manager']}>
              <IngredientsPage />
            </ProtectedRoute>
          } 
        />
        
        {/* Allergen routes */}
        <Route path="allergens" element={<AllergensPage />} />
        <Route 
          path="allergens/add" 
          element={
            <ProtectedRoute roles={['Admin', 'Manager']}>
              <AllergensPage />
            </ProtectedRoute>
          } 
        />
        
        {/* Reports routes - Manager and Admin only */}
        <Route 
          path="reports/*" 
          element={
            <ProtectedRoute roles={['Admin', 'Manager']}>
              <ReportsPage />
            </ProtectedRoute>
          } 
        />
        
        {/* Admin routes - Admin only */}
        <Route 
          path="admin/users" 
          element={
            <ProtectedRoute roles={['Admin']}>
              <AdminUsersPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="admin/roles" 
          element={
            <ProtectedRoute roles={['Admin']}>
              <AdminRolesPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="admin/*" 
          element={
            <ProtectedRoute roles={['Admin']}>
              <AdminUsersPage />
            </ProtectedRoute>
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