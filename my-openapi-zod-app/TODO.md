# GreenOnion Application TODO List

## Completed Tasks ✅

### High Priority
- [x] Review application structure and existing code
- [x] Analyze src/api/GreenOnion generated client structure
- [x] Install React Router for navigation
- [x] Create authentication context and user management (Azure B2C with MSAL)
- [x] Set up routing system with role-based guards
- [x] Enable deep linking functionality

### Medium Priority
- [x] Set up centralized styles with CSS variables
- [x] Create main layout with PrimeReact components
- [x] Test the application and verify functionality

## Future Enhancements 🚀

### Authentication & Security
- [ ] Implement token refresh logic
- [ ] Add session timeout handling
- [ ] Configure API client authentication headers
- [ ] Add role synchronization with backend
- [ ] Implement audit logging for user actions

### UI/UX Improvements
- [ ] Add loading states for all data operations
- [ ] Implement error boundaries
- [ ] Add toast notifications for user feedback
- [ ] Create responsive mobile navigation
- [ ] Add dark mode support
- [ ] Implement accessibility features (ARIA labels, keyboard navigation)

### Data & API Integration
- [ ] Replace mock data with real API calls in Dashboard
- [ ] Implement CRUD operations for Products
- [ ] Add data validation using Zod schemas
- [ ] Implement pagination for data tables
- [ ] Add search and filtering capabilities
- [ ] Create data export functionality

### Feature Development
- [ ] Build Products management pages
- [ ] Create Categories management interface
- [ ] Develop Ingredients management system
- [ ] Build Allergens management features
- [ ] Implement Reports and analytics
- [ ] Create Admin user management interface
- [ ] Add file upload functionality
- [ ] Build notification system

### Performance & Optimization
- [ ] Implement code splitting for better performance
- [ ] Add service worker for offline support
- [ ] Optimize bundle size
- [ ] Add image optimization
- [ ] Implement caching strategies
- [ ] Add performance monitoring

### Testing
- [ ] Write unit tests for components
- [ ] Add integration tests for auth flow
- [ ] Create E2E tests with Playwright
- [ ] Add API client tests
- [ ] Implement visual regression testing

### DevOps & Deployment
- [ ] Set up CI/CD pipeline
- [ ] Configure environment-specific builds
- [ ] Add Docker support
- [ ] Set up monitoring and logging
- [ ] Configure error tracking (Sentry)
- [ ] Add performance monitoring

## Configuration Required 🔧

### Azure B2C Setup
- [X] Create Azure B2C tenant
- [X] Configure user flows
- [X] Set up application registration
- [X] Configure redirect URIs
- [X] Update config.json with Azure B2C settings

### Runtime Configuration Setup
- [x] Copy config.example.json to public/config.json
- [x] Configure Azure B2C settings in config.json
- [x] Configure API base URL
- [X] Set up environment-specific configurations
- [X] Test configuration loading and validation

### Deployment Configuration
- [X] Create environment-specific config files
- [ ] Set up configuration injection for containers
- [ ] Document configuration management procedures

## Known Issues 🐛

- [ ] Chart.js bundle size warning - consider lazy loading
- [ ] ESLint warning for AuthContext export - consider separating context from provider
- [ ] Need to implement proper error handling for MSAL token acquisition

## Recent Changes ✨

### 2025-07-28 - Runtime Configuration System
- [x] Replaced .env files with runtime config.json system
- [x] Implemented post-build configuration capability
- [x] Added configuration validation and error handling
- [x] Created comprehensive configuration documentation

## Notes 📝

- Generated API client files are ignored in ESLint configuration
- Application uses PrimeReact Saga Blue theme
- CSS variables are centralized in `src/styles/variables.css`
- Role-based routing is implemented with ProtectedRoute component
- Deep linking is supported through React Router
- **Runtime Configuration**: App now uses `public/config.json` for all settings
- **Post-Build Config**: Configuration can be changed without rebuilding
- **Environment Flexibility**: Single build works across all environments