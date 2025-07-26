import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import { z } from 'zod'
import GenericDataGrid from '../components/GenericDataGrid'

// Development tools and debugging tests
describe('Development Tools [devtool] [debug]', () => {
  it('should provide helpful error messages for invalid schemas', () => {
    const invalidSchema = z.object({
      id: z.number(),
      name: z.string(),
    })

    const invalidData = [
      { id: 'invalid', name: 'Test' }, // id should be number
    ]

    // Test that schema validation would catch this
    const result = invalidSchema.safeParse(invalidData[0])
    expect(result.success).toBe(false)
    
    if (!result.success) {
      expect(result.error.issues).toHaveLength(1)
      expect(result.error.issues[0].path).toEqual(['id'])
      expect(result.error.issues[0].code).toBe('invalid_type')
    }
  })

  it('should render data grid with debug information', () => {
    const testSchema = z.object({
      id: z.number(),
      name: z.string(),
    })

    const testData = [
      { id: 1, name: 'Test Item' }
    ]

    const { container } = render(
      <GenericDataGrid<typeof testData[0], typeof testSchema.shape> 
        data={testData} 
        schema={testSchema} 
      />
    )

    // Verify table structure for debugging
    const table = container.querySelector('table')
    expect(table).toBeTruthy()
    
    const headers = container.querySelectorAll('th')
    expect(headers).toHaveLength(2) // id and name columns
    
    const rows = container.querySelectorAll('tbody tr')
    expect(rows).toHaveLength(1)
  })

  it('should handle empty data gracefully for debugging', () => {
    const testSchema = z.object({
      id: z.number(),
      name: z.string(),
    })

    const { container } = render(
      <GenericDataGrid<{ id: number; name: string }, typeof testSchema.shape>
        data={[]} 
        schema={testSchema} 
      />
    )

    // Should still render headers even with no data
    const headers = container.querySelectorAll('th')
    expect(headers).toHaveLength(2)
    
    const dataRows = container.querySelectorAll('tbody tr')
    expect(dataRows).toHaveLength(0)
  })

  it('should validate component props during development', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    
    const testSchema = z.object({
      id: z.number(),
      name: z.string(),
    })

    // This should work without errors
    render(
      <GenericDataGrid<{ id: number; name: string }, typeof testSchema.shape>
        data={[{ id: 1, name: 'Test' }]} 
        schema={testSchema} 
      />
    )

    // No console errors should occur
    expect(consoleSpy).not.toHaveBeenCalled()
    
    consoleSpy.mockRestore()
  })
})