/**
 * Sidebar Hover Menu - Shows popup menu on hover when sidebar is collapsed
 */

import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/controls';

interface MenuItem {
  separator?: boolean;
  icon?: string;
  label?: string;
  command?: () => void;
  visible?: boolean;
  items?: MenuItem[];
}

interface SidebarHoverMenuProps {
  item: MenuItem;
  children: React.ReactNode;
  collapsed: boolean;
}

export const SidebarHoverMenu: React.FC<SidebarHoverMenuProps> = ({
  item,
  children,
  collapsed
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (!collapsed || !item.items || item.items.length === 0) return;

    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.top,
        left: rect.right + 8 // 8px gap from sidebar
      });
    }

    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 150); // Small delay to allow moving to popup
  };

  const handleMenuMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handleMenuMouseLeave = () => {
    setIsVisible(false);
  };

  const handleItemClick = (command?: () => void) => {
    if (command) {
      command();
      setIsVisible(false);
    }
  };

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((menuItem, index) => {
      if (menuItem.separator) {
        return (
          <div 
            key={index} 
            className="border-top-1 surface-border my-2" 
          />
        );
      }

      return (
        <div
          key={index}
          className="p-2 cursor-pointer hover:bg-primary-50 border-round flex align-items-center"
          onClick={() => handleItemClick(menuItem.command)}
        >
          {menuItem.icon && (
            <i className={`${menuItem.icon} mr-2 text-primary`} />
          )}
          <span className="text-sm">{menuItem.label}</span>
        </div>
      );
    });
  };

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>

      {isVisible && collapsed && item.items && item.items.length > 0 && (
        <div
          ref={menuRef}
          className="fixed z-6 sidebar-hover-menu"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            maxHeight: 'calc(100vh - 20px)',
            overflowY: 'auto'
          }}
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          <Card className="shadow-3 p-0" style={{ minWidth: '200px', maxWidth: '300px' }}>
            <div className="p-3 border-bottom-1 surface-border">
              <div className="flex align-items-center">
                {item.icon && (
                  <i className={`${item.icon} mr-2 text-primary text-lg`} />
                )}
                <span className="font-semibold text-primary">{item.label}</span>
              </div>
            </div>
            <div className="p-2">
              {renderMenuItems(item.items)}
            </div>
          </Card>
        </div>
      )}
    </>
  );
};