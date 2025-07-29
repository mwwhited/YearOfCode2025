import React, { useState, useEffect } from 'react';
import { Panel, Button, Divider, InputText, Dropdown, Calendar, InputNumber, MultiSelect } from './';
import type { FilterRule } from './AdvancedColumnFilter';
import { z, ZodObject, type ZodRawShape } from 'zod';

interface SidebarFilterEditorProps<T extends ZodObject<ZodRawShape>> {
  schema: T;
  columnOverrides?: Partial<Record<keyof z.infer<T>, { 
    header?: string;
    filterable?: boolean;
    filterType?: 'text' | 'number' | 'boolean' | 'date' | 'dropdown';
    dropdownOptions?: { label: string; value: any }[];
    hidden?: boolean;
  }>>;
  isOpen: boolean;
  onToggle: () => void;
  stagedFilters: Record<string, FilterRule>;
  appliedFilters: Record<string, FilterRule>;
  onFilterChange: (field: string, filter: FilterRule | null) => void;
  onApplyFilters: () => void;
  onClearFilters: () => void;
  loading?: boolean;
}

const FILTER_OPERATORS = [
  { label: 'Equal To', value: 'eq', description: 'Exactly matches' },
  { label: 'Not Equal To', value: 'neq', description: 'Does not match' },
  { label: 'Greater Than', value: 'gt', description: 'Greater than value' },
  { label: 'Greater or Equal', value: 'gte', description: 'Greater than or equal' },
  { label: 'Less Than', value: 'lt', description: 'Less than value' },
  { label: 'Less or Equal', value: 'lte', description: 'Less than or equal' },
  { label: 'Contains (In)', value: 'in', description: 'Value is in list' }
];

export function SidebarFilterEditor<T extends ZodObject<ZodRawShape>>({
  schema,
  columnOverrides = {},
  isOpen,
  onToggle,
  stagedFilters,
  appliedFilters,
  onFilterChange,
  onApplyFilters,
  onClearFilters,
  loading = false
}: SidebarFilterEditorProps<T>) {
  const [activeFields, setActiveFields] = useState<Set<string>>(new Set());

  // Update active fields when staged filters change
  useEffect(() => {
    setActiveFields(new Set(Object.keys(stagedFilters)));
  }, [stagedFilters]);

  const shape = schema.shape;
  const filterableFields = Object.entries(shape).filter(([key]) => {
    const override = columnOverrides[key as keyof typeof shape];
    return override?.hidden !== true && override?.filterable !== false;
  });

  const addFilterField = (fieldName: string) => {
    setActiveFields(prev => new Set([...prev, fieldName]));
    
    // Initialize with default filter
    const override = columnOverrides[fieldName as keyof typeof shape];
    const defaultOperator = override?.filterType === 'number' ? 'eq' : 'eq';
    
    onFilterChange(fieldName, {
      field: fieldName,
      operator: defaultOperator,
      value: '',
      label: override?.header || fieldName
    });
  };

  const removeFilterField = (fieldName: string) => {
    setActiveFields(prev => {
      const newSet = new Set(prev);
      newSet.delete(fieldName);
      return newSet;
    });
    onFilterChange(fieldName, null);
  };

  const updateFilter = (fieldName: string, updates: Partial<FilterRule>) => {
    const currentFilter = stagedFilters[fieldName];
    if (currentFilter) {
      onFilterChange(fieldName, { ...currentFilter, ...updates });
    }
  };

  const renderFilterInput = (fieldName: string, filter: FilterRule) => {
    const override = columnOverrides[fieldName as keyof typeof shape];
    const filterType = override?.filterType || 'text';
    const zodType = shape[fieldName as keyof typeof shape];

    switch (filterType) {
      case 'boolean':
        return (
          <Dropdown
            value={filter.value}
            options={[
              { label: 'True', value: true },
              { label: 'False', value: false }
            ]}
            onChange={(e) => updateFilter(fieldName, { value: e.value })}
            placeholder="Select value"
            className="w-full"
          />
        );

      case 'number':
        return (
          <InputNumber
            value={filter.value}
            onChange={(e) => updateFilter(fieldName, { value: e.value })}
            placeholder="Enter number"
            className="w-full"
          />
        );

      case 'date':
        return (
          <Calendar
            value={filter.value}
            onChange={(e) => updateFilter(fieldName, { value: e.value })}
            placeholder="Select date"
            className="w-full"
          />
        );

      case 'dropdown':
        if (override?.dropdownOptions) {
          return (
            <Dropdown
              value={filter.value}
              options={override.dropdownOptions}
              onChange={(e) => updateFilter(fieldName, { value: e.value })}
              placeholder="Select option"
              className="w-full"
            />
          );
        }
        // Fall through to text if no dropdown options

      default:
        return (
          <InputText
            value={filter.value || ''}
            onChange={(e) => updateFilter(fieldName, { value: e.target.value })}
            placeholder="Enter value"
            className="w-full"
          />
        );
    }
  };

  const getOperatorsForType = (filterType: string) => {
    switch (filterType) {
      case 'number':
      case 'date':
        return FILTER_OPERATORS;
      case 'boolean':
        return FILTER_OPERATORS.filter(op => ['eq', 'neq'].includes(op.value));
      default:
        return FILTER_OPERATORS.filter(op => ['eq', 'neq', 'in'].includes(op.value));
    }
  };

  const hasPendingChanges = JSON.stringify(stagedFilters) !== JSON.stringify(appliedFilters);
  const hasActiveFilters = Object.keys(appliedFilters).length > 0;
  const availableFields = filterableFields.filter(([key]) => !activeFields.has(key));

  if (!isOpen) {
    return (
      <Button
        icon="pi pi-filter"
        label="Filters"
        className="p-button-outlined"
        onClick={onToggle}
        badge={hasActiveFilters ? String(Object.keys(appliedFilters).length) : undefined}
        tooltip="Open filter editor"
      />
    );
  }

  return (
    <div className="sidebar-filter-editor" style={{ width: '350px', maxWidth: '100%' }}>
      <Panel
        header={
          <div className="flex align-items-center justify-content-between w-full">
            <div className="flex align-items-center gap-2">
              <i className="pi pi-filter" />
              <span className="font-semibold">Advanced Filters</span>
              {hasActiveFilters && (
                <span className="text-sm bg-primary-100 text-primary-700 px-2 py-1 border-round">
                  {Object.keys(appliedFilters).length} active
                </span>
              )}
            </div>
            <Button
              icon="pi pi-times"
              className="p-button-text p-button-sm"
              onClick={onToggle}
              tooltip="Close filter editor"
            />
          </div>
        }
        className="h-full"
        style={{ minHeight: '400px', maxHeight: '80vh' }}
      >
        <div className="flex flex-column gap-3 h-full">
          {/* Add Filter Field */}
          {availableFields.length > 0 && (
            <div className="border-bottom-1 surface-border pb-3">
              <div className="text-sm font-medium text-700 mb-2">Add Filter Field</div>
              <Dropdown
                value={null}
                options={availableFields.map(([key, zodType]) => ({
                  label: columnOverrides[key as keyof typeof shape]?.header || key,
                  value: key
                }))}
                onChange={(e) => e.value && addFilterField(e.value)}
                placeholder="Select field to filter"
                className="w-full"
              />
            </div>
          )}

          {/* Active Filters */}
          <div className="flex-1 overflow-auto">
            {Array.from(activeFields).length === 0 ? (
              <div className="text-center p-4 text-500">
                <i className="pi pi-info-circle text-2xl mb-2" />
                <p className="m-0">No filters active</p>
                <p className="text-sm m-0 mt-1">Add a field above to start filtering</p>
              </div>
            ) : (
              <div className="flex flex-column gap-3">
                {Array.from(activeFields).map((fieldName) => {
                  const filter = stagedFilters[fieldName];
                  if (!filter) return null;

                  const override = columnOverrides[fieldName as keyof typeof shape];
                  const filterType = override?.filterType || 'text';
                  const isApplied = appliedFilters[fieldName] !== undefined;
                  const hasChanges = JSON.stringify(filter) !== JSON.stringify(appliedFilters[fieldName]);

                  return (
                    <div
                      key={fieldName}
                      className={`border-1 surface-border border-round p-3 ${
                        hasChanges ? 'border-orange-200 bg-orange-50' : 
                        isApplied ? 'border-green-200 bg-green-50' : 'surface-50'
                      }`}
                    >
                      <div className="flex align-items-center justify-content-between mb-2">
                        <div className="flex align-items-center gap-2">
                          <span className="font-medium text-sm">
                            {override?.header || fieldName}
                          </span>
                          {isApplied && !hasChanges && (
                            <i className="pi pi-check-circle text-green-600 text-xs" />
                          )}
                          {hasChanges && (
                            <i className="pi pi-clock text-orange-600 text-xs" />
                          )}
                        </div>
                        <Button
                          icon="pi pi-times"
                          className="p-button-text p-button-sm p-button-rounded"
                          onClick={() => removeFilterField(fieldName)}
                          tooltip="Remove filter"
                        />
                      </div>

                      <div className="flex flex-column gap-2">
                        <div>
                          <label className="text-xs text-700 block mb-1">Operator</label>
                          <Dropdown
                            value={filter.operator}
                            options={getOperatorsForType(filterType)}
                            optionLabel="label"
                            optionValue="value"
                            onChange={(e) => updateFilter(fieldName, { operator: e.value })}
                            className="w-full"
                            tooltip={FILTER_OPERATORS.find(op => op.value === filter.operator)?.description}
                          />
                        </div>

                        <div>
                          <label className="text-xs text-700 block mb-1">Value</label>
                          {renderFilterInput(fieldName, filter)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          {(hasPendingChanges || hasActiveFilters) && (
            <>
              <Divider />
              <div className="flex gap-2">
                {hasActiveFilters && (
                  <Button
                    label="Clear All"
                    icon="pi pi-times"
                    className="p-button-outlined p-button-sm flex-1"
                    onClick={onClearFilters}
                    tooltip="Clear all filters"
                  />
                )}
                {hasPendingChanges && (
                  <Button
                    label="Apply Filters"
                    icon="pi pi-check"
                    className="p-button-sm flex-1"
                    onClick={onApplyFilters}
                    disabled={loading}
                    tooltip="Apply staged changes"
                  />
                )}
              </div>
            </>
          )}

          {/* Status Information */}
          {(hasActiveFilters || hasPendingChanges) && (
            <div className="text-xs text-500 pt-2 border-top-1 surface-border">
              {hasActiveFilters && (
                <div>✓ {Object.keys(appliedFilters).length} filter{Object.keys(appliedFilters).length !== 1 ? 's' : ''} applied</div>
              )}
              {hasPendingChanges && (
                <div>⏳ {Math.abs(Object.keys(stagedFilters).length - Object.keys(appliedFilters).length)} pending change{Math.abs(Object.keys(stagedFilters).length - Object.keys(appliedFilters).length) !== 1 ? 's' : ''}</div>
              )}
            </div>
          )}
        </div>
      </Panel>
    </div>
  );
}