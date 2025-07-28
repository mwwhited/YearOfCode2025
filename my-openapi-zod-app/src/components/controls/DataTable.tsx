import React from 'react';
import { DataTable as PrimeDataTable } from 'primereact/datatable';

export interface DataTableProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export const DataTable: React.FC<DataTableProps> = ({ children, ...props }) => {
  return <PrimeDataTable {...props}>{children}</PrimeDataTable>;
};