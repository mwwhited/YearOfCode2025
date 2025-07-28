import { Toolbar as PrimeToolbar } from 'primereact/toolbar';
import type { ToolbarProps as PrimeToolbarProps } from 'primereact/toolbar';

export interface ToolbarProps extends PrimeToolbarProps {
  // Add custom props if needed
}

export const Toolbar: React.FC<ToolbarProps> = (props) => {
  return <PrimeToolbar {...props} />;
};