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
6. **Absolute Imports**: All components must use `@/` prefix for internal imports (never relative paths)
7. **PrimeReact Wrappers**: All PrimeReact components must be wrapped in `@/components/controls` (NEVER direct imports)

### File Organization
- **Separation of Concerns**: Clear separation between auth, layout, pages, routing, controls
- **Custom Hook**: Extracted useAuth for reusability and React Fast Refresh compatibility
- **Type Safety**: Proper TypeScript interfaces throughout
- **Configuration**: Environment-based configuration for Azure B2C
- **Component Wrapping**: All UI components wrapped in `@/components/controls` layer

### Performance Considerations
- **Bundle Size**: Chart.js added for PrimeReact Chart component
- **Code Splitting**: React Router setup ready for lazy loading
- **Tree Shaking**: Vite configuration optimized for production builds

### Import Path Standards
**CRITICAL REQUIREMENT**: Use appropriate import paths based on file relationships:

**✅ Required Patterns:**
```typescript
// Cross-directory imports: Use @/ absolute paths
import { useAuth } from '@/hooks/useAuth';
import { AuthContext } from '@/contexts/AuthContext';
import { msalConfig } from '@/config/msalConfig';
import { Dashboard } from '@/pages/Dashboard';

// Sibling imports: Use ./ relative paths
import { AppHeader } from './AppHeader';
import { AppSidebar } from './AppSidebar';
import { Button } from './Button';
import { Card } from './Card';
```

**❌ Forbidden Patterns:**
```typescript
// Deep relative paths (use @/ instead)
import { useAuth } from '../../hooks/useAuth';
import { AuthContext } from '../../../contexts/AuthContext';

// Absolute paths for siblings (use ./ instead)
import { AppHeader } from '@/components/layout/AppHeader'; // when in same directory
```

**Import Rules:**
1. **Sibling Files**: Use `./filename` for files in the same directory
2. **Cross-Directory**: Use `@/directory/filename` for files in different directories  
3. **Never Use**: Deep relative paths like `../../` or `../../../`

**Benefits:**
- Clear distinction between sibling and cross-directory imports
- Consistent import patterns across the entire codebase
- Easier refactoring and file movement
- Better IDE navigation and auto-completion
- Eliminates deep nested relative path confusion
- Improved code maintainability

### PrimeReact Component Wrapper Standards
**CRITICAL REQUIREMENT**: All PrimeReact components used anywhere in the application MUST be wrapped by custom components in `@/components/controls`.

**✅ Required Implementation:**
```typescript
// @/components/controls/Button.tsx
import { Button as PrimeButton } from 'primereact/button';
import type { ButtonProps as PrimeButtonProps } from 'primereact/button';

interface ButtonProps extends PrimeButtonProps {
  // Custom props can be added here
}

export const Button: React.FC<ButtonProps> = (props) => {
  return <PrimeButton {...props} />;
};

// @/components/controls/index.ts
export { Button } from './Button';
export { DataTable } from './DataTable';
// ... other wrapped components

// In application code
import { Button, DataTable } from '@/components/controls';
```

**❌ FORBIDDEN - Direct PrimeReact Imports:**
```typescript
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
```

**Wrapper Architecture Benefits:**
- **Centralized Customization**: Single place to modify all instances of a component
- **Theme Consistency**: Ensure all components follow design system
- **Enhanced Props**: Add application-specific functionality
- **Future-Proofing**: Easy library replacement or major version upgrades
- **Type Safety**: Better TypeScript integration with custom interfaces
- **Testing**: Easier to mock and test UI components

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

### Application Insights Integration
- **Service**: `src/services/applicationInsights.ts` - Comprehensive telemetry wrapper
- **Fallback**: `src/services/telemetryFallback.ts` - Console-based fallback for development
- **API Tracking**: `src/services/apiInterceptor.ts` - Automatic API call monitoring
- **React Hook**: `src/hooks/useApplicationInsights.ts` - Component-level telemetry
- **Configuration**: Added applicationInsights section to config.json
- **Features**: User tracking, custom events, performance metrics, error monitoring

### Application Insights Error Resolution (2025-07-28)
**Issue**: "Cannot read properties of undefined (reading 'connectionString')" error
**Resolution**:
- Enhanced error handling in Application Insights service
- Implemented comprehensive fallback telemetry system
- Fixed all tracking methods to use fallback when AI is unavailable
- Added localhost endpoint compatibility warnings
- Enhanced debug logging for configuration troubleshooting

**Files Modified**:
- `src/services/applicationInsights.ts` - All methods now check for fallback mode
- `src/services/telemetryFallback.ts` - Improved browser environment detection
- `src/config/appConfig.ts` - Added debug logging for config loading
- `src/AppWithConfig.tsx` - Enhanced AI initialization error handling

**Architectural Impact**:
- Application is now resilient to telemetry configuration failures
- Graceful degradation ensures core functionality continues
- Development experience improved with clear error messages
- Flexible telemetry system works with cloud and local endpoints

## Dependencies Added (Complete List)
- `@azure/msal-browser`: ^4.16.0
- `@azure/msal-react`: ^3.0.16
- `react-router-dom`: ^7.7.1
- `@types/react-router-dom`: ^5.3.3
- `chart.js`: ^4.5.0
- `primeflex`: ^4.0.0
- `@microsoft/applicationinsights-web`: ^3.3.9
- `@microsoft/applicationinsights-react-js`: ^19.3.7
- `history`: ^5.3.0

## Current Application Status
✅ **Core Functionality**: All major features implemented and functional  
✅ **Authentication**: Azure B2C with MSAL React fully integrated  
✅ **Routing**: Role-based protected routes with deep linking  
✅ **UI System**: PrimeReact components with centralized styling  
✅ **Configuration**: Runtime config.json system working  
✅ **Telemetry**: Application Insights with fallback system  
✅ **Error Handling**: Comprehensive error recovery mechanisms  
✅ **Build System**: TypeScript, ESLint, and Vite all clean  

## Next Session Guidance
If continuing development:
1. **Priority**: Test the complete application flow with proper configuration
2. **Focus**: Replace Dashboard mock data with real API calls using GreenOnion client
3. **Consider**: Implementing additional pages (Products, Categories, Users, etc.)
4. **Testing**: Add unit tests for authentication and telemetry flows
5. **Performance**: Consider code splitting for large routes
6. **Monitoring**: Verify Application Insights data in Azure portal
7. **Documentation**: Update user guides and deployment instructions