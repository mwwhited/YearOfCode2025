import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/controls';
import { Card } from '@/components/controls';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex align-items-center justify-content-center min-h-screen p-4">
          <Card className="max-w-screen-sm">
            <div className="text-center">
              <i className="pi pi-exclamation-triangle text-6xl text-red-500 mb-4"></i>
              <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
              <p className="text-gray-600 mb-4">
                An unexpected error occurred. Please try refreshing the page.
              </p>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-left mb-4">
                  <summary className="cursor-pointer text-sm text-gray-500 mb-2">
                    Error details (development only)
                  </summary>
                  <pre className="text-xs bg-gray-100 p-2 border-round overflow-auto">
                    {this.state.error.toString()}
                    {this.state.errorInfo && this.state.errorInfo.componentStack}
                  </pre>
                </details>
              )}
              <div className="flex gap-2 justify-content-center">
                <Button
                  label="Refresh Page"
                  icon="pi pi-refresh"
                  onClick={() => window.location.reload()}
                />
                <Button
                  label="Try Again"
                  icon="pi pi-replay"
                  severity="secondary"
                  onClick={this.handleReset}
                />
              </div>
            </div>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}