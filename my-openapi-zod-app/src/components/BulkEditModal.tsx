import { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import type { z, ZodObject, ZodRawShape } from 'zod';
import { Button, Panel, ProgressSpinner } from '@/components/controls';
import { DynamicForm, type FieldConfig, type FormConfig } from '@/components/forms/DynamicForm';
import { logger } from '@/utils/logger';
import { useGlobalToast } from '@/contexts/ToastContext';

export interface BulkEditResult {
  key: string | number;
  status: 'Changed' | 'Not Changed' | 'Not Found' | 'Error';
  error?: string;
}

interface BulkEditModalProps<T extends ZodObject<ZodRawShape>> {
  visible: boolean;
  onHide: () => void;
  selectedItems: z.infer<T>[];
  schema: T;
  editableFields: FieldConfig[];
  onSave: (changes: Record<string, unknown>, selectedIds: (string | number)[]) => Promise<BulkEditResult[]>;
  keyField: keyof z.infer<T>;
  title?: string;
}

export function BulkEditModal<T extends ZodObject<ZodRawShape>>({
  visible,
  onHide,
  selectedItems,
  schema,
  editableFields,
  onSave,
  keyField,
  title = 'Bulk Edit'
}: BulkEditModalProps<T>) {
  const [saving, setSaving] = useState(false);
  const [results, setResults] = useState<BulkEditResult[] | null>(null);
  const toast = useGlobalToast();

  const formConfig: FormConfig = {
    schema: schema.partial(),
    fields: editableFields
  };

  const handleSubmit = async (changes: Record<string, unknown>) => {
    setSaving(true);
    setResults(null);
    
    try {
      const selectedIds = selectedItems.map(item => item[keyField as string] as string | number);
      const bulkResults = await onSave(changes, selectedIds);
      setResults(bulkResults);
      
      const successCount = bulkResults.filter(r => r.status === 'Changed').length;
      const errorCount = bulkResults.filter(r => r.status === 'Error').length;
      const notFoundCount = bulkResults.filter(r => r.status === 'Not Found').length;
      
      logger.info(`Bulk edit completed: ${successCount} changed, ${errorCount} errors`);
      
      // Show appropriate toast notifications
      if (successCount > 0) {
        toast.showSuccess(
          'Bulk Edit Completed',
          `Successfully updated ${successCount} item${successCount !== 1 ? 's' : ''}`
        );
      }
      
      if (errorCount > 0) {
        toast.showError(
          'Bulk Edit Errors',
          `${errorCount} item${errorCount !== 1 ? 's' : ''} could not be updated`
        );
      }
      
      if (notFoundCount > 0) {
        toast.showWarn(
          'Items Not Found',
          `${notFoundCount} item${notFoundCount !== 1 ? 's were' : ' was'} not found`
        );
      }
      
      if (errorCount === 0) {
        setTimeout(() => onHide(), 2000); // Auto-close after 2 seconds if no errors
      }
    } catch (error) {
      logger.error('Bulk edit failed:', error);
      toast.showError(
        'Bulk Edit Failed',
        'The bulk edit operation failed. Please try again.'
      );
    } finally {
      setSaving(false);
    }
  };

  const handleClose = () => {
    if (!saving) {
      onHide();
      // Reset results when closing
      setTimeout(() => setResults(null), 300);
    }
  };

  const renderResults = () => {
    if (!results) return null;

    const successCount = results.filter(r => r.status === 'Changed').length;
    const notChangedCount = results.filter(r => r.status === 'Not Changed').length;
    const errorCount = results.filter(r => r.status === 'Error').length;
    const notFoundCount = results.filter(r => r.status === 'Not Found').length;

    return (
      <Panel header="Bulk Edit Results" className="mt-3">
        <div className="mb-3">
          <div className="flex flex-wrap gap-3 mb-3">
            <div className="flex align-items-center gap-2">
              <i className="pi pi-check-circle text-green-500"></i>
              <span>{successCount} Changed</span>
            </div>
            <div className="flex align-items-center gap-2">
              <i className="pi pi-info-circle text-blue-500"></i>
              <span>{notChangedCount} Not Changed</span>
            </div>
            {errorCount > 0 && (
              <div className="flex align-items-center gap-2">
                <i className="pi pi-exclamation-triangle text-red-500"></i>
                <span>{errorCount} Errors</span>
              </div>
            )}
            {notFoundCount > 0 && (
              <div className="flex align-items-center gap-2">
                <i className="pi pi-question-circle text-orange-500"></i>
                <span>{notFoundCount} Not Found</span>
              </div>
            )}
          </div>
        </div>

        {/* Show error details if any */}
        {results.some(r => r.status === 'Error') && (
          <div className="mt-3">
            <h4 className="text-red-500 mb-2">Errors:</h4>
            <div className="max-h-15rem overflow-auto">
              {results
                .filter(r => r.status === 'Error')
                .map((result, index) => (
                  <div key={index} className="flex justify-content-between align-items-center p-2 border-bottom-1 surface-border">
                    <span className="font-medium">ID: {result.key}</span>
                    <span className="text-red-500 text-sm">{result.error}</span>
                  </div>
                ))
              }
            </div>
          </div>
        )}
      </Panel>
    );
  };

  return (
    <Dialog
      header={`${title} (${selectedItems.length} items)`}
      visible={visible}
      onHide={handleClose}
      className="w-6 lg:w-4"
      modal
      closable={!saving}
    >
      <div className="mb-3">
        <p className="text-600">
          Make changes to the fields below. Only modified fields will be updated for the selected items.
        </p>
      </div>

      {!results && (
        <DynamicForm
          config={formConfig}
          onSubmit={handleSubmit}
          loading={saving}
          submitLabel={`Update ${selectedItems.length} Items`}
          submitIcon="pi pi-save"
        />
      )}

      {saving && !results && (
        <div className="flex align-items-center justify-content-center p-4">
          <ProgressSpinner />
          <span className="ml-2">Processing bulk edit...</span>
        </div>
      )}

      {renderResults()}

      <div className="flex justify-content-end gap-2 mt-3">
        {results && (
          <Button
            label="Close"
            icon="pi pi-times"
            onClick={handleClose}
            disabled={saving}
          />
        )}
        {!results && (
          <Button
            label="Cancel"
            icon="pi pi-times"
            severity="secondary"
            onClick={handleClose}
            disabled={saving}
          />
        )}
      </div>
    </Dialog>
  );
}