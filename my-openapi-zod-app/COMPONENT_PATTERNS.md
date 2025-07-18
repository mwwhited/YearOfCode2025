# Component Patterns

## GenericDataGrid Pattern
Location: `src/components/GenericDataGrid.tsx`

### Usage Pattern
```typescript
import { z } from "zod";
import { schemas } from '@/api/GreenOnionClient';

type Role = z.infer<typeof schemas.GreenOnion_Common_Models_QueryRoleModel>;

<GenericDataGrid<Role> 
  data={data} 
  schema={schemas.GreenOnion_Common_Models_QueryRoleModel} 
/>
```

### Key Features
- Automatically generates columns from Zod schema shapes
- Uses TanStack Table for table functionality
- Fully type-safe with TypeScript generics
- Supports any Zod schema structure

### Current Implementation
- Maps schema keys to table columns
- Capitalizes column headers
- Uses flexRender for cell rendering
- No sorting/filtering yet

## Type Inference Pattern
```typescript
// Extract type from Zod schema
type MyType = z.infer<typeof schemas.MySchema>;

// Use in components
const [data, setData] = useState<MyType[]>([]);
```

## API Integration Pattern
```typescript
// Type-safe API calls
const result: ResultType = await client.SomeEndpoint({});
setData(result.rows ?? []);
```