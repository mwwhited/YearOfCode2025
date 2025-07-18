# React + TypeScript + Zod + OpenAPI PoC

A proof of concept project demonstrating the integration of React, TypeScript, Zod schema validation, and OpenAPI client generation for type-safe full-stack development.

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Zod** - Schema validation
- **openapi-zod-client** - OpenAPI client generation with Zod schemas
- **TanStack Table** - Data grid component
- **ESLint** - Code linting

## Features

- 🔒 **Type-safe API calls** - Generated client with full TypeScript support
- 📋 **Generic data grid** - Automatically creates columns from Zod schemas
- ⚡ **Fast development** - Hot module replacement with Vite
- 🛡️ **Runtime validation** - Zod schemas ensure data integrity
- 📊 **OpenAPI integration** - Client generated from OpenAPI spec

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
├── api/
│   ├── GreenOnionClient.ts        # Generated OpenAPI client
│   └── GreenOnionClient/          # Generated client modules
├── components/
│   └── GenericDataGrid.tsx        # Reusable data grid component
├── App.tsx                        # Main application component
└── main.tsx                       # Application entry point
```

## Key Components

### GenericDataGrid

A reusable data grid component that automatically generates columns based on Zod schema shapes:

```typescript
<GenericDataGrid<Role> 
  data={data} 
  schema={schemas.GreenOnion_Common_Models_QueryRoleModel} 
/>
```

### API Client

Type-safe API client generated from OpenAPI specification:

```typescript
const client = createApiClient('https://localhost:7443');
const result = await client.Role_Query({});
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## OpenAPI Client Generation

The project uses `openapi-zod-client` to generate a type-safe client from an OpenAPI specification. The generated client provides:

- Full TypeScript type definitions
- Runtime validation with Zod schemas
- Automatic serialization/deserialization
- Error handling

## Development Notes

- The project demonstrates type-safe data flow from API to UI
- Zod schemas provide both compile-time and runtime type safety
- The generic data grid showcases reusable component design with TypeScript generics
- Hot module replacement ensures fast development iteration

## Future Enhancements

- Add error handling and loading states
- Implement pagination and filtering
- Add form validation with Zod
- Include unit tests
- Add more complex data relationships