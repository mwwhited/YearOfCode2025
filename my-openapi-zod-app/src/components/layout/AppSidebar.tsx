import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserRole, ROLE_GROUPS } from '@/types/roles';

interface MenuItem {
  separator?: boolean;
  icon?: string;
  label?: string;
  command?: () => void;
  visible?: boolean;
  items?: MenuItem[];
}

interface AppSidebarProps {
  collapsed: boolean;
}

export const AppSidebar: React.FC<AppSidebarProps> = ({ collapsed }) => {
  const { hasRole, hasAnyRole } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      label: 'Dashboard',
      icon: 'pi pi-home',
      command: () => navigate('/dashboard'),
      visible: true
    },
    {
      separator: true,
      visible: true
    },
    {
      label: 'Products',
      icon: 'pi pi-box',
      items: [
        {
          label: 'All Products',
          icon: 'pi pi-list',
          command: () => navigate('/products'),
          visible: hasAnyRole(ROLE_GROUPS.ALL_USERS)
        },
        {
          label: 'Add Product',
          icon: 'pi pi-plus',
          command: () => navigate('/products/add'),
          visible: hasAnyRole(ROLE_GROUPS.ADMIN_ROLES)
        },
        {
          label: 'Suggested Products',
          icon: 'pi pi-lightbulb',
          command: () => navigate('/products/suggested'),
          visible: hasAnyRole(ROLE_GROUPS.ADMIN_ROLES)
        }
      ].filter(item => item.visible),
      visible: hasAnyRole(ROLE_GROUPS.ALL_USERS)
    },
    {
      label: 'Categories',
      icon: 'pi pi-tags',
      items: [
        {
          label: 'All Categories',
          icon: 'pi pi-list',
          command: () => navigate('/categories'),
          visible: hasAnyRole(ROLE_GROUPS.ALL_USERS)
        },
        {
          label: 'Add Category',
          icon: 'pi pi-plus',
          command: () => navigate('/categories/add'),
          visible: hasAnyRole(ROLE_GROUPS.ADMIN_ROLES)
        }
      ].filter(item => item.visible),
      visible: hasAnyRole(ROLE_GROUPS.ALL_USERS)
    },
    {
      label: 'Ingredients',
      icon: 'pi pi-bookmark',
      items: [
        {
          label: 'All Ingredients',
          icon: 'pi pi-list',
          command: () => navigate('/ingredients'),
          visible: hasAnyRole(ROLE_GROUPS.ALL_USERS)
        },
        {
          label: 'Add Ingredient',
          icon: 'pi pi-plus',
          command: () => navigate('/ingredients/add'),
          visible: hasAnyRole(ROLE_GROUPS.ADMIN_ROLES)
        }
      ].filter(item => item.visible),
      visible: hasAnyRole(ROLE_GROUPS.ALL_USERS)
    },
    {
      label: 'Allergens',
      icon: 'pi pi-exclamation-triangle',
      items: [
        {
          label: 'All Allergens',
          icon: 'pi pi-list',
          command: () => navigate('/allergens'),
          visible: hasAnyRole(ROLE_GROUPS.ALL_USERS)
        },
        {
          label: 'Add Allergen',
          icon: 'pi pi-plus',
          command: () => navigate('/allergens/add'),
          visible: hasAnyRole(ROLE_GROUPS.ADMIN_ROLES)
        }
      ].filter(item => item.visible),
      visible: hasAnyRole(ROLE_GROUPS.ALL_USERS)
    },
    {
      separator: true,
      visible: hasAnyRole(ROLE_GROUPS.ADMIN_ROLES)
    },
    {
      label: 'Reports',
      icon: 'pi pi-chart-bar',
      items: [
        {
          label: 'Product Activity',
          icon: 'pi pi-chart-line',
          command: () => navigate('/reports/product-activity'),
          visible: hasAnyRole(ROLE_GROUPS.ADMIN_ROLES)
        },
        {
          label: 'User Actions',
          icon: 'pi pi-users',
          command: () => navigate('/reports/user-actions'),
          visible: hasRole(UserRole.SUPER_ADMIN)
        }
      ].filter(item => item.visible),
      visible: hasAnyRole(ROLE_GROUPS.ADMIN_ROLES)
    },
    {
      separator: true,
      visible: hasAnyRole(ROLE_GROUPS.ADMIN_ROLES)
    },
    {
      label: 'Settings',
      icon: 'pi pi-cog',
      items: [
        {
          label: 'Profile',
          icon: 'pi pi-user',
          command: () => navigate('/profile'),
          visible: true
        },
        {
          label: 'Manage Users',
          icon: 'pi pi-users',
          command: () => navigate('/users/list'),
          visible: hasAnyRole(ROLE_GROUPS.ADMIN_ROLES)
        },
        {
          label: 'Application Settings',
          icon: 'pi pi-sliders-h',
          command: () => console.log('Navigate to application settings'),
          visible: true
        },
        {
          label: 'System Settings',
          icon: 'pi pi-server',
          command: () => console.log('Navigate to system settings'),
          visible: hasRole(UserRole.SUPER_ADMIN)
        }
      ].filter(item => item.visible),
      visible: hasAnyRole(ROLE_GROUPS.ADMIN_ROLES)
    },
    {
      separator: true,
      visible: hasRole('Admin')
    },
    {
      label: 'Administration',
      icon: 'pi pi-shield',
      items: [
        {
          label: 'User Roles',
          icon: 'pi pi-shield',
          command: () => navigate('/admin/roles'),
          visible: hasRole(UserRole.SUPER_ADMIN)
        },
        {
          label: 'School Districts',
          icon: 'pi pi-building',
          command: () => navigate('/admin/school-districts'),
          visible: hasRole(UserRole.SUPER_ADMIN)
        },
        {
          label: 'Error Logs',
          icon: 'pi pi-exclamation-circle',
          command: () => navigate('/admin/error-logs'),
          visible: hasRole(UserRole.SUPER_ADMIN)
        }
      ].filter(item => item.visible),
      visible: hasRole('Admin')
    }
  ].filter(item => item.visible);

  const isActiveRoute = (path: string) => {
    return location.pathname.startsWith(path);
  };

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item, index) => {
      if (item.separator) {
        return <div key={index} className="menu-separator my-2" style={{ borderTop: '1px solid var(--border-color)' }} />;
      }

      const isActive = item.command && isActiveRoute(item.command.toString().split("'")[1]);
      
      return (
        <div key={index} className={`menu-item ${isActive ? 'active' : ''}`}>
          {item.items ? (
            <div className="menu-group">
              <div className="menu-group-header">
                <i className={`${item.icon} mr-2`} />
                {!collapsed && <span>{item.label}</span>}
              </div>
              {!collapsed && (
                <div className="menu-group-items ml-4">
                  {renderMenuItems(item.items)}
                </div>
              )}
            </div>
          ) : (
            <div 
              className="menu-link p-2 cursor-pointer hover:bg-primary-50 border-round"
              onClick={item.command}
            >
              <i className={`${item.icon} mr-2`} />
              {!collapsed && <span>{item.label}</span>}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className={`app-sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-content p-3">
        {renderMenuItems(menuItems)}
      </div>
    </div>
  );
};