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

### API Client Scripts
- `npm run generate-client` - Generate OpenAPI client from spec
- `./scripts/generate-client.sh [url]` - Generate with custom URL

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

## Batch Files (Legacy)
- `before_docker.bat` - Pre-Docker setup
- `get-swagger.bat` - Downloads swagger spec