import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { z } from 'zod'
import GenericForm from '../GenericForm'

const userSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  age: z.number().min(0, 'Age must be positive'),
  active: z.boolean(),
})

type User = z.infer<typeof userSchema>

describe('GenericForm [unit] [component]', () => {
  it('renders form fields based on schema', () => {
    const mockSubmit = vi.fn()
    render(
      <GenericForm<User>
        schema={userSchema}
        onSubmit={mockSubmit}
      />
    )

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Age')).toBeInTheDocument()
    expect(screen.getByLabelText('Active')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
  })

  it('handles form submission with valid data', async () => {
    const mockSubmit = vi.fn()
    render(
      <GenericForm<User>
        schema={userSchema}
        onSubmit={mockSubmit}
      />
    )

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } })
    fireEvent.change(screen.getByLabelText('Age'), { target: { value: '30' } })
    fireEvent.click(screen.getByLabelText('Active'))

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }))

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com',
        age: 30,
        active: true,
      })
    })
  })

  it('shows validation errors for invalid data', async () => {
    const mockSubmit = vi.fn()
    render(
      <GenericForm<User>
        schema={userSchema}
        onSubmit={mockSubmit}
      />
    )

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'invalid-email' } })
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }))

    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument()
      expect(screen.getByText('Invalid email')).toBeInTheDocument()
    })

    expect(mockSubmit).not.toHaveBeenCalled()
  })

  it('clears errors when user starts typing', async () => {
    const mockSubmit = vi.fn()
    render(
      <GenericForm<User>
        schema={userSchema}
        onSubmit={mockSubmit}
      />
    )

    // Submit invalid form to show errors
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }))

    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument()
    })

    // Start typing in name field
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'J' } })

    // Error should be cleared
    await waitFor(() => {
      expect(screen.queryByText('Name is required')).not.toBeInTheDocument()
    })
  })

  it('handles initial data', () => {
    const mockSubmit = vi.fn()
    const initialData = { name: 'John', email: 'john@example.com', age: 25, active: true }
    
    render(
      <GenericForm<User>
        schema={userSchema}
        onSubmit={mockSubmit}
        initialData={initialData}
      />
    )

    expect(screen.getByDisplayValue('John')).toBeInTheDocument()
    expect(screen.getByDisplayValue('john@example.com')).toBeInTheDocument()
    expect(screen.getByDisplayValue('25')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('can be disabled', () => {
    const mockSubmit = vi.fn()
    render(
      <GenericForm<User>
        schema={userSchema}
        onSubmit={mockSubmit}
        disabled={true}
      />
    )

    expect(screen.getByLabelText('Name')).toBeDisabled()
    expect(screen.getByLabelText('Email')).toBeDisabled()
    expect(screen.getByLabelText('Age')).toBeDisabled()
    expect(screen.getByLabelText('Active')).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Submit' })).toBeDisabled()
  })

  it('shows loading state during submission', async () => {
    const mockSubmit = vi.fn(() => new Promise(resolve => setTimeout(resolve, 100)))
    render(
      <GenericForm<User>
        schema={userSchema}
        onSubmit={mockSubmit}
        initialData={{ name: 'John', email: 'john@example.com', age: 25, active: true }}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }))

    expect(screen.getByText('Submitting...')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeDisabled()

    await waitFor(() => {
      expect(screen.getByText('Submit')).toBeInTheDocument()
    })
  })
})