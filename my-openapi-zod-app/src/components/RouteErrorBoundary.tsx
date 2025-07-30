import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';
import { Button } from '@/components/controls';
import { Card } from '@/components/controls';

export function RouteErrorBoundary() {
  const error = useRouteError();
  
  let errorMessage: string;
  let statusCode: number | undefined;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || 'An error occurred';
    statusCode = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'An unknown error occurred';
  }

  return (
    <div className="flex align-items-center justify-content-center min-h-screen p-4">
      <Card className="max-w-screen-sm">
        <div className="text-center">
          <i className="pi pi-exclamation-circle text-6xl text-orange-500 mb-4"></i>
          {statusCode && (
            <h1 className="text-4xl font-bold mb-2">{statusCode}</h1>
          )}
          <h2 className="text-2xl font-bold mb-2">Oops! Page Error</h2>
          <p className="text-gray-600 mb-4">{errorMessage}</p>
          {process.env.NODE_ENV === 'development' && error instanceof Error && (
            <details className="text-left mb-4">
              <summary className="cursor-pointer text-sm text-gray-500 mb-2">
                Stack trace (development only)
              </summary>
              <pre className="text-xs bg-gray-100 p-2 border-round overflow-auto">
                {error.stack}
              </pre>
            </details>
          )}
          <div className="flex gap-2 justify-content-center">
            <Link to="/">
              <Button
                label="Go Home"
                icon="pi pi-home"
              />
            </Link>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              severity="secondary"
              onClick={() => window.history.back()}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}