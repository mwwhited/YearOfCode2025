import { DataTable as PrimeDataTable } from 'primereact/datatable';
import type { DataTableProps as PrimeDataTableProps } from 'primereact/datatable';

export interface DataTableProps extends PrimeDataTableProps {
  // Add custom props if needed
}

export const DataTable: React.FC<DataTableProps> = (props) => {
  return <PrimeDataTable {...props} />;
};