# Claude Code Assistant Memory

## Project Overview
**Application**: GreenOnion - Food product management system  
**Client Request**: Setup navigation routing, PrimeReact UI, centralized styles, role-based authorization, and deep linking  
**Authentication**: Azure B2C with MSAL React integration  
**Status**: ✅ Complete and functional

## Quick Reference

### Key Files & Documentation
- **Architecture**: See `ARCHITECTURE.md` - **THE GOLD STANDARD** for technology stack, file structure, and development standards
- **Configuration**: See `CONFIGURATION.md` for runtime config.json setup and Azure B2C configuration
- **Role System**: See `ROLE_SYSTEM_GUIDE.md` for complete role hierarchy and permission system
- **Correlation Tracking**: See `CORRELATION_TRACKING.md` for API request tracking implementation
- **Application Insights**: See `APPLICATION_INSIGHTS.md` for telemetry setup and configuration
- **User Management**: See `USER_MANAGEMENT_FEATURE.md` for CRUD implementation patterns

### Core Architecture Decisions
**IMPORTANT**: `ARCHITECTURE.md` is the authoritative gold standard for all architectural decisions. The list below is a quick reference only. Always defer to ARCHITECTURE.md for the complete and up-to-date architectural guidance.

1. **Context over Redux**: Used React Context for auth state (simpler for this use case)
2. **Generated Client**: Kept existing GreenOnion API client structure with MSAL enhancement
3. **Role-Based Routes**: Implemented hierarchical 6-tier role system with enum-based permissions
4. **CSS Variables**: Chose CSS custom properties over CSS-in-JS for better performance
5. **MSAL Redirect**: Used redirect flow over popup for better browser compatibility
6. **Correlation Tracking**: Static manager pattern for cross-component API correlation
7. **Component Wrapping**: All PrimeReact components wrapped in `@/components/controls`
8. **Import Path Standards**: Cross-directory use `@/`, siblings use `./` (never deep relative paths)

### User Data Access Pattern
```typescript
// Example usage in any component
const { 
  user, 
  getUserFullName, 
  getUserDistrict, 
  getUserManufacturer, 
  getUserRole,
  hasRole,
  hasAnyRole 
} = useAuth();

// Access complete API user data
const apiData = user?.apiUserData;
const district = getUserDistrict();
const isAdmin = hasRole(UserRole.DISTRICT_ADMIN);
```

## Development Workflow
1. **Start**: `npm run dev` for development server
2. **Lint**: `npm run lint` for code quality
3. **Type Check**: `npm run typecheck` for TypeScript validation
4. **Build**: `npm run build` for production build
5. **Test**: `npm run test` for unit tests

## Key Implementation Features

### GenericDataTable Advanced Search & Pagination
- **Server-Side Processing**: Full support for API-driven search, filtering, sorting, and pagination
- **API Integration**: Direct mapping to searchquery and pagedresults API patterns
- **Filter Operators**: Complete support for all 7 API filter operators
- **Search Operators**: Dropdown selection with automatic pattern mapping
- **Triple Filter System**: Column filters + Advanced flyouts + Collapsible sidebar editor
- **Usage**: See implementation examples in entity list pages (UsersList, ProductsList, etc.)

### Entity Management System
- **Dual Editing Approaches**: Dynamic forms (schema-driven) vs Panel forms (structured layout)
- **8 Combobox Controls**: Reusable API-integrated dropdowns for all major entities
- **Shopping Cart View**: Product cards with infinite scroll (ProductsCardView.tsx)
- **Complete CRUD**: Implemented for Users, Products, Categories, Manufacturers, Districts, etc.
- **Role-Based Access**: All operations protected by role permissions

### Enhanced Features (Latest Sessions)
- **Sidebar UX**: Hover menus for collapsed state with SidebarHoverMenu and SimpleTooltip components
- **Build System**: Fixed all TypeScript compilation errors, standardized API client imports
- **Style Consistency**: Complete conversion from Tailwind CSS to PrimeReact/PrimeFlex
- **Test Interface**: Admin combobox test screen at `/admin/combobox-test`
- **Sidebar Filter Editor**: Collapsible advanced filtering panel for both list and card views

### Build Repair (2025-07-30)
- ✅ Fixed TypeScript compilation errors across 6 key components
- ✅ Resolved API type mismatches between nullable/undefined values
- ✅ Created type adapters for API client compatibility with GenericDataTable
- ✅ Fixed property naming issues (categoryName→category, allergens→hasAllergens, etc.)
- ✅ Eliminated switch fallthrough errors with proper control flow
- ✅ Production build now completes successfully

## Session History & Major Accomplishments

### Initial Setup (2025-07-27)
- ✅ Azure B2C authentication with MSAL React
- ✅ PrimeReact UI components with centralized styling
- ✅ Role-based routing with deep linking support
- ✅ Runtime configuration system (config.json)

### Enhancement Phase (2025-07-28)
- ✅ Complete user data integration from GreenOnion API
- ✅ API client MSAL integration with correlation tracking
- ✅ Application Insights with development fallback
- ✅ Development-only logging system
- ✅ Authentication flow simplification (removed login page)

### Entity Management Phase (2025-07-29)
- ✅ Complete entity management for all business objects
- ✅ Shopping cart UX with infinite scroll
- ✅ Build system fixes and API standardization
- ✅ 8 reusable combobox controls
- ✅ Enhanced sidebar navigation with hover functionality

## Next Session Guidance
1. **Priority**: Test complete entity management system with real API data
2. **Focus**: Implement additional edit screens for remaining entities
3. **Consider**: Add server-side pagination to reduce client-side load
4. **Testing**: Add unit tests for entity management flows
5. **Performance**: Implement code splitting for entity routes
6. **UX**: Add confirmation dialogs for delete operations
7. **Features**: Add bulk operations to data tables
8. **Validation**: Add custom validation rules beyond schema validation

## Critical Standards to Maintain

### Import Path Requirements
- **Cross-directory**: Always use `@/` paths
- **Siblings**: Always use `./` paths
- **Never use**: Deep relative paths like `../../`

### PrimeReact Component Wrapping
- **All PrimeReact components** must be wrapped in `@/components/controls`
- **Never import directly** from `primereact/*` packages
- **Pattern established** in all 12+ control wrapper components

### API Client Usage
- **Default imports only**: `import ProductClient from '@/api/GreenOnion/Clients/ProductClient'`
- **Capitalized methods**: Use `client.Query()` not `client.query()`
- **Response handling**: Check for `response && response.rows`
- **Type Adapters**: Use adapter pattern to convert nullable API responses to GenericDataTable format:
  ```typescript
  const clientAdapter = {
    Query: async (params: { body?: unknown }) => {
      const response = await client.Query(params as any);
      return response ? {
        rows: response.rows || undefined,
        currentPage: response.currentPage ?? undefined,
        totalPageCount: response.totalPageCount ?? undefined,
        totalRowCount: response.totalRowCount ?? undefined
      } : undefined;
    }
  };
  ```

## Build & Deployment Status
- **TypeScript**: ✅ Clean compilation with strict mode
- **ESLint**: ✅ Clean with generated files ignored
- **Build**: ✅ Production build successful
- **Dependencies**: All installed and compatible
- **Testing**: Framework ready (Vitest + Playwright configured)

## Important Notes
- **Do not create files** unless absolutely necessary
- **Prefer editing** existing files over creating new ones
- **No documentation** unless explicitly requested
- **Keep responses concise** - avoid unnecessary explanations