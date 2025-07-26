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
    render(<GenericDataGrid<User> data={testUsers} schema={userSchema} />)
    
    expect(screen.getByText('Id')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('renders table data correctly', () => {
    render(<GenericDataGrid<User> data={testUsers} schema={userSchema} />)
    
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('jane@example.com')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('renders empty table when no data provided', () => {
    render(<GenericDataGrid<User> data={[]} schema={userSchema} />)
    
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

  it('renders global search input when filtering enabled', () => {
    render(<GenericDataGrid<User> data={testUsers} schema={userSchema} enableFiltering={true} />)
    
    expect(screen.getByPlaceholderText('Search all columns...')).toBeInTheDocument()
    expect(screen.getByText('Showing 3 of 3 rows')).toBeInTheDocument()
  })

  it('filters data based on global search', () => {
    render(<GenericDataGrid<User> data={testUsers} schema={userSchema} enableFiltering={true} />)
    
    const searchInput = screen.getByPlaceholderText('Search all columns...')
    fireEvent.change(searchInput, { target: { value: 'John' } })
    
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument()
    expect(screen.getByText('Showing 1 of 3 rows')).toBeInTheDocument()
  })

  it('shows sorting buttons when sorting enabled', () => {
    render(<GenericDataGrid<User> data={testUsers} schema={userSchema} enableSorting={true} />)
    
    const nameButton = screen.getByText('Name')
    expect(nameButton).toBeInTheDocument()
    
    // Should show sorting indicator
    expect(screen.getByText(/Name.*↕/)).toBeInTheDocument()
  })

  it('can disable sorting and filtering', () => {
    render(<GenericDataGrid<User> data={testUsers} schema={userSchema} enableSorting={false} enableFiltering={false} />)
    
    expect(screen.queryByPlaceholderText('Search all columns...')).not.toBeInTheDocument()
    expect(screen.queryByText('Showing')).not.toBeInTheDocument()
    
    // Headers should not be buttons when sorting is disabled
    expect(screen.getByText('Name')).toBeInTheDocument()
  })

  it('shows no data message when filtered results are empty', () => {
    render(<GenericDataGrid<User> data={testUsers} schema={userSchema} enableFiltering={true} />)
    
    const searchInput = screen.getByPlaceholderText('Search all columns...')
    fireEvent.change(searchInput, { target: { value: 'nonexistent' } })
    
    expect(screen.getByText('No data matches your filters')).toBeInTheDocument()
    expect(screen.getByText('Showing 0 of 3 rows')).toBeInTheDocument()
  })
})