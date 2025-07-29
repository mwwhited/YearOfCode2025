import { Divider as PrimeDivider } from 'primereact/divider';
import type { DividerProps as PrimeDividerProps } from 'primereact/divider';

interface DividerProps extends PrimeDividerProps {
  // Custom props can be added here
}

export const Divider: React.FC<DividerProps> = (props) => {
  return <PrimeDivider {...props} />;
};