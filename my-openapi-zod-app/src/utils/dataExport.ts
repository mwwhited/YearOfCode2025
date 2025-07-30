import { logger } from './logger';
import { auditLogger } from './auditLogger';

export type ExportFormat = 'csv' | 'json' | 'excel';

export interface ExportOptions {
  filename?: string;
  format: ExportFormat;
  includeHeaders?: boolean;
  selectedColumns?: string[];
  dateFormat?: 'iso' | 'localeString' | 'custom';
  customDateFormat?: string;
}

export class DataExporter {
  /**
   * Export data to specified format
   */
  static async exportData<T>(
    data: T[],
    options: ExportOptions,
    columnOverrides?: Record<string, { header?: string; hidden?: boolean }>
  ): Promise<void> {
    if (!data || data.length === 0) {
      throw new Error('No data to export');
    }

    const {
      filename = `export_${new Date().toISOString().split('T')[0]}`,
      format,
      includeHeaders = true,
      selectedColumns,
      dateFormat = 'localeString'
    } = options;

    logger.info(`Starting data export: ${format} format, ${data.length} rows`);

    let exportContent: string | Blob;
    let mimeType: string;
    let fileExtension: string;

    // Process data based on format
    switch (format) {
      case 'csv':
        exportContent = this.toCsv(data, { 
          includeHeaders, 
          selectedColumns, 
          columnOverrides,
          dateFormat 
        });
        mimeType = 'text/csv';
        fileExtension = 'csv';
        break;

      case 'json':
        exportContent = this.toJson(data, { 
          selectedColumns, 
          columnOverrides,
          dateFormat 
        });
        mimeType = 'application/json';
        fileExtension = 'json';
        break;

      case 'excel':
        exportContent = await this.toExcel(data, { 
          includeHeaders, 
          selectedColumns, 
          columnOverrides,
          dateFormat 
        });
        mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        fileExtension = 'xlsx';
        break;

      default:
        throw new Error(`Unsupported export format: ${format}`);
    }

    // Download the file
    this.downloadFile(exportContent, `${filename}.${fileExtension}`, mimeType);
    
    // Log export action
    await auditLogger.logSuccess({
      action: 'EXPORT',
      entityType: 'DataTable',
      details: {
        format,
        filename: `${filename}.${fileExtension}`,
        rowCount: data.length,
        selectedColumns: selectedColumns?.length || 'all',
        fileSize: exportContent instanceof Blob ? exportContent.size : exportContent.length
      }
    });
    
    logger.info(`Export completed: ${filename}.${fileExtension}`);
  }

  /**
   * Convert data to CSV format
   */
  private static toCsv<T>(
    data: T[], 
    options: {
      includeHeaders?: boolean;
      selectedColumns?: string[];
      columnOverrides?: Record<string, { header?: string; hidden?: boolean }>;
      dateFormat?: 'iso' | 'localeString' | 'custom';
    }
  ): string {
    if (data.length === 0) return '';

    const { includeHeaders = true, selectedColumns, columnOverrides = {}, dateFormat = 'localeString' } = options;

    // Get all available columns
    const allColumns = Object.keys(data[0] as Record<string, unknown>);
    
    // Filter columns based on selection and visibility
    const visibleColumns = allColumns.filter(col => {
      const override = columnOverrides[col];
      if (override?.hidden) return false;
      if (selectedColumns && selectedColumns.length > 0) {
        return selectedColumns.includes(col);
      }
      return true;
    });

    const rows: string[] = [];

    // Add headers
    if (includeHeaders) {
      const headers = visibleColumns.map(col => {
        const override = columnOverrides[col];
        const header = override?.header || col;
        return this.escapeCsvField(header);
      });
      rows.push(headers.join(','));
    }

    // Add data rows
    data.forEach(row => {
      const values = visibleColumns.map(col => {
        const value = (row as Record<string, unknown>)[col];
        return this.escapeCsvField(this.formatValue(value, dateFormat));
      });
      rows.push(values.join(','));
    });

    return rows.join('\n');
  }

  /**
   * Convert data to JSON format
   */
  private static toJson<T>(
    data: T[],
    options: {
      selectedColumns?: string[];
      columnOverrides?: Record<string, { header?: string; hidden?: boolean }>;
      dateFormat?: 'iso' | 'localeString' | 'custom';
    }
  ): string {
    const { selectedColumns, columnOverrides = {}, dateFormat = 'localeString' } = options;

    const processedData = data.map(row => {
      const processedRow: Record<string, unknown> = {};
      
      Object.entries(row as Record<string, unknown>).forEach(([key, value]) => {
        const override = columnOverrides[key];
        
        // Skip hidden columns
        if (override?.hidden) return;
        
        // Filter by selected columns
        if (selectedColumns && selectedColumns.length > 0 && !selectedColumns.includes(key)) {
          return;
        }
        
        // Use override header as key or original key
        const outputKey = override?.header || key;
        processedRow[outputKey] = this.formatValue(value, dateFormat);
      });
      
      return processedRow;
    });

    return JSON.stringify(processedData, null, 2);
  }

  /**
   * Convert data to Excel format (simplified - returns CSV for now)
   * In a real application, you'd use a library like xlsx or exceljs
   */
  private static async toExcel<T>(
    data: T[],
    options: {
      includeHeaders?: boolean;
      selectedColumns?: string[];
      columnOverrides?: Record<string, { header?: string; hidden?: boolean }>;
      dateFormat?: 'iso' | 'localeString' | 'custom';
    }
  ): Promise<Blob> {
    // For now, we'll create a CSV blob that Excel can open
    // In a production app, you'd want to use a proper Excel library
    const csvContent = this.toCsv(data, options);
    return new Blob([csvContent], { 
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
    });
  }

  /**
   * Format a value for export
   */
  private static formatValue(
    value: unknown, 
    dateFormat: 'iso' | 'localeString' | 'custom' = 'localeString'
  ): string {
    if (value === null || value === undefined) {
      return '';
    }

    if (value instanceof Date) {
      switch (dateFormat) {
        case 'iso':
          return value.toISOString();
        case 'localeString':
          return value.toLocaleString();
        default:
          return value.toLocaleString();
      }
    }

    if (typeof value === 'string' && this.isDateString(value)) {
      const date = new Date(value);
      if (!isNaN(date.getTime())) {
        switch (dateFormat) {
          case 'iso':
            return date.toISOString();
          case 'localeString':
            return date.toLocaleString();
          default:
            return date.toLocaleString();
        }
      }
    }

    return String(value);
  }

  /**
   * Check if a string looks like a date
   */
  private static isDateString(value: string): boolean {
    // Basic ISO date pattern check
    return /^\d{4}-\d{2}-\d{2}/.test(value) || /^\d{4}-\d{2}-\d{2}T/.test(value);
  }

  /**
   * Escape CSV field
   */
  private static escapeCsvField(value: string): string {
    if (value.includes(',') || value.includes('"') || value.includes('\n')) {
      return `"${value.replace(/"/g, '""')}"`;
    }
    return value;
  }

  /**
   * Download a file
   */
  private static downloadFile(content: string | Blob, filename: string, mimeType: string): void {
    const blob = content instanceof Blob ? content : new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the URL
    setTimeout(() => URL.revokeObjectURL(url), 100);
  }

  /**
   * Get available columns from data
   */
  static getAvailableColumns<T>(data: T[]): string[] {
    if (!data || data.length === 0) return [];
    return Object.keys(data[0] as Record<string, unknown>);
  }

  /**
   * Validate export options
   */
  static validateExportOptions(options: ExportOptions): boolean {
    const supportedFormats: ExportFormat[] = ['csv', 'json', 'excel'];
    return supportedFormats.includes(options.format);
  }
}