import type { ZodObject, ZodRawShape } from 'zod';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef,
} from '@tanstack/react-table';

type GenericDataGridProps<T extends Record<string, unknown>, S extends ZodRawShape> = {
  data: T[];
  schema: ZodObject<S>;
};

function GenericDataGrid<T extends Record<string, unknown>, S extends ZodRawShape>({ 
  data, 
  schema 
}: GenericDataGridProps<T, S>) {
  const shape = schema.shape;
  const columns: ColumnDef<T>[] = Object.keys(shape).map((key) => ({
    accessorKey: key as keyof T,
    header: key.charAt(0).toUpperCase() + key.slice(1),
    cell: ({ getValue }) => {
      const value = getValue();
      return value !== null && value !== undefined ? String(value) : '';
    },
  }));

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} style={{ border: '1px solid #ccc', padding: '8px', backgroundColor: '#f5f5f5' }}>
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
            <tr key={row.id}>
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
    </div>
  );
}

export default GenericDataGrid;

// Usage example:
// <GenericDataGrid<User, typeof userSchema.shape> data={users} schema={userSchema} />
