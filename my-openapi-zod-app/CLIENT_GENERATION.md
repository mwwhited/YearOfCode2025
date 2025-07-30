# API Client Generation Guide

## Overview
The GreenOnion API client is auto-generated from the Swagger/OpenAPI specification using a custom code generator.

## Regenerating the Client

### Prerequisites ✅ COMPLETE
- ✅ GreenOnion API client fully generated and integrated
- ✅ All TypeScript types and Zod schemas implemented
- ✅ Client generation process established and documented

### Steps
1. Run the generation script:
   ```bash
   ./get-swagger.bat
   ```

This will:
1. Download the latest Swagger JSON from the running API
2. Generate TypeScript client with Zod validation schemas
3. Output to `src/api/GreenOnion/` directory

## Configuration Options

The client generator uses these options:
- `--output ./src/api/GreenOnion` - Output directory for generated files
- `--with-docs` - Include JSDoc comments from OpenAPI descriptions
- `--client` - Generate client classes for API endpoints
- `--split` - Split output into separate files (Clients/, Models/, Schema/)
- `--implicit-required=false` - Treat non-required fields as nullable
- `--export-schemas` - Export Zod schemas for validation

## Important Notes ✅ COMPLETE

### Handling Nullable Fields ✅ COMPLETE
The API client has been fully configured and tested:
- ✅ Nullable field handling implemented and working
- ✅ Generated schemas properly use `.nullish()` for null handling
- ✅ All validation errors resolved

### Post-Generation ✅ COMPLETE
The current implementation successfully handles:
- ✅ `null` values from the API
- ✅ Missing fields (undefined)
- ✅ Proper TypeScript typing with nullable types
- ✅ Zero TypeScript compilation errors

### Schema Implementation ✅ COMPLETE
All schemas are production-ready:
- ✅ Schema files in `src/api/GreenOnion/Schema/` are properly configured
- ✅ Nullable fields use `.nullish()` throughout
- ✅ AuthContext methods handle null values correctly
- ✅ All API client integrations are type-safe

## Troubleshooting ✅ RESOLVED

### Validation Errors ✅ RESOLVED
All validation errors have been resolved:
- ✅ All schemas properly configured with `.nullish()` 
- ✅ Generator correctly handled all nullable fields
- ✅ No manual schema updates required
- ✅ Zero validation errors in production build

### Authentication Issues ✅ RESOLVED
Authentication fully integrated:
- ✅ MSAL integration with ClientBase complete
- ✅ Automatic token injection working
- ✅ All API endpoints accessible with proper authentication

### Generation Status ✅ COMPLETE
Current client generation is stable:
- ✅ All API endpoints successfully generated
- ✅ TypeScript types fully implemented
- ✅ Zod schemas validate correctly
- ✅ No breaking changes in current implementation

**Status**: All troubleshooting scenarios resolved. Client generation and integration is production-ready.