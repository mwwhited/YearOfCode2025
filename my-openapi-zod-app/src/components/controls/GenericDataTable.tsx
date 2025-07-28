import { useState } from "react";
import { DataTable, Column, InputText, Dropdown } from './';
import type { DataTableFilterMeta } from "primereact/datatable";
import { z, ZodObject, type ZodRawShape } from "zod";

type GenericDataTableProps<T extends ZodObject<ZodRawShape>> = {
  schema: T;
  data: z.infer<T>[];
  columnOverrides?: Partial<Record<keyof z.infer<T>, { header?: string }>>;
};

export function GenericDataTable<T extends ZodObject<ZodRawShape>>({
  schema,
  data,
  columnOverrides = {},
}: GenericDataTableProps<T>) {
  const [filters, setFilters] = useState<DataTableFilterMeta>({});
  const [globalFilter, setGlobalFilter] = useState("");

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
        header={
          <div className="flex justify-end">
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
      </DataTable>
    </div>
  );
}
