# API Reference

## Base Configuration
- **Base URL**: `https://localhost:7443`
- **OpenAPI Spec**: `https://localhost:7443/swagger/v1/swagger.json`
- **Local Spec File**: `greenonion-swagger.json`

## Key Endpoints
- `Role_Query({})` - Fetches paginated role data
  - Returns: `GreenOnion_Common_Models_QueryRoleModelPagedQueryResult`
  - Contains: `rows` array of role objects

## Generated Client Usage
```typescript
import { createApiClient, schemas } from '@/api/GreenOnionClient';

const client = createApiClient('https://localhost:7443');
const result = await client.Role_Query({});
```

## Schema Types
- `GreenOnion_Common_Models_QueryRoleModelPagedQueryResult` - Paged result wrapper
- `GreenOnion_Common_Models_QueryRoleModel` - Individual role model

## Client Generation Command
```bash
npx openapi-zod-client \
    --input ./greenonion-swagger.json \
    --output-dir src/api \
    --template-dir src/api/templates \
    --with-alias
```