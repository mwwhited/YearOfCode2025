import { useState, useRef, useEffect } from 'react';
import { 
  Button, 
  OverlayPanel, 
  InputText, 
  InputNumber, 
  Dropdown, 
  MultiSelect, 
  Calendar, 
  Divider 
} from './';
import { z } from 'zod';

// Filter operators mapping to API operators
type FilterOperator = {
  label: string;
  value: string;
  apiOperator: string;
  requiresPattern?: boolean;
  pattern?: string;
  noValue?: boolean;
  fixedValue?: unknown;
  allowMultiple?: boolean;
};

export const FILTER_OPERATORS: Record<string, FilterOperator[]> = {
  text: [
    { label: 'Contains', value: 'eq', apiOperator: 'eq', requiresPattern: true, pattern: '*{value}*' },
    { label: 'Equals', value: 'eq', apiOperator: 'eq' },
    { label: 'Not Equals', value: 'neq', apiOperator: 'neq' },
    { label: 'Starts With', value: 'eq', apiOperator: 'eq', requiresPattern: true, pattern: '{value}*' },
    { label: 'Ends With', value: 'eq', apiOperator: 'eq', requiresPattern: true, pattern: '*{value}' },
    { label: 'Is Empty', value: 'eq', apiOperator: 'eq', noValue: true, fixedValue: '' },
    { label: 'Is Not Empty', value: 'neq', apiOperator: 'neq', noValue: true, fixedValue: '' }
  ],
  number: [
    { label: 'Equals', value: 'eq', apiOperator: 'eq' },
    { label: 'Not Equals', value: 'neq', apiOperator: 'neq' },
    { label: 'Greater Than', value: 'gt', apiOperator: 'gt' },
    { label: 'Greater Than or Equal', value: 'gte', apiOperator: 'gte' },
    { label: 'Less Than', value: 'lt', apiOperator: 'lt' },
    { label: 'Less Than or Equal', value: 'lte', apiOperator: 'lte' },
    { label: 'Is Empty', value: 'eq', apiOperator: 'eq', noValue: true, fixedValue: null },
    { label: 'Is Not Empty', value: 'neq', apiOperator: 'neq', noValue: true, fixedValue: null }
  ],
  date: [
    { label: 'Equals', value: 'eq', apiOperator: 'eq' },
    { label: 'Not Equals', value: 'neq', apiOperator: 'neq' },
    { label: 'Before', value: 'lt', apiOperator: 'lt' },
    { label: 'Before or Equal', value: 'lte', apiOperator: 'lte' },
    { label: 'After', value: 'gt', apiOperator: 'gt' },
    { label: 'After or Equal', value: 'gte', apiOperator: 'gte' },
    { label: 'Is Empty', value: 'eq', apiOperator: 'eq', noValue: true, fixedValue: null },
    { label: 'Is Not Empty', value: 'neq', apiOperator: 'neq', noValue: true, fixedValue: null }
  ],
  boolean: [
    { label: 'Is True', value: 'eq', apiOperator: 'eq', noValue: true, fixedValue: true },
    { label: 'Is False', value: 'eq', apiOperator: 'eq', noValue: true, fixedValue: false },
    { label: 'Is Empty', value: 'eq', apiOperator: 'eq', noValue: true, fixedValue: null },
    { label: 'Is Not Empty', value: 'neq', apiOperator: 'neq', noValue: true, fixedValue: null }
  ],
  dropdown: [
    { label: 'Equals', value: 'eq', apiOperator: 'eq' },
    { label: 'Not Equals', value: 'neq', apiOperator: 'neq' },
    { label: 'In', value: 'in', apiOperator: 'in', allowMultiple: true },
    { label: 'Is Empty', value: 'eq', apiOperator: 'eq', noValue: true, fixedValue: null },
    { label: 'Is Not Empty', value: 'neq', apiOperator: 'neq', noValue: true, fixedValue: null }
  ]
};

export interface FilterRule {
  field: string;
  operator: string;
  value: unknown;
  type: 'text' | 'number' | 'date' | 'boolean' | 'dropdown';
  dropdownOptions?: { label: string; value: unknown }[];
}

export interface AdvancedColumnFilterProps {
  field: string;
  header: string;
  zodType: z.ZodTypeAny;
  columnConfig?: {
    filterType?: 'text' | 'number' | 'boolean' | 'date' | 'dropdown';
    dropdownOptions?: { label: string; value: unknown }[];
  };
  currentFilter?: FilterRule;
  appliedFilter?: FilterRule;
  onFilterChange: (filter: FilterRule | null) => void;
  onFilterApply: () => void;
}

export function AdvancedColumnFilter({
  field,
  header,
  zodType,
  columnConfig,
  currentFilter,
  appliedFilter,
  onFilterChange
}: AdvancedColumnFilterProps) {
  const overlayRef = useRef<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  
  // Determine filter type
  const getFilterType = (): 'text' | 'number' | 'date' | 'boolean' | 'dropdown' => {
    if (columnConfig?.filterType) return columnConfig.filterType;
    if (zodType instanceof z.ZodNumber) return 'number';
    if (zodType instanceof z.ZodBoolean) return 'boolean';
    if (zodType instanceof z.ZodDate) return 'date';
    if (columnConfig?.dropdownOptions) return 'dropdown';
    return 'text';
  };

  const filterType = getFilterType();
  const availableOperators = FILTER_OPERATORS[filterType];

  // Local filter state
  const [localFilter, setLocalFilter] = useState<FilterRule>(() => ({
    field,
    operator: availableOperators[0].value,
    value: null,
    type: filterType,
    dropdownOptions: columnConfig?.dropdownOptions
  }));

  // Update local filter when current filter changes
  useEffect(() => {
    if (currentFilter && currentFilter.field === field) {
      setLocalFilter(currentFilter);
    } else {
      setLocalFilter({
        field,
        operator: availableOperators[0].value,
        value: null,
        type: filterType,
        dropdownOptions: columnConfig?.dropdownOptions
      });
    }
  }, [currentFilter, field, filterType, availableOperators, columnConfig?.dropdownOptions]);

  const handleOperatorChange = (operator: string) => {
    const operatorConfig = availableOperators.find(op => op.value === operator);
    const newFilter = {
      ...localFilter,
      operator,
      value: operatorConfig?.noValue ? operatorConfig.fixedValue : 
             operatorConfig?.allowMultiple ? [] : null
    };
    setLocalFilter(newFilter);
  };

  const handleValueChange = (value: unknown) => {
    setLocalFilter({
      ...localFilter,
      value
    });
  };

  const handleStageFilter = () => {
    const operatorConfig = availableOperators.find(op => op.value === localFilter.operator);
    
    // Don't stage filter if value is required but not provided
    if (!operatorConfig?.noValue && (localFilter.value === null || localFilter.value === undefined || localFilter.value === '')) {
      return;
    }

    // Apply pattern transformation if needed
    let finalValue = localFilter.value;
    if (operatorConfig?.requiresPattern && operatorConfig.pattern && finalValue && typeof finalValue === 'string') {
      finalValue = operatorConfig.pattern.replace('{value}', finalValue);
    }

    const filterToStage: FilterRule = {
      ...localFilter,
      value: operatorConfig?.noValue ? operatorConfig.fixedValue : finalValue
    };

    onFilterChange(filterToStage);
    setIsOpen(false);
    overlayRef.current?.hide();
  };

  const handleClearFilter = () => {
    setLocalFilter({
      field,
      operator: availableOperators[0].value,
      value: null,
      type: filterType,
      dropdownOptions: columnConfig?.dropdownOptions
    });
    onFilterChange(null);
    setIsOpen(false);
    overlayRef.current?.hide();
  };

  const renderValueInput = () => {
    const operatorConfig = availableOperators.find(op => op.value === localFilter.operator);
    
    if (operatorConfig?.noValue) {
      return (
        <div className="text-sm text-600 italic">
          No value required for this operator
        </div>
      );
    }

    switch (filterType) {
      case 'text':
        return (
          <InputText
            value={(localFilter.value as string) || ''}
            onChange={(e) => handleValueChange(e.target.value)}
            placeholder={`Enter ${header.toLowerCase()}...`}
            className="w-full"
          />
        );

      case 'number':
        return (
          <InputNumber
            value={localFilter.value as number | null | undefined}
            onChange={(e) => handleValueChange(e.value)}
            placeholder={`Enter ${header.toLowerCase()}...`}
            className="w-full"
          />
        );

      case 'date':
        return (
          <Calendar
            value={localFilter.value as Date | null | undefined}
            onChange={(e) => handleValueChange(e.value)}
            placeholder={`Select ${header.toLowerCase()}...`}
            className="w-full"
            showIcon
          />
        );

      case 'boolean':
        return (
          <div className="text-sm text-600 italic">
            Value is determined by the operator
          </div>
        );

      case 'dropdown':
        if (operatorConfig?.allowMultiple) {
          return (
            <MultiSelect
              value={localFilter.value || []}
              options={columnConfig?.dropdownOptions || []}
              onChange={(e) => handleValueChange(e.value)}
              placeholder={`Select ${header.toLowerCase()}...`}
              className="w-full"
              display="chip"
            />
          );
        } else {
          return (
            <Dropdown
              value={localFilter.value}
              options={columnConfig?.dropdownOptions || []}
              onChange={(e) => handleValueChange(e.value)}
              placeholder={`Select ${header.toLowerCase()}...`}
              className="w-full"
            />
          );
        }

      default:
        return null;
    }
  };

  const hasStagedFilter = currentFilter && currentFilter.field === field;
  const hasAppliedFilter = appliedFilter && appliedFilter.field === field;
  const hasUnappliedChanges = JSON.stringify(currentFilter) !== JSON.stringify(appliedFilter);
  
  const operatorConfig = availableOperators.find(op => op.value === localFilter.operator);
  const canStage = operatorConfig?.noValue || localFilter.value !== null && localFilter.value !== undefined && localFilter.value !== '';

  // Determine button appearance based on filter state
  let buttonIcon = "pi pi-filter";
  let buttonClass = "p-button-text p-button-sm";
  let tooltipText = `Advanced filter for ${header}`;
  
  if (hasAppliedFilter && hasUnappliedChanges) {
    buttonIcon = "pi pi-filter-fill";
    buttonClass += " p-button-warning"; // Orange for pending changes
    tooltipText += " (has pending changes)";
  } else if (hasAppliedFilter) {
    buttonIcon = "pi pi-filter-fill";
    buttonClass += " p-button-success"; // Green for applied filter
    tooltipText += " (active)";
  } else if (hasStagedFilter) {
    buttonIcon = "pi pi-filter";
    buttonClass += " p-button-info"; // Blue for staged but not applied
    tooltipText += " (staged)";
  }

  return (
    <div className="advanced-column-filter">
      <Button
        icon={buttonIcon}
        className={buttonClass}
        onClick={(e) => {
          setIsOpen(!isOpen);
          overlayRef.current?.toggle(e);
        }}
        tooltip={tooltipText}
        tooltipOptions={{ position: 'top' }}
      />
      
      <OverlayPanel
        onShow={() => setIsOpen(true)}
        onHide={() => setIsOpen(false)}
        className="advanced-filter-panel"
        style={{ width: '350px' }}
      >
        <div className="p-3">
          <div className="mb-3">
            <h6 className="m-0 mb-2 text-primary">{header} Filter</h6>
            <small className="text-600">Configure advanced filtering options</small>
          </div>

          <Divider />

          <div className="field mb-3">
            <label className="text-sm font-medium text-900 mb-2 block">Operator</label>
            <Dropdown
              value={localFilter.operator}
              options={availableOperators.map(op => ({ label: op.label, value: op.value }))}
              onChange={(e) => handleOperatorChange(e.value)}
              className="w-full"
            />
          </div>

          <div className="field mb-4">
            <label className="text-sm font-medium text-900 mb-2 block">Value</label>
            {renderValueInput()}
          </div>

          <Divider />

          <div className="flex justify-content-between gap-2 pt-2">
            <Button
              label="Clear"
              icon="pi pi-times"
              className="p-button-text p-button-sm"
              onClick={handleClearFilter}
            />
            <div className="flex gap-2">
              <Button
                label="Cancel"
                className="p-button-outlined p-button-sm"
                onClick={() => {
                  setIsOpen(false);
                  overlayRef.current?.hide();
                }}
              />
              <Button
                label="Stage"
                icon="pi pi-check"
                className="p-button-sm"
                onClick={handleStageFilter}
                disabled={!canStage}
              />
            </div>
          </div>

          {/* Status display */}
          <div className="mt-2">
            {hasAppliedFilter && (
              <div className="p-2 bg-green-50 border-round text-sm mb-2">
                <strong>Applied:</strong> {header} {availableOperators.find(op => op.value === appliedFilter.operator)?.label} {
                  appliedFilter.value !== null && appliedFilter.value !== undefined 
                    ? Array.isArray(appliedFilter.value) 
                      ? `[${appliedFilter.value.join(', ')}]`
                      : String(appliedFilter.value)
                    : ''
                }
              </div>
            )}
            {hasStagedFilter && hasUnappliedChanges && (
              <div className="p-2 bg-yellow-50 border-round text-sm">
                <strong>Staged:</strong> {header} {availableOperators.find(op => op.value === currentFilter.operator)?.label} {
                  currentFilter.value !== null && currentFilter.value !== undefined 
                    ? Array.isArray(currentFilter.value) 
                      ? `[${currentFilter.value.join(', ')}]`
                      : String(currentFilter.value)
                    : ''
                } <em>(click "Apply Filters" to apply)</em>
              </div>
            )}
          </div>
        </div>
      </OverlayPanel>
    </div>
  );
}