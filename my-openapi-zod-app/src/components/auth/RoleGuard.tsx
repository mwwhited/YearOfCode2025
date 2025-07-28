/**
 * RoleGuard Component - Replaces ProtectedRoute for use with MsalAuthenticationTemplate
 * Handles role-based authorization without authentication checks
 */

import React from 'react';
import { Message } from '@/components/controls';
import { useAuth } from '@/hooks/useAuth';

interface RoleGuardProps {
  children: React.ReactNode;
  roles?: string[];
  fallback?: React.ReactNode;
}

export const RoleGuard: React.FC<RoleGuardProps> = ({ 
  children, 
  roles = [], 
  fallback 
}) => {
  const { hasAnyRole, isLoading } = useAuth();

  // Show loading state while profile is loading
  if (isLoading) {
    return <div className="p-4">Loading...</div>;
  }

  // If no roles specified, allow access to all authenticated users
  if (roles.length === 0) {
    return <>{children}</>;
  }

  // Check if user has required role
  const hasAccess = hasAnyRole(roles);

  if (!hasAccess) {
    const defaultFallback = (
      <div className="p-4">
        <Message 
          severity="warn" 
          text={`Access denied. Required roles: ${roles.join(', ')}`}
          className="w-full"
        />
      </div>
    );

    return <>{fallback || defaultFallback}</>;
  }

  return <>{children}</>;
};