import { Chart as PrimeChart } from 'primereact/chart';
import type { ChartProps as PrimeChartProps } from 'primereact/chart';

export interface ChartProps extends PrimeChartProps {
  // Add custom props if needed
}

export const Chart: React.FC<ChartProps> = (props) => {
  return <PrimeChart {...props} />;
};