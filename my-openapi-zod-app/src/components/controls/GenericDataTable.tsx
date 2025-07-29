import { useState, useEffect } from "react";
import { DataTable, Column, InputText, Dropdown, ProgressSpinner } from './';
import type { DataTableFilterMeta } from "primereact/datatable";
import { z, ZodObject, type ZodRawShape } from "zod";

type GenericDataTableProps<T extends ZodObject<ZodRawShape>> = {
  schema: T;
  data?: z.infer<T>[];
  columnOverrides?: Partial<Record<keyof z.infer<T>, { header?: string }>>;
  client?: {
    Query: (params: { body?: any }) => Promise<{ rows?: z.infer<T>[] | null } | undefined>;
  };
  actionColumn?: {
    header?: string;
    body: (rowData: z.infer<T>) => React.ReactNode;
    style?: React.CSSProperties;
  };
};

export function GenericDataTable<T extends ZodObject<ZodRawShape>>({
  schema,
  data: initialData,
  columnOverrides = {},
  client,
  actionColumn,
}: GenericDataTableProps<T>) {
  const [filters, setFilters] = useState<DataTableFilterMeta>({});
  const [globalFilter, setGlobalFilter] = useState("");
  const [data, setData] = useState<z.infer<T>[]>(initialData || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load data from client if provided
  useEffect(() => {
    if (client && !initialData) {
      const loadData = async () => {
        setLoading(true);
        setError(null);
        try {
          const result = await client.Query({ body: {} });
          if (result && result.rows && Array.isArray(result.rows)) {
            setData(result.rows);
          } else {
            setData([]);
          }
        } catch (err) {
          console.error('Error loading data:', err);
          setError(err instanceof Error ? err.message : 'Failed to load data');
          setData([]);
        } finally {
          setLoading(false);
        }
      };
      
      loadData();
    }
  }, [client, initialData]);

  const shape = schema.shape;

  const renderFilter = (field: string, zodType: any) => {
    if (zodType instanceof z.ZodBoolean) {
      return (options: any) => (
        <Dropdown
          value={options.value}
          options={[
            { label: "True", value: true },
            { label: "False", value: false },
          ]}
          onChange={(e) => options.filterApplyCallback(e.value)}
          placeholder="Select"
          className="p-column-filter"
        />
      );
    }

    return (options: any) => (
      <InputText
        value={options.value || ""}
        onChange={(e) => options.filterApplyCallback(e.target.value)}
        className="p-column-filter"
        placeholder={`Search ${field}`}
      />
    );
  };

  if (loading) {
    return (
      <div className="card">
        <div className="flex justify-center align-items-center p-4">
          <ProgressSpinner />
          <span className="ml-2">Loading data...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card">
        <div className="p-4 text-center">
          <i className="pi pi-exclamation-triangle text-red-500 text-2xl mb-2"></i>
          <p className="text-red-500">Error loading data: {error}</p>
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

  return (
    <div className="card">
      <DataTable
        value={data}
        filters={filters}
        onFilter={(e: any) => setFilters(e.filters)}
        paginator
        rows={10}
        resizableColumns
        reorderableColumns
        globalFilterFields={Object.keys(shape)}
        globalFilter={globalFilter}
        emptyMessage="No data available"
        header={
          <div className="flex justify-content-between align-items-center">
            <div className="text-lg font-medium">
              {data.length} record{data.length !== 1 ? 's' : ''} found
            </div>
            <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
                placeholder="Global Search"
              />
            </span>
          </div>
        }
      >
        {Object.entries(shape).map(([key, zodType]) => {
          const override = columnOverrides[key as keyof typeof shape] || {};
          return (
            <Column
              key={key}
              field={key}
              header={override.header || key}
              sortable
              filter
              showFilterMenu={false}
              filterElement={renderFilter(key, zodType)}
              filterField={key}
              filterMatchMode="contains"
            />
          );
        })}
        {actionColumn && (
          <Column
            header={actionColumn.header || 'Actions'}
            body={actionColumn.body}
            style={actionColumn.style || { width: '120px' }}
            frozen
            alignFrozen="right"
          />
        )}
      </DataTable>
    </div>
  );
}
