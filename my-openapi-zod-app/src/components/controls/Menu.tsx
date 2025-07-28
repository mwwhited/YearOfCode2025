import React from 'react';
import { Menu as PrimeMenu } from 'primereact/menu';
import type { MenuProps as PrimeMenuProps } from 'primereact/menu';

export interface MenuProps extends PrimeMenuProps {
  // Add custom props if needed
}

// Export the PrimeMenu type for ref usage
export type { Menu as PrimeMenuType } from 'primereact/menu';

export const Menu = React.forwardRef<PrimeMenu, MenuProps>((props, ref) => {
  return <PrimeMenu ref={ref} {...props} />;
});