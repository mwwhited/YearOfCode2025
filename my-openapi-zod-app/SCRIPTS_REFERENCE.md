# Scripts Reference

## Available Scripts

### Development Scripts
- `npm run dev` - Start development server (with polling for WSL)
- `npm run dev-setup` - Full development environment setup
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Quality Scripts
- `npm run lint` - Run ESLint
- `npm run typecheck` - TypeScript compilation check
- `npm run check-types` - Full validation suite (lint + typecheck + build)

### Testing Scripts
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run all tests once
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:unit` - Run unit tests only
- `npm run test:integration` - Run integration tests only
- `npm run test:devtool` - Run development tool tests only
- `npm run test:component` - Run component tests only
- `npm run test:api` - Run API tests only
- `npm run test:watch` - Watch all tests
- `npm run test:watch:unit` - Watch unit tests only
- `npm run test:watch:integration` - Watch integration tests only

### API Client Scripts
- `npm run generate-client` - Generate OpenAPI client from spec
- `./scripts/generate-client.sh [url]` - Generate with custom URL

### Refactoring Scripts
- `npm run refactor:organize-tests` - Organize and tag tests
- `npm run refactor:components` - Refactor components for better type safety
- `./scripts/organize-tests.sh [command]` - Advanced test organization
- `./scripts/refactor-components.sh [command]` - Advanced component refactoring

## Script Details

### generate-client.sh
- Downloads OpenAPI spec from URL (default: localhost:7443)
- Generates TypeScript client with Zod schemas
- Runs type checking on generated code
- Usage: `./scripts/generate-client.sh https://api.example.com/swagger.json`

### dev-setup.sh
- Installs dependencies if missing
- Generates API client if spec exists
- Runs linting
- Starts development server

### check-types.sh
- TypeScript compilation check
- ESLint validation
- Build test
- Comprehensive validation pipeline

### organize-tests.sh
- Automates test organization and tagging
- Adds category tags to test files
- Validates test structure
- Creates test scripts in package.json
- Commands: `tag-all`, `scripts`, `validate`, `setup`

### refactor-components.sh
- Automates component refactoring tasks
- Improves TypeScript type safety
- Adds error boundaries and loading components
- Creates component tests
- Commands: `type-safety`, `error-boundary`, `loading`, `full-refactor`

## Batch Files (Legacy)
- `before_docker.bat` - Pre-Docker setup
- `get-swagger.bat` - Downloads swagger spec