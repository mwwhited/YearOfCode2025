import React, { useState, useCallback, useMemo } from 'react';
import { Card, Button, Dropdown, InputText, DataTable, Column } from '@/components/controls';
import { auditLogger, type AuditLog, type AuditAction } from '@/utils/auditLogger';
import { Calendar } from 'primereact/calendar';
import { Badge } from 'primereact/badge';
import { Dialog } from 'primereact/dialog';
import { ScrollPanel } from 'primereact/scrollpanel';

interface AuditLogViewerProps {
  className?: string;
}

interface AuditFilters {
  userId?: string;
  action?: AuditAction;
  entityType?: string;
  startDate?: Date;
  endDate?: Date;
  limit?: number;
}

export const AuditLogViewer: React.FC<AuditLogViewerProps> = ({ className }) => {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [filters, setFilters] = useState<AuditFilters>({ limit: 100 });
  const [loading, setLoading] = useState(false);
  const [selectedLog, setSelectedLog] = useState<AuditLog | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  // Load logs with filters
  const loadLogs = useCallback(() => {
    setLoading(true);
    try {
      const filteredLogs = auditLogger.getLogs(filters);
      setLogs(filteredLogs);
    } catch (error) {
      console.error('Failed to load audit logs:', error);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  // Load logs on mount and filter changes
  React.useEffect(() => {
    loadLogs();
  }, [loadLogs]);

  // Action options for dropdown
  const actionOptions = useMemo(() => [
    { label: 'All Actions', value: undefined },
    { label: 'Create', value: 'CREATE' },
    { label: 'Read', value: 'READ' },
    { label: 'Update', value: 'UPDATE' },
    { label: 'Delete', value: 'DELETE' },
    { label: 'Bulk Update', value: 'BULK_UPDATE' },
    { label: 'Bulk Delete', value: 'BULK_DELETE' },
    { label: 'Export', value: 'EXPORT' },
    { label: 'Login', value: 'LOGIN' },
    { label: 'Logout', value: 'LOGOUT' },
    { label: 'View', value: 'VIEW' },
    { label: 'Search', value: 'SEARCH' },
    { label: 'Filter', value: 'FILTER' },
    { label: 'Permission Denied', value: 'PERMISSION_DENIED' }
  ], []);

  // Entity type options
  const entityTypeOptions = useMemo(() => {
    const entityTypes = Array.from(new Set(logs.map(log => log.entityType)))
      .sort()
      .map(type => ({ label: type, value: type }));
    return [{ label: 'All Entities', value: undefined }, ...entityTypes];
  }, [logs]);

  // Export audit logs
  const handleExport = useCallback(async () => {
    try {
      const exportData = auditLogger.exportLogs('csv');
      const blob = new Blob([exportData], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `audit_logs_${new Date().toISOString().split('T')[0]}.csv`;
      link.click();
      
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to export audit logs:', error);
    }
  }, []);

  // Clear all logs (admin only)
  const handleClearLogs = useCallback(() => {
    if (window.confirm('Are you sure you want to clear all audit logs? This action cannot be undone.')) {
      auditLogger.clearLogs();
      setLogs([]);
    }
  }, []);

  // Format timestamp
  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  // Get action badge severity
  const getActionSeverity = (action: AuditAction): "success" | "info" | "warning" | "danger" => {
    switch (action) {
      case 'CREATE':
        return 'success';
      case 'READ':
      case 'VIEW':
      case 'SEARCH':
      case 'FILTER':
        return 'info';
      case 'UPDATE':
      case 'BULK_UPDATE':
        return 'warning';
      case 'DELETE':
      case 'BULK_DELETE':
      case 'PERMISSION_DENIED':
        return 'danger';
      default:
        return 'info';
    }
  };

  // Get success badge
  const getSuccessBadge = (success: boolean) => (
    <Badge 
      value={success ? 'Success' : 'Failed'} 
      severity={success ? 'success' : 'danger'} 
    />
  );

  // Show log details
  const showLogDetails = (log: AuditLog) => {
    setSelectedLog(log);
    setShowDetails(true);
  };

  return (
    <div className={className}>
      <Card>
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-900 mb-3">Audit Log Viewer</h2>
          
          {/* Filters */}
          <div className="grid mb-3">
            <div className="col-12 md:col-3">
              <label htmlFor="userIdFilter" className="block text-sm font-medium mb-2">
                User ID
              </label>
              <InputText
                id="userIdFilter"
                value={filters.userId || ''}
                onChange={(e) => setFilters(prev => ({ ...prev, userId: e.target.value || undefined }))}
                placeholder="Filter by user ID"
                className="w-full"
              />
            </div>
            
            <div className="col-12 md:col-3">
              <label htmlFor="actionFilter" className="block text-sm font-medium mb-2">
                Action
              </label>
              <Dropdown
                id="actionFilter"
                value={filters.action}
                options={actionOptions}
                onChange={(e) => setFilters(prev => ({ ...prev, action: e.value }))}
                placeholder="Select action"
                className="w-full"
              />
            </div>
            
            <div className="col-12 md:col-3">
              <label htmlFor="entityFilter" className="block text-sm font-medium mb-2">
                Entity Type
              </label>
              <Dropdown
                id="entityFilter"
                value={filters.entityType}
                options={entityTypeOptions}
                onChange={(e) => setFilters(prev => ({ ...prev, entityType: e.value }))}
                placeholder="Select entity"
                className="w-full"
              />
            </div>
            
            <div className="col-12 md:col-3">
              <label htmlFor="limitFilter" className="block text-sm font-medium mb-2">
                Limit
              </label>
              <InputText
                id="limitFilter"
                value={filters.limit?.toString() || ''}
                onChange={(e) => setFilters(prev => ({ 
                  ...prev, 
                  limit: e.target.value ? parseInt(e.target.value) : undefined 
                }))}
                placeholder="100"
                className="w-full"
                type="number"
              />
            </div>
          </div>
          
          <div className="grid mb-3">
            <div className="col-12 md:col-4">
              <label htmlFor="startDate" className="block text-sm font-medium mb-2">
                Start Date
              </label>
              <Calendar
                id="startDate"
                value={filters.startDate}
                onChange={(e) => setFilters(prev => ({ ...prev, startDate: e.value as Date }))}
                showTime
                className="w-full"
              />
            </div>
            
            <div className="col-12 md:col-4">
              <label htmlFor="endDate" className="block text-sm font-medium mb-2">
                End Date
              </label>
              <Calendar
                id="endDate"
                value={filters.endDate}
                onChange={(e) => setFilters(prev => ({ ...prev, endDate: e.value as Date }))}
                showTime
                className="w-full"
              />
            </div>
            
            <div className="col-12 md:col-4 flex align-items-end">
              <div className="flex gap-2 w-full">
                <Button
                  label="Clear Filters"
                  icon="pi pi-times"
                  severity="secondary"
                  onClick={() => setFilters({ limit: 100 })}
                />
                <Button
                  label="Export CSV"
                  icon="pi pi-download"
                  severity="help"
                  onClick={handleExport}
                />
                <Button
                  label="Clear All Logs"
                  icon="pi pi-trash"
                  severity="danger"
                  onClick={handleClearLogs}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid mb-4">
          <div className="col-12 md:col-3">
            <div className="bg-blue-50 p-3 border-round">
              <div className="text-blue-900 font-medium">Total Logs</div>
              <div className="text-2xl font-bold text-blue-900">{logs.length}</div>
            </div>
          </div>
          <div className="col-12 md:col-3">
            <div className="bg-green-50 p-3 border-round">
              <div className="text-green-900 font-medium">Successful</div>
              <div className="text-2xl font-bold text-green-900">
                {logs.filter(log => log.success).length}
              </div>
            </div>
          </div>
          <div className="col-12 md:col-3">
            <div className="bg-red-50 p-3 border-round">
              <div className="text-red-900 font-medium">Failed</div>
              <div className="text-2xl font-bold text-red-900">
                {logs.filter(log => !log.success).length}
              </div>
            </div>
          </div>
          <div className="col-12 md:col-3">
            <div className="bg-purple-50 p-3 border-round">
              <div className="text-purple-900 font-medium">Unique Users</div>
              <div className="text-2xl font-bold text-purple-900">
                {new Set(logs.map(log => log.userId).filter(Boolean)).size}
              </div>
            </div>
          </div>
        </div>

        {/* Audit Logs Table */}
        <DataTable
          value={logs}
          loading={loading}
          paginator
          rows={25}
          rowsPerPageOptions={[10, 25, 50, 100]}
          sortField="timestamp"
          sortOrder={-1}
          className="p-datatable-sm"
          emptyMessage="No audit logs found"
          onRowClick={(e: any) => showLogDetails(e.data)}
          rowHover
        >
          <Column 
            field="timestamp" 
            header="Timestamp" 
            sortable
            body={(log: AuditLog) => formatTimestamp(log.timestamp)}
            style={{ width: '180px' }}
          />
          <Column 
            field="userName" 
            header="User" 
            sortable
            style={{ width: '150px' }}
          />
          <Column 
            field="action" 
            header="Action" 
            sortable
            body={(log: AuditLog) => (
              <Badge 
                value={log.action} 
                severity={getActionSeverity(log.action)}
              />
            )}
            style={{ width: '120px' }}
          />
          <Column 
            field="entityType" 
            header="Entity" 
            sortable
            style={{ width: '120px' }}
          />
          <Column 
            field="entityId" 
            header="Entity ID" 
            sortable
            style={{ width: '100px' }}
          />
          <Column 
            field="success" 
            header="Status" 
            sortable
            body={(log: AuditLog) => getSuccessBadge(log.success)}
            style={{ width: '100px' }}
          />
          <Column 
            field="ipAddress" 
            header="IP Address" 
            style={{ width: '120px' }}
          />
          <Column
            header="Actions"
            body={(log: AuditLog) => (
              <Button
                icon="pi pi-eye"
                size="small"
                text
                tooltip="View Details"
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  showLogDetails(log);
                }}
              />
            )}
            style={{ width: '80px' }}
          />
        </DataTable>
      </Card>

      {/* Log Details Dialog */}
      {selectedLog && (
        <Dialog
          header={`Audit Log Details - ${selectedLog.action}`}
          visible={showDetails}
          style={{ width: '50vw' }}
          maximizable
          modal
          onHide={() => setShowDetails(false)}
        >
          <div className="grid">
            <div className="col-6">
              <strong>Timestamp:</strong> {formatTimestamp(selectedLog.timestamp)}
            </div>
            <div className="col-6">
              <strong>Status:</strong> {getSuccessBadge(selectedLog.success)}
            </div>
            <div className="col-6">
              <strong>User:</strong> {selectedLog.userName || 'Unknown'}
            </div>
            <div className="col-6">
              <strong>User ID:</strong> {selectedLog.userId || 'N/A'}
            </div>
            <div className="col-6">
              <strong>Role:</strong> {selectedLog.userRole || 'N/A'}
            </div>
            <div className="col-6">
              <strong>Session ID:</strong> {selectedLog.sessionId || 'N/A'}
            </div>
            <div className="col-6">
              <strong>Entity Type:</strong> {selectedLog.entityType}
            </div>
            <div className="col-6">
              <strong>Entity ID:</strong> {selectedLog.entityId || 'N/A'}
            </div>
            <div className="col-6">
              <strong>IP Address:</strong> {selectedLog.ipAddress || 'N/A'}
            </div>
            <div className="col-6">
              <strong>User Agent:</strong> {selectedLog.userAgent ? 'Available' : 'N/A'}
            </div>
            
            {selectedLog.errorMessage && (
              <div className="col-12">
                <strong>Error Message:</strong>
                <div className="bg-red-50 p-2 border-round mt-2 text-red-900">
                  {selectedLog.errorMessage}
                </div>
              </div>
            )}
            
            {selectedLog.details && (
              <div className="col-12">
                <strong>Details:</strong>
                <ScrollPanel style={{ width: '100%', height: '200px' }} className="mt-2">
                  <pre className="bg-gray-50 p-2 border-round text-sm">
                    {JSON.stringify(selectedLog.details, null, 2)}
                  </pre>
                </ScrollPanel>
              </div>
            )}
          </div>
        </Dialog>
      )}
    </div>
  );
};