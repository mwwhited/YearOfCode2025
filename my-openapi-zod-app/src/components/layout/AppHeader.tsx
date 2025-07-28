import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const menuRef = useRef<PrimeMenuType>(null);

  // Get display name from user context
  const displayName = getUserFullName() || user?.name || user?.username || 'User';
  const userRole = getUserRole() || 'No role assigned';

  const userMenuItems = [
    {
      label: displayName,
      icon: 'pi pi-user',
      disabled: true,
      template: () => (
        <div className="p-menuitem-content" style={{ padding: '0.5rem 1rem' }}>
          <div className="font-semibold">{displayName}</div>
          <div className="text-xs text-500">{userRole}</div>
        </div>
      )
    },
    { separator: true },
    {
      label: 'Profile',
      icon: 'pi pi-user',
      command: () => {
        navigate('/profile');
      }
    },
    {
      label: 'Settings',
      icon: 'pi pi-cog',
      command: () => {
        // For now, just show a message. Can be expanded later.
        console.log('Settings functionality coming soon');
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

  // Get avatar initials from user context
  const getAvatarInitials = () => {
    const fullName = getUserFullName();
    if (fullName) {
      const names = fullName.trim().split(' ');
      if (names.length >= 2) {
        return `${names[0].charAt(0)}${names[names.length - 1].charAt(0)}`.toUpperCase();
      }
      return names[0].charAt(0).toUpperCase();
    }
    return user?.name?.charAt(0)?.toUpperCase() || user?.username?.charAt(0)?.toUpperCase() || 'U';
  };

  const endContent = (
    <div className="flex align-items-center">
      {isAuthenticated && (
        <>
          <span className="mr-2 text-sm hidden md:inline">
            Welcome, {displayName}
          </span>
          <Menu 
            model={userMenuItems} 
            popup 
            ref={menuRef}
            className="mt-2"
          />
          <Avatar
            label={getAvatarInitials()}
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