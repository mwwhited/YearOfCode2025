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
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            {enableSorting ? (
              <button
                onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                className="bg-transparent border-none cursor-pointer flex items-center gap-1 text-inherit font-bold hover:text-blue-600 transition-colors"
              >
                {displayName}
                {column.getIsSorted() === 'asc' ? ' ↑' : column.getIsSorted() === 'desc' ? ' ↓' : ' ↕'}
              </button>
            ) : (
              <span className="font-bold">{displayName}</span>
            )}
          </div>
          {enableFiltering && (
            <input
              type="text"
              placeholder={`Filter ${displayName}...`}
              value={column.getFilterValue() as string ?? ''}
              onChange={(e) => column.setFilterValue(e.target.value)}
              className="w-full px-1 py-0.5 text-xs border border-gray-300 rounded"
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
    <div className="overflow-x-auto">
      {enableFiltering && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search all columns..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="w-72 p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <span className="ml-4 text-sm text-gray-600">
            Showing {table.getFilteredRowModel().rows.length} of {data.length} rows
          </span>
        </div>
      )}
      <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border border-gray-300 p-2 bg-gray-50 min-w-[120px] align-top font-semibold text-gray-700">
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
            <tr key={row.id} className={`${row.index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border border-gray-300 p-2 text-gray-800">
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
        <div className="text-center p-5 text-gray-600 italic bg-gray-50 rounded-lg">
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
