import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { InteractionRequiredAuthError } from '@azure/msal-browser';

export interface ErrorHandlerOptions {
  fallbackPath?: string;
  showToast?: boolean;
  onError?: (error: Error) => void;
}

export function useErrorHandler(options: ErrorHandlerOptions = {}) {
  const navigate = useNavigate();

  const handleError = useCallback((error: unknown) => {
    let errorMessage = 'An unexpected error occurred';
    let shouldNavigate = false;

    if (error instanceof InteractionRequiredAuthError) {
      errorMessage = 'Authentication required. Please sign in again.';
      shouldNavigate = true;
    } else if (error instanceof Error) {
      errorMessage = error.message;
      
      // Check for specific error types
      if (error.message.includes('Network') || error.message.includes('fetch')) {
        errorMessage = 'Network error. Please check your connection and try again.';
      } else if (error.message.includes('401') || error.message.includes('Unauthorized')) {
        errorMessage = 'You are not authorized to perform this action.';
        shouldNavigate = true;
      } else if (error.message.includes('403') || error.message.includes('Forbidden')) {
        errorMessage = 'Access denied. You do not have permission to view this resource.';
        shouldNavigate = true;
      } else if (error.message.includes('404') || error.message.includes('Not Found')) {
        errorMessage = 'The requested resource was not found.';
      } else if (error.message.includes('500') || error.message.includes('Server Error')) {
        errorMessage = 'Server error. Please try again later.';
      }
    }

    // Log error in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by useErrorHandler:', error);
    }

    // Call custom error handler if provided
    if (options.onError) {
      options.onError(error as Error);
    }

    // Navigate if needed
    if (shouldNavigate && options.fallbackPath) {
      navigate(options.fallbackPath);
    }

    // Return the processed error for further handling
    return {
      message: errorMessage,
      shouldNavigate,
      originalError: error
    };
  }, [navigate, options]);

  const wrapAsync = useCallback(<T extends any[], R>(
    asyncFn: (...args: T) => Promise<R>
  ) => {
    return async (...args: T): Promise<R | undefined> => {
      try {
        return await asyncFn(...args);
      } catch (error) {
        handleError(error);
        return undefined;
      }
    };
  }, [handleError]);

  return { handleError, wrapAsync };
}