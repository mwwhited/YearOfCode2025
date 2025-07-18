import type { ZodObject, ZodRawShape } from 'zod';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef,
} from '@tanstack/react-table';

type GenericDataGridProps<T> = {
  data: T[];
  schema: ZodObject<ZodRawShape>;
};

function GenericDataGrid<T>({ data, schema }: GenericDataGridProps<T>) {
  const shape = schema.shape;
  const columns: ColumnDef<T>[] = Object.keys(shape).map((key) => ({
    accessorKey: key,
    header: key.charAt(0).toUpperCase() + key.slice(1),
  }));

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
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
              <td key={cell.id}>
                {/* Use getValue() instead of raw accessorKey */}
                {flexRender(
                  cell.column.columnDef.cell ?? (() => cell.getValue()),
                  cell.getContext()
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GenericDataGrid;
