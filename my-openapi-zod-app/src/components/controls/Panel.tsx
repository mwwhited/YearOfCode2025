/**
 * Panel Control - Wrapped PrimeReact Panel
 */

import React from 'react';
import { Panel as PrimePanel } from 'primereact/panel';
import type { PanelProps as PrimePanelProps } from 'primereact/panel';

interface PanelProps extends PrimePanelProps {
  // Add any custom props here
}

export const Panel: React.FC<PanelProps> = (props) => {
  return <PrimePanel {...props} />;
};