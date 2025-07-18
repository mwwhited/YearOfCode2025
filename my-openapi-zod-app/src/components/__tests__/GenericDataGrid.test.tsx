import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { z } from 'zod'
import GenericDataGrid from '../GenericDataGrid'

// Test schema and data
const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
})

type User = z.infer<typeof userSchema>

const testUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
]

describe('GenericDataGrid [unit] [component]', () => {
  it('renders table with correct headers', () => {
    render(<GenericDataGrid<User, typeof userSchema.shape> data={testUsers} schema={userSchema} />)
    
    expect(screen.getByText('Id')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('renders table data correctly', () => {
    render(<GenericDataGrid<User, typeof userSchema.shape> data={testUsers} schema={userSchema} />)
    
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('jane@example.com')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('renders empty table when no data provided', () => {
    render(<GenericDataGrid<User, typeof userSchema.shape> data={[]} schema={userSchema} />)
    
    expect(screen.getByText('Id')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    
    // No data rows should be present
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument()
  })

  it('handles null and undefined values', () => {
    const testData = [
      { id: 1, name: 'John', email: null },
      { id: 2, name: undefined, email: 'test@example.com' },
    ]
    
    render(<GenericDataGrid data={testData} schema={userSchema} />)
    
    expect(screen.getByText('John')).toBeInTheDocument()
    expect(screen.getByText('test@example.com')).toBeInTheDocument()
  })
})