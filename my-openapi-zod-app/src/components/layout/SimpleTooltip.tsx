/**
 * Simple Tooltip Component for Sidebar Icons
 */

import React, { useState, useRef, useEffect } from 'react';

interface SimpleTooltipProps {
  content: string;
  children: React.ReactNode;
  disabled?: boolean;
  placement?: 'right' | 'left' | 'top' | 'bottom';
  delay?: number;
}

export const SimpleTooltip: React.FC<SimpleTooltipProps> = ({
  content,
  children,
  disabled = false,
  placement = 'right',
  delay = 500
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (disabled || !content) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        let top = 0;
        let left = 0;

        switch (placement) {
          case 'right':
            top = rect.top + rect.height / 2;
            left = rect.right + 8;
            break;
          case 'left':
            top = rect.top + rect.height / 2;
            left = rect.left - 8;
            break;
          case 'top':
            top = rect.top - 8;
            left = rect.left + rect.width / 2;
            break;
          case 'bottom':
            top = rect.bottom + 8;
            left = rect.left + rect.width / 2;
            break;
        }

        setPosition({ top, left });
        setIsVisible(true);
      }
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  const getTooltipTransform = () => {
    switch (placement) {
      case 'right':
        return 'translateY(-50%)';
      case 'left':
        return 'translate(-100%, -50%)';
      case 'top':
        return 'translate(-50%, -100%)';
      case 'bottom':
        return 'translateX(-50%)';
      default:
        return 'translateY(-50%)';
    }
  };

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ display: 'inline-block' }}
      >
        {children}
      </div>

      {isVisible && !disabled && content && (
        <div
          className="fixed z-5 px-2 py-1 border-round shadow-2"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            transform: getTooltipTransform(),
            backgroundColor: 'var(--gray-900)',
            color: 'white',
            fontSize: '12px',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            maxWidth: '200px'
          }}
        >
          {content}
        </div>
      )}
    </>
  );
};