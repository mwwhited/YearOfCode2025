# Issues Tracker

## Current Issues

### High Priority
- **useEffect Infinite Loop** (App.tsx:19-25)
  - Missing dependency array causes infinite re-renders
  - Fix: Add empty dependency array or proper dependencies
  - Location: `src/App.tsx:19-25`

### Medium Priority
- **Missing Error Handling** (App.tsx:20-24)
  - API calls have no error handling
  - Could cause unhandled promise rejections
  - Need try/catch or error boundaries

- **GenericDataGrid Type Inference** (GenericDataGrid.tsx:11)
  - Schema parameter type could be more specific
  - Currently uses `ZodObject<ZodRawShape>` 
  - Could infer better types from data generic

### Low Priority
- **No Loading States** (App.tsx)
  - No loading indication during API calls
  - Poor UX during data fetching

- **Missing Tests**
  - No unit tests for components
  - No integration tests for API calls

## Resolved Issues
- ✅ No automation scripts (created script files)
- ✅ Missing documentation (created README.md)
- ✅ No package.json script commands (added new scripts)

## Technical Debt
- Remove commented code in App.tsx (lines 27-90)
- Add proper TypeScript strict mode configuration
- Consider adding React Error Boundaries
- Add proper logging/monitoring