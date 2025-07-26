import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ErrorBoundary from '../ErrorBoundary'

// Test component that can throw errors
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error')
  }
  return <div>No error</div>
}

describe('ErrorBoundary [unit] [component]', () => {
  // Mock console.error to avoid noise in test output
  const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

  afterEach(() => {
    consoleSpy.mockClear()
  })

  afterAll(() => {
    consoleSpy.mockRestore()
  })

  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    )

    expect(screen.getByText('No error')).toBeInTheDocument()
  })

  it('renders error UI when child component throws', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument()
    expect(screen.getByText('Test error')).toBeInTheDocument()
    expect(screen.getByText('Try again')).toBeInTheDocument()
  })

  it('logs error to console when error occurs', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )

    expect(consoleSpy).toHaveBeenCalledWith(
      'Error boundary caught an error:',
      expect.any(Error),
      expect.any(Object)
    )
  })

  it('can recover from error state', () => {
    const { rerender } = render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )

    // Error state should be shown
    expect(screen.getByText('Something went wrong.')).toBeInTheDocument()

    // Click "Try again" button
    fireEvent.click(screen.getByText('Try again'))

    // Should clear error state
    rerender(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    )

    expect(screen.getByText('No error')).toBeInTheDocument()
    expect(screen.queryByText('Something went wrong.')).not.toBeInTheDocument()
  })

  it('handles errors without messages', () => {
    const ThrowErrorWithoutMessage = () => {
      throw new Error()
    }

    render(
      <ErrorBoundary>
        <ThrowErrorWithoutMessage />
      </ErrorBoundary>
    )

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument()
    // Should not show empty error message
    expect(screen.queryByText(/^$/)).not.toBeInTheDocument()
  })
})