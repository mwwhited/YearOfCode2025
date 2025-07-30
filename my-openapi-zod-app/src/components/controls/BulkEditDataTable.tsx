import { useState, useCallback } from "react";
import type { z, ZodObject, ZodRawShape } from "zod";
import { GenericDataTable } from './GenericDataTable';
import { BulkEditModal, type BulkEditResult } from '../BulkEditModal';
import { Button } from './Button';
import type { FieldConfig } from '../forms/DynamicForm';

// Extended props for bulk edit functionality
interface BulkEditDataTableProps<T extends ZodObject<ZodRawShape>> {
  schema: T;
  data?: z.infer<T>[];
  columnOverrides?: Partial<Record<keyof z.infer<T>, { 
    header?: string;
    sortable?: boolean;
    filterable?: boolean;
    filterType?: 'text' | 'number' | 'boolean' | 'date' | 'dropdown';
    dropdownOptions?: { label: string; value: any }[];
    hidden?: boolean;
  }>>;
  client?: {
    Query: (params: { body?: any }) => Promise<any>;
  };
  actionColumn?: {
    header?: string;
    body: (rowData: z.infer<T>) => React.ReactNode;
    style?: React.CSSProperties;
  };
  // Bulk edit specific props
  enableBulkEdit?: boolean;
  bulkEditFields?: FieldConfig[];
  onBulkEdit?: (changes: Record<string, unknown>, selectedIds: (string | number)[]) => Promise<BulkEditResult[]>;
  keyField: keyof z.infer<T>;
  bulkEditTitle?: string;
  // Standard GenericDataTable props
  enableServerSide?: boolean;
  defaultPageSize?: number;
  defaultSortField?: string;
  defaultSortOrder?: 'asc' | 'desc';
  enableGlobalSearch?: boolean;
  enableColumnFilters?: boolean;
  enableAdvancedFilters?: boolean;
  enableSidebarFilters?: boolean;
  enableExport?: boolean;
}

export function BulkEditDataTable<T extends ZodObject<ZodRawShape>>({
  schema,
  data,
  columnOverrides = {},
  client,
  actionColumn,
  enableBulkEdit = false,
  bulkEditFields = [],
  onBulkEdit,
  keyField,
  bulkEditTitle = 'Bulk Edit',
  enableServerSide = false,
  defaultPageSize = 10,
  defaultSortField,
  defaultSortOrder = 'asc',
  enableGlobalSearch = true,
  enableColumnFilters = true,
  enableAdvancedFilters = false,
  enableSidebarFilters = false,
  enableExport = false,
}: BulkEditDataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<z.infer<T>[]>([]);
  const [bulkEditVisible, setBulkEditVisible] = useState(false);

  // Selection change is handled directly in checkbox onChange

  const handleBulkEdit = useCallback(() => {
    if (selectedRows.length > 0) {
      setBulkEditVisible(true);
    }
  }, [selectedRows]);

  const handleBulkEditSave = useCallback(async (
    changes: Record<string, unknown>, 
    selectedIds: (string | number)[]
  ): Promise<BulkEditResult[]> => {
    if (!onBulkEdit) {
      throw new Error('Bulk edit handler not provided');
    }
    
    const results = await onBulkEdit(changes, selectedIds);
    
    // Refresh the data after bulk edit
    // This will trigger a re-render of the GenericDataTable
    setTimeout(() => {
      window.location.reload(); // Simple refresh - could be optimized
    }, 1000);
    
    return results;
  }, [onBulkEdit]);

  const enhancedActionColumn = actionColumn || enableBulkEdit ? {
    header: actionColumn?.header || 'Actions',
    body: (rowData: z.infer<T>) => (
      <div className="flex gap-2">
        {actionColumn?.body(rowData)}
        {enableBulkEdit && (
          <div className="flex align-items-center">
            <input
              type="checkbox"
              checked={selectedRows.some(row => row[keyField as string] === rowData[keyField as string])}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedRows(prev => [...prev, rowData]);
                } else {
                  setSelectedRows(prev => 
                    prev.filter(row => row[keyField as string] !== rowData[keyField as string])
                  );
                }
              }}
              className="p-checkbox-input"
            />
          </div>
        )}
      </div>
    ),
    style: actionColumn?.style || { width: enableBulkEdit ? '150px' : '120px' }
  } : undefined;

  return (
    <>
      {/* Bulk edit toolbar */}
      {enableBulkEdit && selectedRows.length > 0 && (
        <div className="mb-3 p-3 bg-blue-50 border-round">
          <div className="flex justify-content-between align-items-center">
            <span className="font-medium">
              {selectedRows.length} item{selectedRows.length !== 1 ? 's' : ''} selected
            </span>
            <div className="flex gap-2">
              <Button
                label="Bulk Edit"
                icon="pi pi-pencil"
                size="small"
                onClick={handleBulkEdit}
                disabled={bulkEditFields.length === 0}
              />
              <Button
                label="Clear Selection"
                icon="pi pi-times"
                severity="secondary"
                size="small"
                onClick={() => setSelectedRows([])}
              />
            </div>
          </div>
        </div>
      )}

      {/* Enhanced header with select all */}
      {enableBulkEdit && data && data.length > 0 && (
        <div className="mb-2 flex align-items-center gap-2">
          <input
            type="checkbox"
            checked={data.length > 0 && selectedRows.length === data.length}
            onChange={(e) => {
              if (e.target.checked && data) {
                setSelectedRows([...data]);
              } else {
                setSelectedRows([]);
              }
            }}
            className="p-checkbox-input"
          />
          <label className="text-sm text-600">
            Select All ({data.length} items)
          </label>
        </div>
      )}

      {/* Main data table */}
      <GenericDataTable
        schema={schema}
        data={data}
        columnOverrides={columnOverrides}
        client={client}
        actionColumn={enhancedActionColumn}
        enableServerSide={enableServerSide}
        defaultPageSize={defaultPageSize}
        defaultSortField={defaultSortField}
        defaultSortOrder={defaultSortOrder}
        enableGlobalSearch={enableGlobalSearch}
        enableColumnFilters={enableColumnFilters}
        enableAdvancedFilters={enableAdvancedFilters}
        enableSidebarFilters={enableSidebarFilters}
        enableExport={enableExport}
      />

      {/* Bulk edit modal */}
      {enableBulkEdit && onBulkEdit && (
        <BulkEditModal
          visible={bulkEditVisible}
          onHide={() => setBulkEditVisible(false)}
          selectedItems={selectedRows}
          schema={schema}
          editableFields={bulkEditFields}
          onSave={handleBulkEditSave}
          keyField={keyField}
          title={bulkEditTitle}
        />
      )}
    </>
  );
}