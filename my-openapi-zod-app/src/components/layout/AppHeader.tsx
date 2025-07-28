import React from 'react';
import { Toolbar, Button, Avatar, Menu } from '@/components/controls';
import type { PrimeMenuType } from '@/components/controls/Menu';
import { useRef } from 'react';
import { useAuth } from '@/hooks/useAuth';

interface AppHeaderProps {
  onSidebarToggle: () => void;
  sidebarCollapsed: boolean;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ onSidebarToggle, sidebarCollapsed }) => {
  const { user, logout, isAuthenticated, getUserFullName, getUserRole } = useAuth();
  const menuRef = useRef<PrimeMenuType>(null);

  const userMenuItems = [
    {
      label: `${getUserFullName() || user?.username || 'User'}`,
      icon: 'pi pi-user',
      disabled: true,
      template: (item: any) => (
        <div className="p-menuitem-content" style={{ padding: '0.5rem 1rem' }}>
          <div className="font-semibold">{item.label}</div>
          <div className="text-xs text-500">{getUserRole() || 'No role assigned'}</div>
        </div>
      )
    },
    { separator: true },
    {
      label: 'Profile',
      icon: 'pi pi-user',
      command: () => {
        // Navigate to profile page
        console.log('Navigate to profile');
      }
    },
    {
      label: 'Settings',
      icon: 'pi pi-cog',
      command: () => {
        // Navigate to settings page
        console.log('Navigate to settings');
      }
    },
    {
      separator: true
    },
    {
      label: 'Logout',
      icon: 'pi pi-sign-out',
      command: () => {
        logout();
      }
    }
  ];

  const startContent = (
    <div className="flex align-items-center">
      <Button
        icon={sidebarCollapsed ? 'pi pi-bars' : 'pi pi-times'}
        className="p-button-text p-button-plain mr-2"
        onClick={onSidebarToggle}
        tooltip={sidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
      />
      <h2 className="m-0 text-primary">GreenOnion App</h2>
    </div>
  );

  const endContent = (
    <div className="flex align-items-center">
      {isAuthenticated && (
        <>
          <span className="mr-2 text-sm hidden md:inline">
            Welcome, {getUserFullName() || user?.name || user?.username}
          </span>
          <Menu 
            model={userMenuItems} 
            popup 
            ref={menuRef}
            className="mt-2"
          />
          <Avatar
            label={user?.name?.charAt(0) || user?.username?.charAt(0) || 'U'}
            className="cursor-pointer"
            style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}
            onClick={(e) => menuRef.current?.toggle(e)}
          />
        </>
      )}
    </div>
  );

  return (
    <div className="app-header">
      <Toolbar start={startContent} end={endContent} />
    </div>
  );
};