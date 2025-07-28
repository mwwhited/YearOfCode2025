import { Dropdown as PrimeDropdown } from 'primereact/dropdown';
import type { DropdownProps as PrimeDropdownProps } from 'primereact/dropdown';

export interface DropdownProps extends PrimeDropdownProps {
  // Add custom props if needed
}

export const Dropdown: React.FC<DropdownProps> = (props) => {
  return <PrimeDropdown {...props} />;
};