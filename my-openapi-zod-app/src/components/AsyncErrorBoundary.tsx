import type { ReactNode } from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import { Button } from '@/components/controls';
import { Card } from '@/components/controls';
import { Message } from '@/components/controls';

interface AsyncErrorBoundaryProps {
  children: ReactNode;
  onRetry?: () => void;
  fallbackMessage?: string;
}

export function AsyncErrorBoundary({ 
  children, 
  onRetry,
  fallbackMessage = 'Failed to load data. Please try again.'
}: AsyncErrorBoundaryProps) {
  return (
    <ErrorBoundary
      fallback={
        <div className="p-4">
          <Card>
            <Message 
              severity="error" 
              text={fallbackMessage}
              className="mb-3"
            />
            {onRetry && (
              <Button
                label="Retry"
                icon="pi pi-refresh"
                onClick={onRetry}
                severity="secondary"
                size="small"
              />
            )}
          </Card>
        </div>
      }
    >
      {children}
    </ErrorBoundary>
  );
}