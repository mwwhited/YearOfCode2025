import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AppHeader } from './AppHeader';
import { AppSidebar } from './AppSidebar';
import { AppFooter } from './AppFooter';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useAuth } from '../../hooks/useAuth';

export const AppLayout: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { isLoading } = useAuth();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  if (isLoading) {
    return (
      <div className="loading-spinner">
        <ProgressSpinner />
      </div>
    );
  }

  return (
    <div className="app">
      <AppHeader 
        onSidebarToggle={toggleSidebar} 
        sidebarCollapsed={sidebarCollapsed} 
      />
      
      <div className="app-main">
        <AppSidebar collapsed={sidebarCollapsed} />
        
        <div className="app-content">
          <Outlet />
        </div>
      </div>
      
      <AppFooter />
    </div>
  );
};