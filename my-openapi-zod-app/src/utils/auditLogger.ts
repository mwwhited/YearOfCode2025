import { logger } from './logger';

/**
 * Audit logging system for tracking user actions
 */

export interface AuditLog {
  timestamp: string;
  userId?: string;
  userName?: string;
  userRole?: string;
  action: AuditAction;
  entityType: string;
  entityId?: string | number;
  details?: Record<string, unknown>;
  ipAddress?: string;
  userAgent?: string;
  sessionId?: string;
  success: boolean;
  errorMessage?: string;
}

export type AuditAction = 
  | 'CREATE'
  | 'READ' 
  | 'UPDATE'
  | 'DELETE'
  | 'BULK_UPDATE'
  | 'BULK_DELETE'
  | 'EXPORT'
  | 'LOGIN'
  | 'LOGOUT'
  | 'PERMISSION_DENIED'
  | 'SEARCH'
  | 'FILTER'
  | 'VIEW';

export interface AuditContext {
  entityType: string;
  entityId?: string | number;
  action: AuditAction;
  details?: Record<string, unknown>;
}

class AuditLogger {
  private logs: AuditLog[] = [];
  private maxLogs = 1000; // Keep only last 1000 logs in memory
  private batchSize = 10; // Send logs in batches
  private flushInterval = 30000; // Flush every 30 seconds
  private pendingLogs: AuditLog[] = [];

  constructor() {
    // Auto-flush logs periodically
    if (typeof window !== 'undefined') {
      setInterval(() => {
        this.flush();
      }, this.flushInterval);

      // Flush logs before page unload
      window.addEventListener('beforeunload', () => {
        this.flush();
      });
    }
  }

  /**
   * Log a user action
   */
  async logAction(
    context: AuditContext,
    success: boolean = true,
    errorMessage?: string
  ): Promise<void> {
    try {
      const user = this.getCurrentUser() as { 
        id?: string; 
        name?: string; 
        username?: string; 
        roles?: string[] 
      } | null;
      
      const auditLog: AuditLog = {
        timestamp: new Date().toISOString(),
        userId: user?.id,
        userName: user?.name || user?.username,
        userRole: user?.roles?.[0] || 'Unknown',
        action: context.action,
        entityType: context.entityType,
        entityId: context.entityId,
        details: context.details,
        ipAddress: await this.getClientIP(),
        userAgent: navigator.userAgent,
        sessionId: this.getSessionId(),
        success,
        errorMessage
      };

      // Add to in-memory store
      this.logs.push(auditLog);
      this.pendingLogs.push(auditLog);

      // Maintain max logs limit
      if (this.logs.length > this.maxLogs) {
        this.logs = this.logs.slice(-this.maxLogs);
      }

      // Auto-flush if batch is full
      if (this.pendingLogs.length >= this.batchSize) {
        await this.flush();
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        logger.info('🔍 Audit Log:', {
          action: context.action,
          entity: `${context.entityType}${context.entityId ? `(${context.entityId})` : ''}`,
          user: (user as { name?: string } | null)?.name || 'Anonymous',
          success
        });
      }

    } catch (error) {
      logger.error('Failed to create audit log:', error);
    }
  }

  /**
   * Log successful actions
   */
  async logSuccess(context: AuditContext): Promise<void> {
    return this.logAction(context, true);
  }

  /**
   * Log failed actions
   */
  async logError(context: AuditContext, error: string | Error): Promise<void> {
    const errorMessage = typeof error === 'string' ? error : error.message;
    return this.logAction(context, false, errorMessage);
  }

  /**
   * Bulk log multiple actions (for bulk operations)
   */
  async logBulkActions(
    baseContext: Omit<AuditContext, 'entityId'>,
    entityIds: (string | number)[],
    results: { id: string | number; success: boolean; error?: string }[]
  ): Promise<void> {
    const promises = results.map(result => {
      const context: AuditContext = {
        ...baseContext,
        entityId: result.id,
        details: {
          ...baseContext.details,
          bulkOperation: true,
          totalItems: entityIds.length
        }
      };
      
      return this.logAction(context, result.success, result.error);
    });

    await Promise.all(promises);
  }

  /**
   * Get audit logs (for admin viewing)
   */
  getLogs(filters?: {
    userId?: string;
    action?: AuditAction;
    entityType?: string;
    startDate?: Date;
    endDate?: Date;
    limit?: number;
  }): AuditLog[] {
    let filteredLogs = [...this.logs];

    if (filters) {
      if (filters.userId) {
        filteredLogs = filteredLogs.filter(log => log.userId === filters.userId);
      }
      
      if (filters.action) {
        filteredLogs = filteredLogs.filter(log => log.action === filters.action);
      }
      
      if (filters.entityType) {
        filteredLogs = filteredLogs.filter(log => log.entityType === filters.entityType);
      }
      
      if (filters.startDate) {
        filteredLogs = filteredLogs.filter(log => 
          new Date(log.timestamp) >= filters.startDate!
        );
      }
      
      if (filters.endDate) {
        filteredLogs = filteredLogs.filter(log => 
          new Date(log.timestamp) <= filters.endDate!
        );
      }
      
      if (filters.limit) {
        filteredLogs = filteredLogs.slice(-filters.limit);
      }
    }

    return filteredLogs.sort((a, b) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
  }

  /**
   * Export audit logs
   */
  exportLogs(format: 'json' | 'csv' = 'json'): string {
    const logs = this.getLogs();
    
    if (format === 'csv') {
      const headers = [
        'Timestamp', 'User ID', 'User Name', 'User Role', 'Action', 
        'Entity Type', 'Entity ID', 'Success', 'Error Message', 'IP Address'
      ];
      
      const csvRows = [
        headers.join(','),
        ...logs.map(log => [
          log.timestamp,
          log.userId || '',
          log.userName || '',
          log.userRole || '',
          log.action,
          log.entityType,
          log.entityId || '',
          log.success,
          log.errorMessage || '',
          log.ipAddress || ''
        ].map(field => `"${String(field).replace(/"/g, '""')}"`).join(','))
      ];
      
      return csvRows.join('\n');
    }
    
    return JSON.stringify(logs, null, 2);
  }

  /**
   * Clear all logs (admin only)
   */
  clearLogs(): void {
    this.logs = [];
    this.pendingLogs = [];
    logger.info('Audit logs cleared');
  }

  /**
   * Flush pending logs to server/storage
   */
  private async flush(): Promise<void> {
    if (this.pendingLogs.length === 0) return;

    try {
      // In a real application, you would send these to a server endpoint
      // For now, we'll just log them
      const logsToFlush = [...this.pendingLogs];
      this.pendingLogs = [];

      if (process.env.NODE_ENV === 'development') {
        logger.info(`📤 Flushing ${logsToFlush.length} audit logs`);
      }

      // TODO: Implement actual server endpoint
      // await fetch('/api/audit-logs', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(logsToFlush)
      // });

    } catch (error) {
      logger.error('Failed to flush audit logs:', error);
      // Put logs back in pending queue on failure
      this.pendingLogs.unshift(...this.pendingLogs);
    }
  }

  /**
   * Get current user from window context (set by auth provider)
   */
  private getCurrentUser() {
    try {
      // Access user from global window context set by AuthProvider
      if (typeof window !== 'undefined' && (window as unknown as { __AUDIT_USER_CONTEXT__?: unknown }).__AUDIT_USER_CONTEXT__) {
        return (window as unknown as { __AUDIT_USER_CONTEXT__: unknown }).__AUDIT_USER_CONTEXT__;
      }
      return null;
    } catch {
      return null;
    }
  }

  /**
   * Get client IP address
   */
  private async getClientIP(): Promise<string> {
    try {
      // In production, you might use a service to get the real IP
      return 'client-ip';
    } catch {
      return 'unknown';
    }
  }

  /**
   * Get session ID
   */
  private getSessionId(): string {
    // Simple session ID - in production use proper session management
    if (typeof window !== 'undefined') {
      let sessionId = sessionStorage.getItem('audit-session-id');
      if (!sessionId) {
        sessionId = `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        sessionStorage.setItem('audit-session-id', sessionId);
      }
      return sessionId;
    }
    return 'no-session';
  }
}

// Export singleton instance
export const auditLogger = new AuditLogger();