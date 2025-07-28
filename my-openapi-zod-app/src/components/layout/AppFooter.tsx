import React from 'react';

export const AppFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="app-footer">
      <div className="flex justify-content-between align-items-center w-full px-3">
        <div className="text-sm text-600">
          © {currentYear} GreenOnion Application. All rights reserved.
        </div>
        <div className="text-sm text-600">
          Version 1.0.0
        </div>
      </div>
    </div>
  );
};