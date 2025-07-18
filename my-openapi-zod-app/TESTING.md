# Testing Guide

## Test Organization

All tests are organized with tags to allow running specific test categories:

### Test Categories

- **`unit`** - Unit tests for individual components and functions
- **`integration`** - Integration tests for API calls and complex workflows
- **`devtool`** - Development and debugging tests
- **`component`** - React component tests
- **`api`** - API client tests

### Test Commands

Run all tests:
```bash
npm run test           # Watch mode
npm run test:run       # Run once
npm run test:coverage  # Run with coverage
```

Run specific test categories:
```bash
npm run test:unit         # Unit tests only
npm run test:integration  # Integration tests only  
npm run test:devtool      # Development tool tests only
npm run test:component    # Component tests only
npm run test:api          # API tests only
```

Watch specific categories:
```bash
npm run test:watch:unit        # Watch unit tests
npm run test:watch:integration # Watch integration tests
```

## Test Structure

### Unit Tests
- Located in `src/__tests__/` and `src/components/__tests__/`
- Test individual components and functions
- Use mocking for external dependencies
- Tagged with `[unit]` and specific category like `[component]`

### Integration Tests
- Located in `src/__tests__/*.integration.test.tsx`
- Test API integration and complex workflows
- May use real API calls or sophisticated mocking
- Tagged with `[integration]` and specific category like `[api]`

### Development Tool Tests
- Located in `src/__tests__/*.devtool.test.tsx`
- Test development utilities and debugging features
- Validate error messages and edge cases
- Tagged with `[devtool]` and `[debug]`

## Test Examples

### Unit Test Pattern
```typescript
describe('Component Name [unit] [component]', () => {
  it('should do something', () => {
    // Test implementation
  })
})
```

### Integration Test Pattern
```typescript
describe('Feature Name [integration] [api]', () => {
  beforeEach(() => {
    // Setup
  })
  
  it('should integrate correctly', async () => {
    // Integration test
  })
})
```

### Development Tool Test Pattern
```typescript
describe('Debug Feature [devtool] [debug]', () => {
  it('should provide helpful error messages', () => {
    // Development tool test
  })
})
```

## Current Test Coverage

- **Unit Tests**: 8 tests (App + GenericDataGrid)
- **Integration Tests**: 3 tests (API client)
- **Development Tool Tests**: 4 tests (Schema validation, debugging)

## Test Environment

- **Test Runner**: Vitest
- **Test Environment**: jsdom (for DOM testing)
- **UI Testing**: React Testing Library
- **Mocking**: Vitest built-in mocking
- **Assertions**: Vitest + jest-dom matchers

## Best Practices

1. **Tag all tests** with appropriate categories
2. **Use descriptive test names** that explain what is being tested
3. **Mock external dependencies** in unit tests
4. **Keep integration tests separate** from unit tests
5. **Use development tool tests** for debugging and error validation
6. **Always test both success and error cases**
7. **Write tests that are fast and reliable**

## Running Tests in CI/CD

For continuous integration, you can run tests in different stages:

```bash
# Fast feedback loop
npm run test:unit

# More comprehensive testing
npm run test:integration

# Full test suite
npm run test:run
```