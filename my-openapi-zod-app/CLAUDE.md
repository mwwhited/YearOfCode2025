# Claude Code Assistant Memory

## Project Overview
**Application**: GreenOnion - Food product management system  
**Client Request**: Setup navigation routing, PrimeReact UI, centralized styles, role-based authorization, and deep linking  
**Authentication**: Azure B2C with MSAL React integration  
**Status**: ✅ Complete and functional

## Key Implementation Details

### Authentication System
- **Provider**: Azure B2C with `@azure/msal-react` and `@azure/msal-browser`
- **Configuration**: Located in `src/config/msalConfig.ts`
- **Context**: `src/contexts/AuthContext.tsx` with role extraction from B2C claims
- **Hook**: `src/hooks/useAuth.ts` for component usage
- **Role Claims**: Extracts roles from `extension_Role`, `roles`, or `groups` claims
- **Token Management**: Automatic acquisition with fallback to redirect flow

### Routing Architecture
- **Router**: React Router DOM v7.7.1 with BrowserRouter
- **Protection**: `ProtectedRoute` component with role-based guards
- **Routes**: Organized in `src/routes/AppRoutes.tsx`
- **Deep Linking**: Full URL support with authentication checks
- **Role-Based Access**: Admin, Manager, User hierarchy

### UI Components & Layout
- **Framework**: PrimeReact 10.9.6 with Saga Blue theme
- **Layout**: AppHeader, AppSidebar, AppFooter, AppLayout components
- **Sidebar**: Role-based navigation with collapsible functionality
- **Header**: User menu with avatar and logout functionality
- **Responsive**: Mobile-friendly with breakpoint handling

### Styling System
- **CSS Variables**: Centralized in `src/styles/variables.css`
- **Design Tokens**: Colors, spacing, typography, shadows defined
- **Utilities**: PrimeFlex for layout classes
- **Theme**: PrimeReact Saga Blue with custom overrides
- **Responsive**: Mobile-first approach

### Generated API Client
- **Location**: `src/api/GreenOnion/`
- **Structure**: Clients, Models, Schema (Zod validation)
- **Type Safety**: Full TypeScript interfaces
- **ESLint**: Ignored in configuration due to generated nature
- **Usage**: Ready for integration with authentication tokens

## Technical Decisions Made

### Architecture Choices
1. **Context over Redux**: Used React Context for auth state (simpler for this use case)
2. **Generated Client**: Kept existing GreenOnion API client structure
3. **Role-Based Routes**: Implemented hierarchical role system (Admin > Manager > User)
4. **CSS Variables**: Chose CSS custom properties over CSS-in-JS for better performance
5. **MSAL Redirect**: Used redirect flow over popup for better browser compatibility

### File Organization
- **Separation of Concerns**: Clear separation between auth, layout, pages, routing
- **Custom Hook**: Extracted useAuth for reusability and React Fast Refresh compatibility
- **Type Safety**: Proper TypeScript interfaces throughout
- **Configuration**: Environment-based configuration for Azure B2C

### Performance Considerations
- **Bundle Size**: Chart.js added for PrimeReact Chart component
- **Code Splitting**: React Router setup ready for lazy loading
- **Tree Shaking**: Vite configuration optimized for production builds

## Configuration Requirements

### Runtime Configuration (config.json)
The application now uses runtime configuration instead of build-time environment variables:

```json
{
  "azure": {
    "clientId": "your-client-id",
    "authority": "https://tenant.b2clogin.com/tenant.onmicrosoft.com/B2C_1_signupsignin",
    "knownAuthorities": ["tenant.b2clogin.com"]
  },
  "api": {
    "baseUrl": "https://your-api-url.com",
    "scopes": ["openid", "profile"]
  }
}
```

**Key Benefits:**
- Post-build configuration changes
- Single build for multiple environments
- Runtime validation and error handling
- Environment-specific deployment flexibility

### Azure B2C Setup Required
1. Create Azure B2C tenant
2. Configure user flows (B2C_1_signupsignin)
3. Register application with redirect URIs
4. Configure custom attributes for roles
5. Set up group/role claims in token

## Known Issues & Considerations

### Current Limitations
- **Mock Data**: Dashboard uses mock data, needs API integration
- **Role Synchronization**: Roles are extracted from B2C claims, may need backend sync
- **Error Handling**: Basic error handling implemented, could be enhanced
- **Loading States**: Basic loading indicators, could be more comprehensive

### Future Enhancements Identified
- **API Integration**: Replace mock data with real API calls
- **Error Boundaries**: Add React error boundaries for better error handling
- **Offline Support**: Consider service worker for offline functionality
- **Performance**: Code splitting and lazy loading for better performance

## Build & Deployment Status
- **TypeScript**: ✅ Clean compilation with strict mode
- **ESLint**: ✅ Clean with generated files ignored
- **Build**: ✅ Production build successful
- **Dependencies**: All installed and compatible
- **Testing**: Framework ready (Vitest + Playwright configured)

## Development Workflow
1. **Start**: `npm run dev` for development server
2. **Lint**: `npm run lint` for code quality
3. **Type Check**: `npm run typecheck` for TypeScript validation
4. **Build**: `npm run build` for production build
5. **Test**: `npm run test` for unit tests

## Files Created/Modified
### New Files (Initial Setup)
- `src/config/msalConfig.ts` - Azure B2C configuration factory functions
- `src/contexts/AuthContext.tsx` - Authentication context
- `src/hooks/useAuth.ts` - Authentication hook
- `src/components/auth/LoginPage.tsx` - Login interface
- `src/components/auth/ProtectedRoute.tsx` - Route protection
- `src/components/layout/AppHeader.tsx` - Navigation header
- `src/components/layout/AppSidebar.tsx` - Role-based sidebar
- `src/components/layout/AppFooter.tsx` - Application footer
- `src/components/layout/AppLayout.tsx` - Main layout
- `src/routes/AppRoutes.tsx` - Routing configuration
- `src/pages/Dashboard.tsx` - Dashboard with charts
- `src/styles/variables.css` - CSS custom properties
- `TODO.md` - Task tracking
- `CLAUDE.md` - This memory file

### New Files (Runtime Configuration)
- `public/config.json` - Runtime configuration file
- `src/config/appConfig.ts` - Configuration management system
- `src/config/useConfig.ts` - React hook for configuration
- `src/AppWithConfig.tsx` - Configuration-aware app wrapper
- `config.example.json` - Configuration template and guide
- `CONFIGURATION.md` - Comprehensive configuration documentation

### Modified Files (Initial Setup)
- `src/App.tsx` - Added routing and providers
- `src/main.tsx` - Updated to use AppWithConfig wrapper
- `src/App.css` - Updated with layout styles
- `ARCHITECTURE.md` - Comprehensive architecture documentation
- `eslint.config.js` - Updated to ignore generated files
- `package.json` - Added dependencies (MSAL, Router, Chart.js, PrimeFlex)

### Modified Files (Runtime Configuration)
- `src/config/msalConfig.ts` - Changed to factory functions using runtime config
- `src/contexts/AuthContext.tsx` - Updated to use configuration manager
- `src/main.tsx` - Updated to load configuration before MSAL initialization
- `TODO.md` - Updated configuration requirements
- `ARCHITECTURE.md` - Added configuration change log
- `CLAUDE.md` - Updated memory with configuration changes

### Removed Files
- `.env.example` - Replaced with config.example.json

## Dependencies Added
- `@azure/msal-browser`: ^4.16.0
- `@azure/msal-react`: ^3.0.16
- `react-router-dom`: ^7.7.1
- `@types/react-router-dom`: ^5.3.3
- `chart.js`: ^4.5.0
- `primeflex`: ^4.0.0

## Success Metrics
✅ All requested features implemented  
✅ TypeScript compilation clean  
✅ ESLint passing (with appropriate ignores)  
✅ Production build successful  
✅ Role-based routing functional  
✅ Azure B2C authentication ready  
✅ PrimeReact UI components integrated  
✅ Deep linking supported  
✅ Centralized styling system  
✅ Responsive design implemented  

## Next Session Guidance
If continuing development:
1. **Priority**: Configure Azure B2C environment variables
2. **Focus**: Replace Dashboard mock data with real API calls
3. **Consider**: Implementing additional pages (Products, Categories, etc.)
4. **Testing**: Add unit tests for authentication flow
5. **Performance**: Consider code splitting for large routes