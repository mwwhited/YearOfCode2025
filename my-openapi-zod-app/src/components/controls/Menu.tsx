import { Menu as PrimeMenu } from 'primereact/menu';
import type { MenuProps as PrimeMenuProps } from 'primereact/menu';

export interface MenuProps extends PrimeMenuProps {
  // Add custom props if needed
}

export const Menu: React.FC<MenuProps> = (props) => {
  return <PrimeMenu {...props} />;
};