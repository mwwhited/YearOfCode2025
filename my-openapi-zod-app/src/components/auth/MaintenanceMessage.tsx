/**
 * System Maintenance Message Component
 * Displays when API times out, indicating system is offline for maintenance
 */

import React from 'react';
import { Message, ProgressSpinner } from '@/components/controls';

interface MaintenanceMessageProps {
  countdown?: number;
}

export const MaintenanceMessage: React.FC<MaintenanceMessageProps> = ({ countdown }) => {
  return (
    <div className="min-h-screen flex align-items-center justify-content-center px-4">
      <div className="max-w-30rem w-full text-center">
        <div className="mb-4">
          <i className="pi pi-exclamation-triangle text-6xl text-orange-600"></i>
        </div>
        
        <Message 
          severity="warn" 
          text="System Offline For Maintenance" 
          className="w-full mb-4"
        />
        
        <div className="mb-4">
          <h3 className="mt-0 mb-2">Temporary Service Interruption</h3>
          <p className="text-600 mb-3">
            Our system is currently undergoing maintenance. You will be redirected to login shortly.
          </p>
          
          {countdown && countdown > 0 && (
            <p className="text-sm text-500">
              Redirecting in {Math.ceil(countdown / 1000)} seconds...
            </p>
          )}
        </div>
        
        <div className="flex align-items-center justify-content-center gap-2">
          <ProgressSpinner style={{ width: '20px', height: '20px' }} />
          <span className="text-sm text-600">Please wait...</span>
        </div>
        
        <div className="mt-4 text-xs text-500">
          <p>If this issue persists, please contact system administrator.</p>
        </div>
      </div>
    </div>
  );
};