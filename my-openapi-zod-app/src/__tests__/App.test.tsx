import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import App from '../App'

// Mock the API client
vi.mock('../api/GreenOnionClient', () => ({
  createApiClient: vi.fn(() => ({
    Role_Query: vi.fn(() => Promise.resolve({ rows: [] }))
  })),
  schemas: {
    GreenOnion_Common_Models_QueryRoleModel: {
      shape: {
        id: { _def: { typeName: 'ZodNumber' } },
        name: { _def: { typeName: 'ZodString' } },
      }
    }
  }
}))

describe('App [unit] [component]', () => {
  it('renders main heading', () => {
    render(<App />)
    expect(screen.getByText('Vite + React')).toBeInTheDocument()
  })

  it('renders counter button', () => {
    render(<App />)
    expect(screen.getByText(/count is/)).toBeInTheDocument()
  })

  it('renders loading state initially', () => {
    render(<App />)
    expect(screen.getByText('Loading roles...')).toBeInTheDocument()
  })

  it('renders Vite and React logos', () => {
    render(<App />)
    expect(screen.getByAltText('Vite logo')).toBeInTheDocument()
    expect(screen.getByAltText('React logo')).toBeInTheDocument()
  })
})