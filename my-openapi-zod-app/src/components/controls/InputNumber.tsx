import { InputNumber as PrimeInputNumber } from 'primereact/inputnumber';
import type { InputNumberProps as PrimeInputNumberProps } from 'primereact/inputnumber';

interface InputNumberProps extends PrimeInputNumberProps {
  // Custom props can be added here
}

export const InputNumber: React.FC<InputNumberProps> = (props) => {
  return <PrimeInputNumber {...props} />;
};