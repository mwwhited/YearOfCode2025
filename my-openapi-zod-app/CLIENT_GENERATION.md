# API Client Generation Guide

## Overview
The GreenOnion API client is auto-generated from the Swagger/OpenAPI specification using `openapi-zod-client`.

## Regenerating the Client

### Prerequisites
- Ensure the GreenOnion API is running locally on `https://localhost:7443`
- Have curl available in your environment

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

## Important Notes

### Handling Nullable Fields
The API returns `null` for many optional fields. The generator configuration uses:
- `--implicit-required=false` to handle nullable fields properly
- Generated schemas use `.nullish()` instead of `.optional()` for better null handling

### Post-Generation
After generation, the schemas should automatically handle:
- `null` values from the API
- Missing fields (undefined)
- Proper TypeScript typing with nullable types

### Manual Schema Fixes
If you encounter Zod validation errors after generation:
1. Check the Schema files in `src/api/GreenOnion/Schema/`
2. Ensure nullable fields use `.nullish()` instead of `.optional()`
3. Update AuthContext convenience methods to handle null values

## Troubleshooting

### Validation Errors
If you see "Expected string, received null" errors:
1. The field should be `.nullish()` in the schema
2. Check if the generator properly handled the nullable field
3. Manually update the schema if needed

### Authentication Issues
Ensure the API is running and accessible at the configured URL.

### Generation Failures
- Check that curl can access the Swagger endpoint
- Verify the API is responding with valid JSON
- Check for any breaking changes in the API schema