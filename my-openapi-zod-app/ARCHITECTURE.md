# GreenOnion Application Architecture

## Technology Stack
- **Frontend Framework**: React 19.1.0
- **UI Library**: PrimeReact 10.9.6 with PrimeFlex utilities
- **Authentication**: Azure B2C with MSAL React + MsalAuthenticationTemplate
- **Routing**: React Router DOM 7.7.1
- **Build Tool**: Vite 7.0.6
- **Language**: TypeScript 5.8.3
- **API Client**: Generated TypeScript client with Zod validation
- **Charts**: Chart.js 4.5.0
- **Styling**: CSS Variables + PrimeReact Saga Blue theme
- **Logging**: Development-only logger with environment-based output
- **Telemetry**: Application Insights with fallback system

## Authentication Architecture

### Core Authentication
- **Provider**: Azure B2C with MSAL browser library (v4.16.0)
- **Authentication Pattern**: MsalAuthenticationTemplate with AppWithAuthCheck wrapper
- **Flow Type**: InteractionType.Redirect for B2C compatibility
- **Configuration**: Runtime config.json for environment-specific settings

### Token Management System
- **Dual-Layer Caching**: MSAL native cache + custom tokenCache service
- **Storage Strategy**: localStorage with automatic expiry handling
- **Token Types**: idToken cached for API authentication
- **Lifecycle**: Automatic refresh and cleanup on logout

### Role-Based Authorization
- **Role Source**: API-based roles from UserClient.Get() response (not B2C claims)
- **Role Hierarchy**: 6-tier system (Manufacturer User → Super Admin)
- **Implementation**: Enum-based with permission checking functions
- **Route Protection**: RoleGuard components (replaced ProtectedRoute)

### Authentication Flow
1. **MsalAuthenticationTemplate** handles B2C authentication
2. **AppWithAuthCheck** intelligently processes redirects and accounts
3. **useProfile** hook loads complete user data from API
4. **AuthContext** provides authentication state to components
5. **RoleGuard** enforces role-based access on routes

### Logout System
- **Regular Logout**: Header menu → logout → B2C → redirect back to app
- **Forced Logout**: `/logout` route → immediate logout → stay on B2C page
- **Data Cleanup**: Comprehensive clearing of MSAL, localStorage, sessionStorage

## Application Structure

```
/current/work/
├── src/
│   ├── api/                          # Generated API client
│   │   ├── GreenOnion/              # Auto-generated from OpenAPI
│   │   │   ├── Clients/             # API client classes
│   │   │   ├── Models/              # TypeScript interfaces
│   │   │   ├── Schema/              # Zod validation schemas
│   │   │   └── index.ts             # Exports
│   │   ├── _ClientBase.ts           # Base client with token management
│   │   └── _GlobalState.ts          # Global API state
│   ├── components/                   # React components
│   │   ├── auth/                    # Authentication components
│   │   │   ├── LoginPage.tsx        # Azure B2C login interface
│   │   │   ├── ProtectedRoute.tsx   # Route protection wrapper
│   │   │   └── RoleGuard.tsx        # Role-based access control
│   │   ├── controls/                # Wrapped PrimeReact UI components
│   │   │   ├── Button.tsx           # Custom Button wrapper
│   │   │   ├── DataTable.tsx        # Custom DataTable wrapper
│   │   │   ├── Dialog.tsx           # Custom Dialog wrapper
│   │   │   ├── InputText.tsx        # Custom InputText wrapper
│   │   │   ├── Message.tsx          # Custom Message wrapper
│   │   │   ├── ProgressSpinner.tsx  # Custom ProgressSpinner wrapper
│   │   │   └── index.ts             # Component exports
│   │   └── layout/                  # Layout components
│   │       ├── AppHeader.tsx        # Navigation header with user menu
│   │       ├── AppSidebar.tsx       # Role-based sidebar navigation
│   │       ├── AppFooter.tsx        # Application footer
│   │       └── AppLayout.tsx        # Main layout wrapper
│   ├── contexts/                    # React contexts
│   │   └── AuthContext.tsx          # Authentication & user state management
│   ├── hooks/                       # Custom React hooks
│   │   ├── useAuth.ts              # Authentication hook
│   │   ├── useProfile.ts           # User profile data hook
│   │   └── useApplicationInsights.ts # Telemetry hook
│   ├── pages/                       # Page components
│   │   ├── Dashboard.tsx           # Main dashboard with charts
│   │   ├── Profile.tsx             # User profile page
│   │   └── Logout.tsx              # Forced logout page
│   ├── routes/                      # Routing configuration
│   │   └── AppRoutes.tsx           # Role-based route definitions
│   ├── styles/                      # Styling system
│   │   └── variables.css           # CSS custom properties
│   ├── types/                       # Type definitions
│   │   └── roles.ts                # Role enumeration and permissions
│   ├── utils/                       # Utility functions
│   │   ├── logger.ts               # Development-only logging system
│   │   └── monitoring.ts           # Performance monitoring
│   ├── services/                    # Application services
│   │   ├── tokenCache.ts           # JWT token caching service
│   │   ├── applicationInsights.ts  # Azure Application Insights service
│   │   ├── telemetryFallback.ts    # Console-based telemetry fallback
│   │   └── apiInterceptor.ts       # Automatic API call monitoring
│   ├── config/                      # Configuration files
│   │   ├── msalConfig.ts           # Azure B2C configuration factory
│   │   ├── appConfig.ts            # Runtime configuration manager
│   │   └── useConfig.ts            # Configuration React hook
│   ├── AppWithConfig.tsx           # Configuration-aware app wrapper
│   ├── App.tsx                      # Root application component
│   ├── App.css                      # Global styles
│   ├── main.tsx                     # Application entry point
│   └── index.css                    # Base CSS
├── public/                          # Static assets
│   └── config.json                 # Runtime configuration file
├── dist/                           # Build output
├── scripts/                        # Build and development scripts
├── config.example.json             # Configuration template
├── eslint.config.js                # ESLint configuration
├── vite.config.ts                  # Vite build configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Dependencies and scripts
├── TODO.md                         # Task tracking
├── CLAUDE.md                       # AI assistant memory
├── ARCHITECTURE.md                 # This file
├── CONFIGURATION.md                # Configuration guide
└── APPLICATION_INSIGHTS.md         # Telemetry integration guide
```

## Authentication Flow
1. **Unauthenticated Access**: Redirect to `/login`
2. **Azure B2C Login**: MSAL redirect to B2C tenant
3. **Token Acquisition**: Automatic token management
4. **Role Extraction**: Parse roles from B2C claims
5. **Route Protection**: Role-based access control
6. **API Authentication**: Tokens attached to API calls

## Routing Architecture
- **Public Routes**: `/login` - Authentication page
- **Protected Routes**: All other routes require authentication
- **Role-Based Access**: Admin, Manager, User roles with different permissions
- **Deep Linking**: Full URL support with proper authentication checks
- **Fallback Handling**: 404 pages and unauthorized access messages

## Logging System
- **Environment-Based**: Only active in development mode (NODE_ENV === 'development')
- **Structured Logging**: Categorized log levels (debug, info, warn, error)
- **Contextual Methods**: Specialized loggers (auth, api, storage, cleanup)
- **Visual Indicators**: Emoji prefixes for easy log identification
- **Production Safety**: Zero overhead in production builds
- **Advanced Features**: Grouping, timing, table output, assertions

### Usage Examples:
```typescript
import { logger } from '@/utils/logger';

// Basic logging
logger.info('Application started');
logger.error('Authentication failed', error);

// Contextual logging
logger.auth('User login attempt');
logger.api('API call completed');
logger.storage('Token cached successfully');
logger.cleanup('User data cleared');

// Advanced features
logger.group('Authentication Process');
logger.time('API Call Duration');
logger.table(userData);
```

## State Management
- **Authentication**: Context-based with MSAL integration
- **API State**: Generated clients with built-in state management
- **Local State**: React hooks for component-level state
- **Persistent Storage**: localStorage + sessionStorage for auth state

## Styling System
- **CSS Variables**: Centralized design tokens in `variables.css`
- **PrimeReact Theme**: Saga Blue theme with custom overrides
- **PrimeFlex**: Utility classes for layout and spacing
- **Responsive Design**: Mobile-first approach with breakpoints
- **Component Styles**: Scoped styling within components

## API Integration
- **Generated Client**: Auto-generated from OpenAPI/Swagger
- **Type Safety**: Full TypeScript interfaces and Zod validation
- **Authentication**: Azure B2C tokens automatically attached
- **Error Handling**: Centralized error management
- **Caching**: Built-in request caching and deduplication

## Build & Development
- **Development**: `npm run dev` (Vite dev server with HMR)
- **Build**: `npm run build` (TypeScript + Vite production build)  
- **Linting**: `npm run lint` (ESLint with TypeScript rules)
- **Type Checking**: `npm run typecheck` (TypeScript compiler)
- **Testing**: Vitest framework with Playwright E2E tests

## Security Considerations
- **Authentication**: Azure B2C enterprise-grade security
- **Authorization**: Role-based access control
- **Token Security**: Secure token storage and automatic refresh  
- **API Security**: Bearer token authentication
- **XSS Protection**: React's built-in XSS protection
- **CSRF Protection**: SameSite cookie attributes

## Performance Optimizations
- **Code Splitting**: React Router lazy loading
- **Bundle Analysis**: Vite bundle analyzer
- **Asset Optimization**: Automatic image and CSS optimization
- **Caching**: Browser caching for static assets
- **Tree Shaking**: Automatic dead code elimination

## Development Standards
- **TypeScript**: Strict type checking enabled
- **ESLint**: Comprehensive linting rules
- **Code Formatting**: Consistent code style
- **Component Architecture**: Functional components with hooks
- **Error Boundaries**: Graceful error handling
- **Accessibility**: ARIA labels and keyboard navigation support
- **Import Paths**: Use absolute imports with `@/` prefix for all internal modules
- **UI Component Wrapping**: All PrimeReact components must be wrapped in `@/components/controls`

### Import Path Standards
**REQUIRED**: Use appropriate import paths based on file relationships:

**✅ Correct Examples:**
```typescript
// Absolute paths for cross-directory imports
import { useAuth } from '@/hooks/useAuth';
import { AuthContext } from '@/contexts/AuthContext';
import { msalConfig } from '@/config/msalConfig';
import { Dashboard } from '@/pages/Dashboard';

// Relative paths for sibling files (same directory)
import { AppHeader } from './AppHeader';
import { AppSidebar } from './AppSidebar';
import { Button } from './Button';
import { Card } from './Card';
```

**❌ Incorrect Examples:**
```typescript
// Deep relative paths (use @/ instead)
import { useAuth } from '../../hooks/useAuth';
import { AuthContext } from '../../../contexts/AuthContext';

// Absolute paths for siblings (use ./ instead)
import { AppHeader } from '@/components/layout/AppHeader'; // when in same directory
import { Button } from '@/components/controls/Button'; // when in same directory
```

**Import Path Rules:**
1. **Sibling Files**: Use `./filename` for files in the same directory
2. **Cross-Directory**: Use `@/directory/filename` for files in different directories
3. **Never Use**: Deep relative paths like `../../` or `../../../`

**Path Mapping Configuration:**
- `@/` maps to `src/` directory
- Configured in `tsconfig.json` and build tools
- Provides consistent, maintainable import paths
- Improves refactoring and IDE navigation

### PrimeReact Component Wrapping Standards
**CRITICAL REQUIREMENT**: All PrimeReact components used in the application must be wrapped by custom components in `@/components/controls`.

**✅ Correct Pattern:**
```typescript
// In @/components/controls/Button.tsx
import { Button as PrimeButton } from 'primereact/button';
import type { ButtonProps as PrimeButtonProps } from 'primereact/button';

interface ButtonProps extends PrimeButtonProps {
  // Add custom props if needed
}

export const Button: React.FC<ButtonProps> = (props) => {
  return <PrimeButton {...props} />;
};

// In application components
import { Button } from '@/components/controls';
```

**❌ Forbidden Pattern:**
```typescript
// Direct import of PrimeReact components in application code
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
```

**Wrapper Component Benefits:**
- **Consistent Theming**: Centralized styling and theme customization
- **Custom Logic**: Add application-specific behavior and validation
- **Props Enhancement**: Extend PrimeReact props with custom functionality
- **Future-Proofing**: Easy to replace or upgrade UI library
- **Brand Consistency**: Ensure all components follow design system
- **Type Safety**: Enhanced TypeScript interfaces for better DX

**Required Wrapper Structure:**
- **Location**: `src/components/controls/`
- **Naming**: Match PrimeReact component names (Button, DataTable, etc.)
- **Exports**: Use barrel exports from `@/components/controls/index.ts`
- **Props**: Extend PrimeReact props interfaces when needed
- **Documentation**: JSDoc comments for custom props and behavior

## Architecture Change Log

### 2025-07-28 - Initial Application Setup
**Changes Made:**
- Implemented Azure B2C authentication with MSAL React
- Added React Router DOM for navigation routing
- Integrated PrimeReact UI component library
- Created centralized CSS variables system
- Implemented role-based authorization
- Added deep linking support
- Created responsive layout system

**Files Added:**
- `src/config/msalConfig.ts` - Azure B2C configuration
- `src/contexts/AuthContext.tsx` - Authentication state management
- `src/hooks/useAuth.ts` - Authentication hook
- `src/components/auth/` - Authentication components
- `src/components/layout/` - Layout component system
- `src/routes/AppRoutes.tsx` - Protected routing configuration
- `src/pages/Dashboard.tsx` - Main dashboard
- `src/styles/variables.css` - CSS custom properties
- `.env.example` - Environment configuration template

**Dependencies Added:**
- `@azure/msal-browser`: ^4.16.0 - Azure B2C authentication
- `@azure/msal-react`: ^3.0.16 - React integration for MSAL
- `react-router-dom`: ^7.7.1 - Client-side routing
- `@types/react-router-dom`: ^5.3.3 - TypeScript definitions
- `chart.js`: ^4.5.0 - Chart rendering for dashboard
- `primeflex`: ^4.0.0 - CSS utility framework

**Configuration Changes:**
- Updated `eslint.config.js` to ignore generated API client files
- Modified `src/main.tsx` to include MSAL provider
- Updated `src/App.tsx` with routing and authentication providers

**Architecture Decisions:**
- Chose Context API over Redux for authentication state (simpler for current needs)
- Implemented redirect-based authentication flow for better browser compatibility
- Used CSS custom properties for centralized theming
- Created hierarchical role system (Admin > Manager > User)
- Separated authentication hook for React Fast Refresh compatibility

**Impact:**
- Established foundation for secure, role-based application
- Created scalable component architecture
- Implemented responsive design system
- Set up development standards and tooling

---

### 2025-07-28 - Runtime Configuration System
**Changes Made:**
- Replaced .env environment variables with runtime config.json system
- Implemented post-build configuration capability
- Added configuration validation and error handling
- Created configuration management infrastructure

**Files Added:**
- `public/config.json` - Runtime configuration file
- `src/config/appConfig.ts` - Configuration management class
- `src/config/useConfig.ts` - React hook for configuration
- `src/AppWithConfig.tsx` - Configuration-aware app wrapper
- `config.example.json` - Configuration template
- `CONFIGURATION.md` - Comprehensive configuration guide

**Files Modified:**
- `src/config/msalConfig.ts` - Updated to use runtime config
- `src/contexts/AuthContext.tsx` - Updated to use runtime config
- `src/main.tsx` - Updated entry point to load config first

**Files Removed:**
- `.env.example` - Replaced with config.example.json

**Architecture Decisions:**
- **Runtime Configuration**: Chose JSON over environment variables for post-build flexibility
- **Async Loading**: Configuration loaded asynchronously before app initialization
- **Graceful Fallback**: Error handling with fallback configuration and retry mechanism
- **Validation**: Client-side validation of configuration completeness
- **Caching**: Configuration cached after first load for performance

**Impact:**
- **Deployment Flexibility**: Single build can be deployed to multiple environments
- **Zero-Downtime Updates**: Configuration changes without application rebuild
- **Better DevOps**: Simplified CI/CD pipeline with environment-specific configs
- **Error Resilience**: Graceful handling of configuration loading failures
- **Development Experience**: Clear error messages and troubleshooting guidance

---

### 2025-07-28 - Application Insights Integration
**Changes Made:**
- Integrated Azure Application Insights for comprehensive telemetry
- Added automatic API call tracking and error monitoring
- Implemented custom business event tracking
- Created performance monitoring infrastructure
- Added user authentication and session tracking

**Files Added:**
- `src/services/applicationInsights.ts` - Application Insights service wrapper
- `src/services/apiInterceptor.ts` - Automatic API call tracking
- `src/hooks/useApplicationInsights.ts` - React hook for telemetry
- `APPLICATION_INSIGHTS.md` - Comprehensive integration guide

**Files Modified:**
- `src/config/appConfig.ts` - Added Application Insights configuration schema
- `src/AppWithConfig.tsx` - Initialize Application Insights with configuration
- `src/contexts/AuthContext.tsx` - Track authentication events and user context
- `src/pages/Dashboard.tsx` - Added telemetry tracking examples
- `public/config.json` - Added Application Insights configuration
- `config.example.json` - Added Application Insights template
- `CONFIGURATION.md` - Added Application Insights setup instructions

**Dependencies Added:**
- `@microsoft/applicationinsights-web`: ^3.3.9 - Core Application Insights SDK
- `@microsoft/applicationinsights-react-js`: ^19.3.7 - React integration
- `history`: ^5.3.0 - Browser history for route tracking

**Architecture Decisions:**
- **Comprehensive Telemetry**: Track all user interactions, API calls, and errors
- **Automatic Instrumentation**: Intercept fetch/XHR requests for automatic tracking
- **Privacy-First**: No PII tracking, focus on business metrics and performance
- **Custom Events**: Business-specific event tracking for analytics
- **Performance Monitoring**: Track page load times, API response times
- **Error Tracking**: Comprehensive error and exception handling

**Impact:**
- **Observability**: Full visibility into application performance and usage
- **Business Intelligence**: Data-driven insights into feature usage and user behavior
- **Performance Optimization**: Identify bottlenecks and optimization opportunities
- **Error Monitoring**: Proactive error detection and resolution
- **User Experience**: Track and improve user journey and satisfaction
- **DevOps Integration**: Monitor deployment success and rollback triggers

---

### 2025-07-28 - Application Insights Error Resolution & Fallback System
**Changes Made:**
- Resolved Application Insights configuration loading error
- Implemented comprehensive fallback telemetry system
- Added enhanced error handling and debugging capabilities
- Fixed localhost endpoint compatibility issues
- Created resilient telemetry infrastructure

**Files Modified:**
- `src/services/applicationInsights.ts` - Enhanced error handling and fallback system
- `src/services/telemetryFallback.ts` - Improved fallback telemetry with better browser detection
- `src/config/appConfig.ts` - Added debug logging for configuration loading
- `src/AppWithConfig.tsx` - Enhanced Application Insights initialization error handling

**Architecture Decisions:**
- **Graceful Degradation**: Application continues to function even if Application Insights fails
- **Fallback Telemetry**: Console-based telemetry in development and when AI is unavailable
- **Localhost Compatibility**: Handle local development environments with custom AI endpoints
- **Comprehensive Error Handling**: All telemetry methods check for fallback mode
- **Debug Logging**: Enhanced logging to troubleshoot configuration issues

**Impact:**
- **Reliability**: Application no longer crashes due to telemetry configuration issues
- **Development Experience**: Clear error messages and fallback behavior in development
- **Production Resilience**: Telemetry failures don't affect core application functionality
- **Debugging Capability**: Enhanced logging helps identify and resolve configuration issues
- **Flexibility**: Works with both cloud and local Application Insights endpoints

---

### 2025-07-29 - Edit User Screens & Property Editor Implementation
**Changes Made:**
- Created two comprehensive edit user screens with different approaches
- Implemented dynamic form generation system
- Added action columns to data tables
- Enhanced UI component library with missing controls
- Updated routing and navigation for user management

**Files Added:**
- `src/pages/EditUserDynamic.tsx` - Dynamic form-based user editing
- `src/pages/EditUserPanel.tsx` - Panel-based structured user editing
- `src/components/forms/DynamicForm.tsx` - Reusable schema-driven form generator
- `src/components/controls/InputTextarea.tsx` - Textarea control wrapper
- `src/components/controls/Fieldset.tsx` - Fieldset control wrapper
- `src/components/controls/Panel.tsx` - Panel control wrapper

**Files Modified:**
- `src/pages/UsersList.tsx` - Added action buttons linking to both edit forms
- `src/components/controls/GenericDataTable.tsx` - Added action column support
- `src/components/controls/index.ts` - Added new control exports
- `src/routes/AppRoutes.tsx` - Added routes for edit user screens
- `src/api/GreenOnion/Schema/ZQueryUserModel.ts` - Fixed nullable field handling
- `src/contexts/AuthContext.tsx` - Enhanced user object with username property

**Architecture Decisions:**
- **Dual Approach**: Implemented both dynamic and panel-based editing for comparison
- **Schema-Driven Forms**: Used Zod schemas for automatic form generation and validation
- **Component Wrapping**: Maintained PrimeReact component wrapping pattern
- **Type Safety**: Enhanced type definitions to eliminate build errors
- **Role-Based Access**: Protected edit functionality with admin role requirements

**Impact:**
- **User Management**: Complete CRUD functionality for user editing
- **Development Patterns**: Established patterns for property editing in the application
- **Flexibility**: Developers can choose between dynamic or structured form approaches
- **Maintainability**: Reusable form components reduce development time
- **Type Safety**: Improved TypeScript compliance across the application

---

### 2025-07-29 - Sidebar Hover Menus & Enhanced Navigation
**Changes Made:**
- Implemented sophisticated hover popup menus for collapsed sidebar
- Created tooltip system for single menu items
- Enhanced sidebar UX with animations and responsive design
- Restructured navigation hierarchy for better usability

**Files Added:**
- `src/components/layout/SidebarHoverMenu.tsx` - Popup menu component for grouped items
- `src/components/layout/SimpleTooltip.tsx` - Tooltip component for single items

**Files Modified:**
- `src/components/layout/AppSidebar.tsx` - Integrated hover functionality and restructured navigation
- `src/App.css` - Added animations, styling, and responsive design for hover menus

**Architecture Decisions:**
- **Progressive Enhancement**: Hover functionality only active when sidebar is collapsed
- **Intelligent Positioning**: Dynamic positioning to prevent screen cutoffs
- **Responsive Design**: Mobile-first approach with hover functionality disabled on touch devices
- **Performance Optimization**: Efficient event handling with proper cleanup
- **Navigation Hierarchy**: Moved Users to top-level for better accessibility

**Impact:**
- **User Experience**: Significantly improved navigation in collapsed sidebar state
- **Accessibility**: Better organization of menu items and clearer navigation paths
- **Performance**: Smooth animations without affecting application performance
- **Mobile Compatibility**: Responsive design ensures functionality across all devices
- **Maintainability**: Clean component architecture for future navigation enhancements

---

### Future Changes
**IMPORTANT**: All future architecture changes MUST be documented here with:
- Date and description of changes
- Files added, modified, or removed
- Dependencies added or updated
- Configuration changes
- Architecture decisions and reasoning
- Impact assessment

**Template for Future Entries:**
```
### YYYY-MM-DD - Change Description
**Changes Made:**
- Brief description of what was changed

**Files Modified:**
- List of files added/modified/removed

**Dependencies:**
- New dependencies added or updated

**Architecture Decisions:**
- Key decisions made and reasoning

**Impact:**
- How this affects the overall system
```