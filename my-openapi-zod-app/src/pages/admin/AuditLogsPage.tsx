import React from 'react';
import { AuditLogViewer } from '@/components/admin/AuditLogViewer';

export const AuditLogsPage: React.FC = () => {
  return (
    <div className="audit-logs-page">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-900 mb-2">Audit Logs</h1>
        <p className="text-600">
          Monitor and review all system activities and user actions.
        </p>
      </div>
      
      <AuditLogViewer />
    </div>
  );
};