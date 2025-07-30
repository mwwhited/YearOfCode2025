import { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { 
  Button, 
  InputText, 
  Dropdown, 
  Checkbox, 
  MultiSelect,
  Panel,
  Divider
} from '@/components/controls';
import { DataExporter, type ExportFormat, type ExportOptions } from '@/utils/dataExport';
import { useGlobalToast } from '@/contexts/ToastContext';
import { logger } from '@/utils/logger';

interface ExportModalProps<T> {
  visible: boolean;
  onHide: () => void;
  data: T[];
  availableColumns: string[];
  columnOverrides?: Record<string, { header?: string; hidden?: boolean }>;
  defaultFilename?: string;
  title?: string;
}

export function ExportModal<T>({
  visible,
  onHide,
  data,
  availableColumns,
  columnOverrides = {},
  defaultFilename = `export_${new Date().toISOString().split('T')[0]}`,
  title = 'Export Data'
}: ExportModalProps<T>) {
  const [format, setFormat] = useState<ExportFormat>('csv');
  const [filename, setFilename] = useState(defaultFilename);
  const [includeHeaders, setIncludeHeaders] = useState(true);
  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);
  const [dateFormat, setDateFormat] = useState<'iso' | 'localeString'>('localeString');
  const [exporting, setExporting] = useState(false);
  
  const toast = useGlobalToast();

  // Filter visible columns
  const visibleColumns = availableColumns.filter(col => !columnOverrides[col]?.hidden);
  
  // Column options for multi-select
  const columnOptions = visibleColumns.map(col => ({
    label: columnOverrides[col]?.header || col,
    value: col
  }));

  const formatOptions = [
    { label: 'CSV', value: 'csv', icon: 'pi pi-file' },
    { label: 'JSON', value: 'json', icon: 'pi pi-code' },
    { label: 'Excel', value: 'excel', icon: 'pi pi-table' }
  ];

  const dateFormatOptions = [
    { label: 'Locale String (12/31/2023, 10:30:00 AM)', value: 'localeString' },
    { label: 'ISO Format (2023-12-31T10:30:00.000Z)', value: 'iso' }
  ];

  const handleExport = async () => {
    if (!data || data.length === 0) {
      toast.showWarn('No Data', 'There is no data to export');
      return;
    }

    if (!filename.trim()) {
      toast.showWarn('Filename Required', 'Please enter a filename');
      return;
    }

    setExporting(true);
    
    try {
      const exportOptions: ExportOptions = {
        filename: filename.trim(),
        format,
        includeHeaders,
        selectedColumns: selectedColumns.length > 0 ? selectedColumns : undefined,
        dateFormat
      };

      await DataExporter.exportData(data, exportOptions, columnOverrides);
      
      toast.showSuccess(
        'Export Successful',
        `${data.length} records exported to ${filename}.${format}`
      );
      
      logger.info('Data export completed', {
        format,
        recordCount: data.length,
        filename
      });
      
      onHide();
    } catch (error) {
      logger.error('Export failed:', error);
      toast.showError(
        'Export Failed',
        error instanceof Error ? error.message : 'Failed to export data'
      );
    } finally {
      setExporting(false);
    }
  };

  const handleCancel = () => {
    if (!exporting) {
      onHide();
    }
  };

  const getEstimatedFileSize = (): string => {
    if (!data || data.length === 0) return '0 KB';
    
    // Rough estimation based on format
    const avgRowSize = format === 'json' ? 200 : format === 'csv' ? 100 : 150;
    const estimatedBytes = data.length * avgRowSize;
    
    if (estimatedBytes < 1024) return `${estimatedBytes} bytes`;
    if (estimatedBytes < 1024 * 1024) return `${Math.round(estimatedBytes / 1024)} KB`;
    return `${Math.round(estimatedBytes / (1024 * 1024))} MB`;
  };

  return (
    <Dialog
      header={title}
      visible={visible}
      onHide={handleCancel}
      className="w-6 lg:w-4"
      modal
      closable={!exporting}
    >
      <div className="mb-4">
        <p className="text-600 mb-3">
          Export {data?.length || 0} records to your preferred format.
        </p>
        
        <div className="formgrid grid">
          {/* Filename */}
          <div className="field col-12">
            <label htmlFor="filename" className="font-medium">
              Filename <span className="text-red-600">*</span>
            </label>
            <InputText
              id="filename"
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
              className="w-full"
              placeholder="Enter filename"
              disabled={exporting}
            />
          </div>

          {/* Export Format */}
          <div className="field col-12 md:col-6">
            <label htmlFor="format" className="font-medium">Format</label>
            <Dropdown
              id="format"
              value={format}
              options={formatOptions}
              onChange={(e) => setFormat(e.value)}
              className="w-full"
              disabled={exporting}
              optionLabel="label"
              optionValue="value"
            />
          </div>

          {/* Date Format */}
          <div className="field col-12 md:col-6">
            <label htmlFor="dateFormat" className="font-medium">Date Format</label>
            <Dropdown
              id="dateFormat"
              value={dateFormat}
              options={dateFormatOptions}
              onChange={(e) => setDateFormat(e.value)}
              className="w-full"
              disabled={exporting}
              optionLabel="label"
              optionValue="value"
            />
          </div>
        </div>

        <Divider />

        {/* Options */}
        <Panel header="Export Options" toggleable className="mb-3">
          <div className="formgrid grid">
            {/* Include Headers */}
            {(format === 'csv' || format === 'excel') && (
              <div className="field col-12">
                <div className="flex align-items-center">
                  <Checkbox
                    inputId="includeHeaders"
                    checked={includeHeaders}
                    onChange={(e) => setIncludeHeaders(e.checked || false)}
                    disabled={exporting}
                  />
                  <label htmlFor="includeHeaders" className="ml-2">
                    Include column headers
                  </label>
                </div>
              </div>
            )}

            {/* Column Selection */}
            <div className="field col-12">
              <label htmlFor="columns" className="font-medium">
                Columns to Export
              </label>
              <MultiSelect
                id="columns"
                value={selectedColumns}
                options={columnOptions}
                onChange={(e) => setSelectedColumns(e.value)}
                placeholder="Select columns (empty = all visible columns)"
                className="w-full"
                disabled={exporting}
                optionLabel="label"
                optionValue="value"
                display="chip"
                filter
              />
              <small className="text-600">
                Leave empty to export all visible columns
              </small>
            </div>
          </div>
        </Panel>

        {/* Summary */}
        <div className="surface-100 border-round p-3">
          <div className="flex justify-content-between align-items-center mb-2">
            <span className="font-medium">Export Summary</span>
            <span className="text-600">Estimated size: {getEstimatedFileSize()}</span>
          </div>
          <div className="text-sm text-600">
            <p className="m-0">
              Records: {data?.length || 0} • 
              Format: {format.toUpperCase()} • 
              Columns: {selectedColumns.length > 0 ? selectedColumns.length : visibleColumns.length}
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-content-end gap-2">
        <Button
          label="Cancel"
          icon="pi pi-times"
          severity="secondary"
          onClick={handleCancel}
          disabled={exporting}
        />
        <Button
          label="Export"
          icon="pi pi-download"
          onClick={handleExport}
          disabled={exporting || !filename.trim()}
          loading={exporting}
        />
      </div>
    </Dialog>
  );
}