import { lazy, Suspense } from 'react';
import { ProgressSpinner } from './ProgressSpinner';
import type { ChartProps as PrimeChartProps } from 'primereact/chart';

export interface ChartProps extends PrimeChartProps {
  // Add custom props if needed
}

// Lazy load the Chart component to reduce initial bundle size
const LazyChart = lazy(async () => {
  const { Chart: PrimeChart } = await import('primereact/chart');
  return {
    default: (props: ChartProps) => <PrimeChart {...props} />
  };
});

export const Chart: React.FC<ChartProps> = (props) => {
  return (
    <Suspense fallback={
      <div className="flex align-items-center justify-content-center" style={{ minHeight: '200px' }}>
        <ProgressSpinner />
      </div>
    }>
      <LazyChart {...props} />
    </Suspense>
  );
};