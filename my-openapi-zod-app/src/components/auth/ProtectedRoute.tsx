import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Message } from 'primereact/message';

interface ProtectedRouteProps {
  children: React.ReactNode;
  roles?: string[];
  fallbackPath?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  roles = [], 
  fallbackPath = '/login' 
}) => {
  const { isAuthenticated, isLoading, hasAnyRole } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="loading-spinner">
        <ProgressSpinner />
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to login with return URL
    return <Navigate to={fallbackPath} state={{ from: location }} replace />;
  }

  if (roles.length > 0 && !hasAnyRole(roles)) {
    return (
      <div className="p-4">
        <Message 
          severity="warn" 
          text="You don't have permission to access this page." 
          className="w-full"
        />
      </div>
    );
  }

  return <>{children}</>;
};