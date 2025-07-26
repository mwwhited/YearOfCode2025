import type { z } from 'zod';
import { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
} from '@tanstack/react-table';

type GenericDataGridProps<T extends Record<string, unknown>> = {
  data: T[];
  schema: z.ZodObject<any>;
  enableSorting?: boolean;
  enableFiltering?: boolean;
  pageSize?: number;
};

function GenericDataGrid<T extends Record<string, unknown>>({ 
  data, 
  schema,
  enableSorting = true,
  enableFiltering = true,
  pageSize = 10
}: GenericDataGridProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const shape = schema.shape;
  const columns: ColumnDef<T>[] = Object.keys(shape).map((key) => ({
    accessorKey: key as keyof T,
    header: ({ column }) => {
      const displayName = key.charAt(0).toUpperCase() + key.slice(1);
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {enableSorting ? (
              <button
                onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: 'inherit',
                  fontWeight: 'bold'
                }}
              >
                {displayName}
                {column.getIsSorted() === 'asc' ? ' ↑' : column.getIsSorted() === 'desc' ? ' ↓' : ' ↕'}
              </button>
            ) : (
              <span style={{ fontWeight: 'bold' }}>{displayName}</span>
            )}
          </div>
          {enableFiltering && (
            <input
              type="text"
              placeholder={`Filter ${displayName}...`}
              value={column.getFilterValue() as string ?? ''}
              onChange={(e) => column.setFilterValue(e.target.value)}
              style={{
                width: '100%',
                padding: '2px 4px',
                fontSize: '12px',
                border: '1px solid #ccc',
                borderRadius: '2px'
              }}
            />
          )}
        </div>
      );
    },
    cell: ({ getValue }) => {
      const value = getValue();
      if (value === null || value === undefined) return '';
      
      // Format datetime-like strings for better display
      if (typeof value === 'string' && (key.toLowerCase().includes('on') || key.toLowerCase().includes('date'))) {
        try {
          const date = new Date(value);
          if (!isNaN(date.getTime())) {
            return date.toLocaleString();
          }
        } catch (e) {
          // If date parsing fails, just return the string
        }
      }
      
      return String(value);
    },
    enableSorting,
    enableColumnFilter: enableFiltering,
  }));

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <div style={{ overflowX: 'auto' }}>
      {enableFiltering && (
        <div style={{ marginBottom: '16px' }}>
          <input
            type="text"
            placeholder="Search all columns..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            style={{
              width: '300px',
              padding: '8px',
              fontSize: '14px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          <span style={{ marginLeft: '16px', fontSize: '14px', color: '#666' }}>
            Showing {table.getFilteredRowModel().rows.length} of {data.length} rows
          </span>
        </div>
      )}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} style={{ 
                  border: '1px solid #ccc', 
                  padding: '8px', 
                  backgroundColor: '#f5f5f5',
                  minWidth: '120px',
                  verticalAlign: 'top'
                }}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} style={{ 
              backgroundColor: row.index % 2 === 0 ? '#fff' : '#f9f9f9'
            }}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} style={{ border: '1px solid #ccc', padding: '8px' }}>
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {table.getFilteredRowModel().rows.length === 0 && (
        <div style={{ 
          textAlign: 'center', 
          padding: '20px', 
          color: '#666',
          fontStyle: 'italic'
        }}>
          No data matches your filters
        </div>
      )}
    </div>
  );
}

export default GenericDataGrid;

// Usage examples:
// <GenericDataGrid<User> data={users} schema={userSchema} />
// <GenericDataGrid<User> data={users} schema={userSchema} enableSorting={true} enableFiltering={true} />
// <GenericDataGrid<User> data={users} schema={userSchema} enableSorting={false} enableFiltering={false} />
