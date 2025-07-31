import { useState, useEffect, useCallback, useRef } from "react";
import { DataTable, Column, InputText, Dropdown, Button } from './';
import { AdvancedColumnFilter, type FilterRule } from './AdvancedColumnFilter';
import { SidebarFilterEditor } from './SidebarFilterEditor';
import { ExportModal } from '../ExportModal';
import type { DataTableFilterMeta } from "primereact/datatable";
import { z } from "zod";
import type { ZodObject, ZodRawShape } from "zod";

// Types for API search functionality
interface FilterParameter {
  eq?: unknown;
  neq?: unknown;
  in?: unknown[];
  gt?: unknown;
  gte?: unknown;
  lt?: unknown;
  lte?: unknown;
}

interface SearchQuery {
  currentPage?: number;
  pageSize?: number;
  excludePageCount?: boolean;
  searchTerm?: string;
  filter?: Record<string, FilterParameter>;
  orderBy?: Record<string, 'asc' | 'desc'>;
}

interface PagedResult<T> {
  rows?: T[] | null;
  currentPage?: number;
  totalPageCount?: number;
  totalRowCount?: number;
  messages?: any[];
}

type GenericDataTableProps<T extends ZodObject<ZodRawShape>> = {
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
    Query: (params: { body?: SearchQuery }) => Promise<PagedResult<z.infer<T>> | undefined>;
  };
  actionColumn?: {
    header?: string;
    body: (rowData: z.infer<T>) => React.ReactNode;
    style?: React.CSSProperties;
  };
  // Advanced features
  enableServerSide?: boolean;
  defaultPageSize?: number;
  defaultSortField?: string;
  defaultSortOrder?: 'asc' | 'desc';
  enableGlobalSearch?: boolean;
  enableColumnFilters?: boolean; // Basic input filters below column headers
  enableAdvancedFilters?: boolean; // Advanced filter buttons in column headers with flyout panels
  enableSidebarFilters?: boolean; // Sidebar filter editor panel
  enableExport?: boolean; // Export functionality
};

export function GenericDataTable<T extends ZodObject<ZodRawShape>>({
  schema,
  data: initialData,
  columnOverrides = {},
  client,
  actionColumn,
  enableServerSide = false,
  defaultPageSize = 10,
  defaultSortField,
  defaultSortOrder = 'asc',
  enableGlobalSearch = true,
  enableColumnFilters = true,
  enableAdvancedFilters = false,
  enableSidebarFilters = false,
  enableExport = false,
}: GenericDataTableProps<T>) {
  // Client-side filtering state
  const [filters, setFilters] = useState<DataTableFilterMeta>({});
  const [globalFilter, setGlobalFilter] = useState("");
  
  // Data state
  const [data, setData] = useState<z.infer<T>[]>(initialData || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Server-side state
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [totalRecords, setTotalRecords] = useState(0);
  const [sortField, setSortField] = useState<string | undefined>(defaultSortField);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>(defaultSortOrder);
  const [serverFilters, setServerFilters] = useState<Record<string, FilterParameter>>({});
  const [searchTerm, setSearchTerm] = useState("");
  
  // Search term operator state
  const [searchOperator, setSearchOperator] = useState<'equal' | 'contains' | 'startsWith' | 'endsWith'>('contains');
  
  // Advanced filter state - separate staging from applied filters
  const [stagedAdvancedFilters, setStagedAdvancedFilters] = useState<Record<string, FilterRule>>({});
  const [appliedAdvancedFilters, setAppliedAdvancedFilters] = useState<Record<string, FilterRule>>({});
  
  // Sidebar filter state
  const [sidebarFilterOpen, setSidebarFilterOpen] = useState(false);
  
  // Export state
  const [exportModalVisible, setExportModalVisible] = useState(false);
  
  // Debounce search term
  const searchTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // Load data function
  const loadData = useCallback(async (searchQuery?: Partial<SearchQuery>) => {
    if (!client) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // Format search term based on operator
      const formatSearchTerm = (term: string, operator: string): string => {
        if (!term) return term;
        
        switch (operator) {
          case 'equal':
            return term; // "{searchTerm}"
          case 'contains':
            return `*${term}*`; // "*{searchTerm}*"
          case 'startsWith':
            return `${term}*`; // "{searchTerm}*"
          case 'endsWith':
            return `*${term}`; // "*{searchTerm}"
          default:
            return term;
        }
      };
      
      const formattedSearchTerm = searchTerm ? formatSearchTerm(searchTerm, searchOperator) : undefined;
      
      // Combine regular server filters with advanced filters
      const combinedFilters: Record<string, FilterParameter> = { ...serverFilters };
      
      // Convert applied advanced filters to API format
      Object.values(appliedAdvancedFilters).forEach(rule => {
        if (rule.value !== null && rule.value !== undefined && rule.value !== '') {
          // Map advanced filter operators to API operators
          const getApiOperator = (operator: string): keyof FilterParameter => {
            switch (operator) {
              case 'eq': return 'eq';
              case 'neq': return 'neq';
              case 'gt': return 'gt';
              case 'gte': return 'gte';
              case 'lt': return 'lt';
              case 'lte': return 'lte';
              case 'in': return 'in';
              default: return 'eq';
            }
          };
          
          const apiOperator = getApiOperator(rule.operator);
          combinedFilters[rule.field] = {
            [apiOperator]: rule.value
          };
        }
      });
      
      const query: SearchQuery = enableServerSide ? {
        currentPage,
        pageSize,
        excludePageCount: false,
        searchTerm: formattedSearchTerm,
        filter: Object.keys(combinedFilters).length > 0 ? combinedFilters : undefined,
        orderBy: sortField ? { [sortField]: sortOrder } : undefined,
        ...searchQuery,
      } : {};
      
      const result = await client.Query({ body: query });
      
      if (result && result.rows && Array.isArray(result.rows)) {
        // Only update data after successful load - no blanking/flashing
        setData(result.rows);
        if (enableServerSide && result.totalRowCount !== undefined) {
          setTotalRecords(result.totalRowCount);
        }
      } else {
        // Only clear data if this is the initial load or if there was no previous data
        if (data.length === 0) {
          setData([]);
          setTotalRecords(0);
        }
      }
    } catch (err) {
      console.error('Error loading data:', err);
      setError(err instanceof Error ? err.message : 'Failed to load data');
      // Don't clear existing data on error - keep previous data visible
      if (data.length === 0) {
        setData([]);
        setTotalRecords(0);
      }
    } finally {
      setLoading(false);
    }
  }, [client, enableServerSide, currentPage, pageSize, searchTerm, serverFilters, sortField, sortOrder, appliedAdvancedFilters, searchOperator, data.length]);
  
  // Load data on mount and when dependencies change
  useEffect(() => {
    if (client && !initialData) {
      loadData();
    }
  }, [loadData, client, initialData]);
  
  // Debounced search effect
  useEffect(() => {
    if (!enableServerSide || !client) return;
    
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    
    searchTimeoutRef.current = setTimeout(() => {
      setCurrentPage(0); // Reset to first page on search
      loadData();
    }, 500);
    
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchTerm, searchOperator, enableServerSide, client, loadData]);

  const shape = schema.shape;

  // Handle server-side pagination
  const onPage = (event: { page?: number; rows?: number }) => {
    if (!enableServerSide) return;
    
    setCurrentPage(event.page || 0);
    setPageSize(event.rows || defaultPageSize);
  };
  
  // Handle server-side sorting
  const onSort = (event: { sortField?: string; sortOrder?: number }) => {
    if (!enableServerSide) return;
    
    setSortField(event.sortField || undefined);
    setSortOrder(event.sortOrder === 1 ? 'asc' : 'desc');
  };
  
  // Convert filter operator to API format
  const convertFilterOperator = (operator: string): keyof FilterParameter => {
    switch (operator) {
      case 'equals': return 'eq';
      case 'notEquals': return 'neq';
      case 'in': return 'in';
      case 'greaterThan': return 'gt';
      case 'greaterThanOrEqual': return 'gte';
      case 'lessThan': return 'lt';
      case 'lessThanOrEqual': return 'lte';
      case 'contains':
      case 'startsWith':
      case 'endsWith':
      default:
        return 'eq'; // Default to equals for text searches
    }
  };
  
  // Handle server-side filtering
  const onFilter = (event: { filters: DataTableFilterMeta }) => {
    if (!enableServerSide) {
      setFilters(event.filters);
      return;
    }
    
    const newServerFilters: Record<string, FilterParameter> = {};
    
    Object.entries(event.filters).forEach(([fieldName, filterMeta]) => {
      if (filterMeta && 'value' in filterMeta && filterMeta.value !== null && filterMeta.value !== undefined && filterMeta.value !== '') {
        const operator = convertFilterOperator(filterMeta.matchMode || 'equals');
        newServerFilters[fieldName] = {
          [operator]: filterMeta.value
        };
      }
    });
    
    setServerFilters(newServerFilters);
    setCurrentPage(0); // Reset to first page on filter change
  };
  
  // Advanced filter handlers
  const handleAdvancedFilterChange = (field: string, filter: FilterRule | null) => {
    setStagedAdvancedFilters(prev => {
      const newFilters = { ...prev };
      if (filter) {
        newFilters[field] = filter;
      } else {
        delete newFilters[field];
      }
      return newFilters;
    });
  };

  const handleAdvancedFilterApply = () => {
    // This is called from individual filter panels but doesn't apply immediately
    // The actual apply happens when user clicks the main Apply button
  };

  const applyAllFilters = () => {
    setAppliedAdvancedFilters(stagedAdvancedFilters);
    if (enableServerSide) {
      setCurrentPage(0); // Reset to first page on filter change
      // loadData will be triggered by the useEffect dependency change
    }
  };

  const clearAllAdvancedFilters = () => {
    setStagedAdvancedFilters({});
    setAppliedAdvancedFilters({});
    if (enableServerSide) {
      setCurrentPage(0);
      // loadData will be triggered by the useEffect dependency change
    }
  };

  // Calculate if there are pending filter changes
  const hasPendingFilterChanges = JSON.stringify(stagedAdvancedFilters) !== JSON.stringify(appliedAdvancedFilters);
  const hasActiveAdvancedFilters = Object.keys(appliedAdvancedFilters).length > 0;
  
  const renderFilter = (field: string, zodType: any, columnConfig?: { filterType?: string; dropdownOptions?: { label: string; value: unknown }[] }) => {
    const filterType = columnConfig?.filterType || 'text';
    
    if (filterType === 'dropdown' && columnConfig?.dropdownOptions) {
      return (options: { value: unknown; filterApplyCallback: (value: unknown) => void }) => (
        <Dropdown
          value={options.value}
          options={[
            { label: 'All', value: null },
            ...(columnConfig.dropdownOptions || [])
          ]}
          onChange={(e) => options.filterApplyCallback(e.value)}
          placeholder="Select"
          className="p-column-filter"
        />
      );
    }
    
    if (zodType instanceof z.ZodBoolean || filterType === 'boolean') {
      return (options: { value: unknown; filterApplyCallback: (value: unknown) => void }) => (
        <Dropdown
          value={options.value}
          options={[
            { label: "All", value: null },
            { label: "True", value: true },
            { label: "False", value: false },
          ]}
          onChange={(e) => options.filterApplyCallback(e.value)}
          placeholder="Select"
          className="p-column-filter"
        />
      );
    }

    return (options: { value: string; filterApplyCallback: (value: string) => void }) => (
      <InputText
        value={options.value || ""}
        onChange={(e) => options.filterApplyCallback(e.target.value)}
        className="p-column-filter"
        placeholder={`Search ${field}`}
        type={filterType === 'number' ? 'number' : 'text'}
      />
    );
  };

  // Remove the loading screen replacement - we'll show subtle indicators instead

  if (error) {
    return (
      <div className="card">
        <div className="p-4 text-center">
          <i className="pi pi-exclamation-triangle text-red-600 text-2xl mb-2"></i>
          <p className="text-red-600">Error loading data: {error}</p>
          <button 
            className="p-button p-button-text"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const totalRecordsDisplay = enableServerSide ? totalRecords : data.length;
  const currentSearchValue = enableServerSide ? searchTerm : globalFilter;
  
  return (
    <div className="flex gap-3 h-full" style={{ maxWidth: '100%', overflow: 'hidden' }}>
      {/* Sidebar Filter Editor */}
      {enableSidebarFilters && sidebarFilterOpen && (
        <div style={{ flexShrink: 0 }}>
          <SidebarFilterEditor
            schema={schema}
            columnOverrides={columnOverrides}
            isOpen={sidebarFilterOpen}
            onToggle={() => setSidebarFilterOpen(!sidebarFilterOpen)}
            stagedFilters={stagedAdvancedFilters}
            appliedFilters={appliedAdvancedFilters}
            onFilterChange={handleAdvancedFilterChange}
            onApplyFilters={applyAllFilters}
            onClearFilters={clearAllAdvancedFilters}
            loading={loading}
          />
        </div>
      )}
      
      {/* Main DataTable Content */}
      <div className="card h-full flex-1" style={{ maxWidth: '100%', overflow: 'hidden' }}>
        {/* Thin loading progress bar */}
        {loading && (
          <div className="relative">
            <div 
              className="absolute top-0 left-0 h-1 bg-primary-500 transition-all duration-300"
              style={{ 
                width: '100%',
                animation: 'progress-bar 1.5s ease-in-out infinite',
                zIndex: 1000
              }}
            />
          </div>
        )}
      
      {/* Fixed header outside the scrollable area */}
      <div className="p-3 border-bottom-1 surface-border" style={{ position: 'relative' }}>
        <div className="flex justify-content-between align-items-center flex-wrap gap-2">
          <div className="text-lg font-medium">
            {totalRecordsDisplay} record{totalRecordsDisplay !== 1 ? 's' : ''} found
            {loading && (
              <i className="pi pi-spin pi-spinner text-sm text-600 ml-2" style={{ fontSize: '0.875rem' }} />
            )}
            {enableServerSide && searchTerm && (
              <span className="text-sm text-600 ml-2">
                (filtered for "{searchTerm}")
              </span>
            )}
            {hasActiveAdvancedFilters && (
              <span className="text-sm text-green-600 ml-2">
                • {Object.keys(appliedAdvancedFilters).length} filter{Object.keys(appliedAdvancedFilters).length !== 1 ? 's' : ''} active
              </span>
            )}
            {hasPendingFilterChanges && (
              <span className="text-sm text-orange-600 ml-2">
                • {Object.keys(stagedAdvancedFilters).length - Object.keys(appliedAdvancedFilters).length} pending change{Math.abs(Object.keys(stagedAdvancedFilters).length - Object.keys(appliedAdvancedFilters).length) !== 1 ? 's' : ''}
              </span>
            )}
          </div>
          <div className="flex gap-2 align-items-center">
            {enableGlobalSearch && (
              <div className="flex gap-2 align-items-center">
                {enableServerSide && (
                  <Dropdown
                    value={searchOperator}
                    options={[
                      { label: 'Contains', value: 'contains' },
                      { label: 'Equal To', value: 'equal' },
                      { label: 'Starts With', value: 'startsWith' },
                      { label: 'Ends With', value: 'endsWith' }
                    ]}
                    onChange={(e) => {
                      setSearchOperator(e.value);
                      if (searchTerm) {
                        setCurrentPage(0);
                        // Trigger search with new operator
                        if (searchTimeoutRef.current) {
                          clearTimeout(searchTimeoutRef.current);
                        }
                        searchTimeoutRef.current = setTimeout(() => {
                          loadData();
                        }, 100);
                      }
                    }}
                    className="w-9rem"
                    tooltip="Search type"
                  />
                )}
                <span className="p-input-icon-left">
                  <i className="pi pi-search" />
                  <InputText
                    value={currentSearchValue}
                    onChange={(e) => enableServerSide ? setSearchTerm(e.target.value) : setGlobalFilter(e.target.value)}
                    placeholder={enableServerSide ? 
                      `${searchOperator === 'equal' ? 'Find exact match...' : 
                        searchOperator === 'contains' ? 'Search all fields...' :
                        searchOperator === 'startsWith' ? 'Find items starting with...' :
                        'Find items ending with...'}` : 
                      "Global Search"}
                    className="w-20rem"
                  />
                </span>
              </div>
            )}
            {enableSidebarFilters && (
              <Button
                icon="pi pi-filter"
                label={sidebarFilterOpen ? "Hide Filters" : "Show Filters"}
                className={`p-button-outlined p-button-sm ${sidebarFilterOpen ? 'p-button-info' : ''}`}
                onClick={() => setSidebarFilterOpen(!sidebarFilterOpen)}
                badge={hasActiveAdvancedFilters ? String(Object.keys(appliedAdvancedFilters).length) : undefined}
                tooltip="Toggle sidebar filter editor"
              />
            )}
            {enableExport && (
              <Button
                icon="pi pi-download"
                label="Export"
                className="p-button-outlined p-button-sm"
                onClick={() => setExportModalVisible(true)}
                tooltip="Export Data"
                disabled={data.length === 0}
              />
            )}
            {enableAdvancedFilters && (hasActiveAdvancedFilters || hasPendingFilterChanges) && (
              <div className="flex gap-2">
                {hasActiveAdvancedFilters && (
                  <Button
                    label="Clear Filters"
                    icon="pi pi-times"
                    className="p-button-outlined p-button-sm"
                    onClick={clearAllAdvancedFilters}
                    tooltip="Clear all advanced filters"
                  />
                )}
                {hasPendingFilterChanges && (
                  <Button
                    label="Apply Filters"
                    icon="pi pi-check"
                    className="p-button-sm"
                    onClick={applyAllFilters}
                    tooltip="Apply staged filter changes"
                    disabled={loading}
                  />
                )}
              </div>
            )}
            {enableServerSide && (
              <Button
                icon={loading ? "pi pi-spin pi-spinner" : "pi pi-refresh"}
                className="p-button-outlined"
                onClick={() => loadData()}
                tooltip={loading ? "Loading..." : "Refresh data"}
                disabled={loading}
              />
            )}
          </div>
        </div>
      </div>
      
      {/* Scrollable table container */}
      <div className="overflow-auto" style={{ maxHeight: 'calc(100vh - 250px)', maxWidth: '100%' }}>
        <DataTable
        className={loading ? 'loading-overlay' : ''}
        value={data}
        filters={filters}
        onFilter={onFilter}
        // Server-side pagination
        lazy={enableServerSide}
        paginator
        rows={pageSize}
        totalRecords={enableServerSide ? totalRecords : undefined}
        onPage={enableServerSide ? onPage : undefined}
        first={enableServerSide ? currentPage * pageSize : undefined}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        // Server-side sorting
        sortMode={enableServerSide ? 'single' : 'multiple'}
        onSort={enableServerSide ? onSort : undefined}
        sortField={enableServerSide ? sortField : undefined}
        sortOrder={enableServerSide ? (sortOrder === 'asc' ? 1 : -1) : undefined}
        // Other features
        resizableColumns
        reorderableColumns
        globalFilterFields={enableServerSide ? undefined : Object.keys(shape)}
        globalFilter={enableServerSide ? undefined : globalFilter}
        emptyMessage={loading ? "Loading..." : "No data available"}
        scrollable
        scrollHeight="flex"
      >
        {actionColumn && (
          <Column
            header={actionColumn.header || 'Actions'}
            body={actionColumn.body}
            style={actionColumn.style || { width: '120px' }}
            frozen
            alignFrozen="right"
          />
        )}
        {Object.entries(shape).map(([key, zodType]) => {
          const override = columnOverrides[key as keyof typeof shape] || {};
          
          // Skip hidden columns
          if (override.hidden === true) {
            return null;
          }
          
          const isSortable = override.sortable !== false;
          const isFilterable = enableColumnFilters && override.filterable !== false;
          const hasAdvancedFilter = enableAdvancedFilters && override.filterable !== false;
          
          // Custom header with advanced filter button
          const customHeader = hasAdvancedFilter ? (
            <div className="flex align-items-center justify-content-between w-full">
              <span className="flex-grow-1">{override.header || key}</span>
              <div className="ml-2">
                <AdvancedColumnFilter
                  field={key}
                  header={override.header || key}
                  zodType={zodType}
                  columnConfig={override}
                  currentFilter={stagedAdvancedFilters[key]}
                  appliedFilter={appliedAdvancedFilters[key]}
                  onFilterChange={(filter) => handleAdvancedFilterChange(key, filter)}
                  onFilterApply={handleAdvancedFilterApply}
                />
              </div>
            </div>
          ) : (override.header || key);
          
          // Custom body function to handle complex objects
          const renderCellValue = (rowData: any) => {
            const value = rowData[key];
            
            // Handle null/undefined
            if (value === null || value === undefined) {
              return <span className="text-500">-</span>;
            }
            
            // Handle boolean values
            if (typeof value === 'boolean') {
              return (
                <span className={`pi ${value ? 'pi-check text-green-600' : 'pi-times text-red-600'}`} />
              );
            }
            
            // Handle dates
            if (value instanceof Date) {
              return value.toLocaleDateString();
            }
            
            // Handle complex objects - convert to JSON or show summary
            if (typeof value === 'object') {
              // For objects, show a summary or first few properties
              if (Array.isArray(value)) {
                return `[${value.length} items]`;
              } else {
                // Show object as JSON string (truncated)
                const jsonStr = JSON.stringify(value);
                return jsonStr.length > 50 ? `${jsonStr.substring(0, 47)}...` : jsonStr;
              }
            }
            
            // Handle primitive values
            return String(value);
          };

          return (
            <Column
              key={key}
              field={key}
              header={customHeader}
              body={renderCellValue}
              sortable={isSortable}
              filter={isFilterable}
              showFilterMenu={false}
              filterElement={isFilterable ? renderFilter(key, zodType, override) : undefined}
              filterField={key}
              filterMatchMode="contains"
            />
          );
        })}
        </DataTable>
      </div>
      </div>
      
      {/* Export Modal */}
      {enableExport && (
        <ExportModal
          visible={exportModalVisible}
          onHide={() => setExportModalVisible(false)}
          data={data}
          availableColumns={Object.keys((schema as any).shape || {})}
          columnOverrides={columnOverrides as Record<string, { header?: string; hidden?: boolean }>}
          defaultFilename={`export_${new Date().toISOString().split('T')[0]}`}
          title="Export Data"
        />
      )}
    </div>
  );
}
