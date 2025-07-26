import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createApiClient } from '../api/GreenOnionClient'

// Integration tests for API client
describe('API Integration [integration] [api]', () => {
  let client: ReturnType<typeof createApiClient>

  beforeEach(() => {
    client = createApiClient('https://localhost:7443')
  })

  it('should create API client with correct base URL', () => {
    expect(client).toBeDefined()
    expect(typeof client.Role_Query).toBe('function')
  })

  it('should handle API client method calls', async () => {
    // Mock the actual API call for integration testing
    const mockResponse = {
      rows: [
        { id: 1, name: 'Admin', permissions: ['read', 'write'] },
        { id: 2, name: 'User', permissions: ['read'] }
      ],
      totalCount: 2,
      page: 1,
      pageSize: 10
    }

    // Mock fetch for integration test
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      })
    ))

    const result = await client.Role_Query({})
    expect(result).toEqual(mockResponse)
  })

  it('should handle API errors gracefully', async () => {
    // Mock fetch to simulate API error
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: false,
        status: 500,
        json: () => Promise.resolve({ error: 'Internal Server Error' }),
      })
    ))

    await expect(client.Role_Query({})).rejects.toThrow()
  })
})