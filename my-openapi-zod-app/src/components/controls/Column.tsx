import { Column as PrimeColumn } from 'primereact/column';
import type { ColumnProps as PrimeColumnProps } from 'primereact/column';

export interface ColumnProps extends PrimeColumnProps {
  // Add custom props if needed
}

export const Column: React.FC<ColumnProps> = (props) => {
  return <PrimeColumn {...props} />;
};