# GreenOnion Application Architecture

## Technology Stack
- **Frontend Framework**: React 19.1.0
- **UI Library**: PrimeReact 10.9.6 with PrimeFlex utilities
- **Authentication**: Azure B2C with MSAL React
- **Routing**: React Router DOM 7.7.1
- **Build Tool**: Vite 7.0.6
- **Language**: TypeScript 5.8.3
- **API Client**: Generated TypeScript client with Zod validation
- **Charts**: Chart.js 4.5.0
- **Styling**: CSS Variables + PrimeReact Saga Blue theme

## Authentication Architecture
- **Provider**: Azure B2C with MSAL browser library
- **Token Management**: Automatic token acquisition and refresh
- **Role-Based Access**: Claims-based authorization from B2C tokens
- **Session Management**: Browser session storage for MSAL cache

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
│   │   ├── _ClientBase.ts           # Base client functionality
│   │   └── _GlobalState.ts          # Global API state
│   ├── components/                   # React components
│   │   ├── auth/                    # Authentication components
│   │   │   ├── LoginPage.tsx        # Azure B2C login interface
│   │   │   └── ProtectedRoute.tsx   # Route protection wrapper
│   │   └── layout/                  # Layout components
│   │       ├── AppHeader.tsx        # Navigation header
│   │       ├── AppSidebar.tsx       # Role-based sidebar
│   │       ├── AppFooter.tsx        # Application footer
│   │       └── AppLayout.tsx        # Main layout wrapper
│   ├── contexts/                    # React contexts
│   │   └── AuthContext.tsx          # Authentication state management
│   ├── hooks/                       # Custom React hooks
│   │   └── useAuth.ts              # Authentication hook
│   ├── pages/                       # Page components
│   │   └── Dashboard.tsx            # Main dashboard with charts
│   ├── routes/                      # Routing configuration
│   │   └── AppRoutes.tsx           # Protected route definitions
│   ├── styles/                      # Styling system
│   │   └── variables.css           # CSS custom properties
│   ├── utils/                       # Utility functions
│   │   └── monitoring.ts           # Performance monitoring
│   ├── config/                      # Configuration files
│   │   └── msalConfig.ts           # Azure B2C configuration
│   ├── App.tsx                      # Root application component
│   ├── App.css                      # Global styles
│   ├── main.tsx                     # Application entry point
│   └── index.css                    # Base CSS
├── public/                          # Static assets
├── dist/                           # Build output
├── scripts/                        # Build and development scripts
├── .env.example                    # Environment template
├── eslint.config.js                # ESLint configuration
├── vite.config.ts                  # Vite build configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Dependencies and scripts
├── TODO.md                         # Task tracking
├── CLAUDE.md                       # AI assistant memory
└── ARCHITECTURE.md                 # This file
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

## State Management
- **Authentication**: Context-based with MSAL integration
- **API State**: Generated clients with built-in state management
- **Local State**: React hooks for component-level state
- **Persistent Storage**: MSAL session storage for auth state

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