import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Loading from '../Loading'

describe('Loading [unit] [component]', () => {
  it('renders default loading message', () => {
    render(<Loading />)
    
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders custom loading message', () => {
    render(<Loading message="Please wait..." />)
    
    expect(screen.getByText('Please wait...')).toBeInTheDocument()
  })

  it('renders small size spinner', () => {
    render(<Loading size="small" />)
    
    // Check if spinner has small size styles
    const spinner = screen.getByText('Loading...').previousSibling
    expect(spinner).toHaveStyle({ width: '20px', height: '20px' })
  })

  it('renders medium size spinner by default', () => {
    render(<Loading />)
    
    // Check if spinner has medium size styles
    const spinner = screen.getByText('Loading...').previousSibling
    expect(spinner).toHaveStyle({ width: '40px', height: '40px' })
  })

  it('renders large size spinner', () => {
    render(<Loading size="large" />)
    
    // Check if spinner has large size styles
    const spinner = screen.getByText('Loading...').previousSibling
    expect(spinner).toHaveStyle({ width: '60px', height: '60px' })
  })

  it('has proper loading container styles', () => {
    render(<Loading />)
    
    const container = screen.getByText('Loading...').parentElement
    expect(container).toHaveStyle({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      padding: '20px'
    })
  })
})