# Claude Memory

## Project Overview
This is a PoC project combining React + TypeScript + Zod + OpenAPI for type-safe full-stack development.

## Key Technologies
- React 19 with TypeScript
- Vite for build/dev server  
- Zod for schema validation
- openapi-zod-client for API client generation
- TanStack Table for data grids
- ESLint for code quality

## Current State
- ✅ Basic React + TypeScript setup with Vite
- ✅ OpenAPI client generation working
- ✅ GenericDataGrid component using TanStack Table
- ✅ Type-safe API calls with Zod validation
- ✅ Documentation and automation scripts created
- ✅ Reference files created for easy lookup

## Quick Reference Files
- `API_REFERENCE.md` - API endpoints, schemas, and client usage
- `COMPONENT_PATTERNS.md` - Component usage patterns and examples
- `SCRIPTS_REFERENCE.md` - All available scripts and commands
- `ISSUES_TRACKER.md` - Current issues and technical debt
- `TODO.md` - Task tracking
- `CHANGES.md` - Change log

## Development Workflow
1. Always prefer automation scripts over manual processing
2. Use TodoWrite tool for task management  
3. Update CHANGES.md for all modifications
4. Keep reference files updated
5. Check ISSUES_TRACKER.md for known problems

## Key Commands
- `npm run dev` - Start development
- `npm run generate-client` - Generate API client
- `npm run check-types` - Full validation suite

## Next Priority
Fix the useEffect infinite loop issue in App.tsx (high priority)