import { ProgressSpinner as PrimeProgressSpinner } from 'primereact/progressspinner';
import type { ProgressSpinnerProps as PrimeProgressSpinnerProps } from 'primereact/progressspinner';

export interface ProgressSpinnerProps extends PrimeProgressSpinnerProps {
  // Add custom props if needed
}

export const ProgressSpinner: React.FC<ProgressSpinnerProps> = (props) => {
  return <PrimeProgressSpinner {...props} />;
};