import { OverlayPanel as PrimeOverlayPanel } from 'primereact/overlaypanel';
import type { OverlayPanelProps as PrimeOverlayPanelProps } from 'primereact/overlaypanel';

interface OverlayPanelProps extends PrimeOverlayPanelProps {
  // Custom props can be added here
}

export const OverlayPanel: React.FC<OverlayPanelProps> = (props) => {
  return <PrimeOverlayPanel {...props} />;
};