import { MultiSelect as PrimeMultiSelect } from 'primereact/multiselect';
import type { MultiSelectProps as PrimeMultiSelectProps } from 'primereact/multiselect';

interface MultiSelectProps extends PrimeMultiSelectProps {
  // Custom props can be added here
}

export const MultiSelect: React.FC<MultiSelectProps> = (props) => {
  return <PrimeMultiSelect {...props} />;
};