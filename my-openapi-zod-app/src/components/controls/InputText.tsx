import { InputText as PrimeInputText } from 'primereact/inputtext';
import type { InputTextProps as PrimeInputTextProps } from 'primereact/inputtext';

export interface InputTextProps extends PrimeInputTextProps {
  // Add custom props if needed
}

export const InputText: React.FC<InputTextProps> = (props) => {
  return <PrimeInputText {...props} />;
};