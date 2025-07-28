import { Checkbox as PrimeCheckbox } from 'primereact/checkbox';
import type { CheckboxProps as PrimeCheckboxProps } from 'primereact/checkbox';

export interface CheckboxProps extends PrimeCheckboxProps {
  // Add custom props if needed
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return <PrimeCheckbox {...props} />;
};