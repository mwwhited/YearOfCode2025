import React, { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { ProgressSpinner, Message } from '@/components/controls';

interface ProtectedRouteProps {
  children: React.ReactNode;
  roles?: string[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  roles = []
}) => {
  const { isAuthenticated, isLoading, hasAnyRole, login } = useAuth();

  // Automatically trigger login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      login().catch(error => {
        console.error('Auto-login failed:', error);
      });
    }
  }, [isLoading, isAuthenticated, login]);

  if (isLoading) {
    return (
      <div className="loading-spinner">
        <ProgressSpinner />
      </div>
    );
  }

  if (!isAuthenticated) {
    // Show loading while redirecting to B2C
    return (
      <div className="loading-spinner">
        <ProgressSpinner />
        <p className="mt-2 text-center">Redirecting to login...</p>
      </div>
    );
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