# ARCHITECTURE.md Compliance Fixes

This file contains tasks to bring the application into compliance with ARCHITECTURE.md standards.

## ❌ Critical Issues Found

### 1. Relative Import Violations
**PRIORITY: HIGH** - Convert all relative imports to absolute `@/` imports

#### Files with relative imports:
- `src/main.tsx:3` - `./AppWithConfig` → `@/AppWithConfig`
- `src/routes/AppRoutes.tsx:3-6` - Multiple relative imports:
  - `../components/layout/AppLayout` → `@/components/layout/AppLayout`
  - `../components/auth/ProtectedRoute` → `@/components/auth/ProtectedRoute`
  - `../components/auth/LoginPage` → `@/components/auth/LoginPage`
  - `../pages/Dashboard` → `@/pages/Dashboard`
- `src/pages/Dashboard.tsx:7` - `../hooks/useAuth` → `@/hooks/useAuth`
- `src/App.tsx:3-4` - Multiple relative imports:
  - `./contexts/AuthContext` → `@/contexts/AuthContext`
  - `./routes/AppRoutes` → `@/routes/AppRoutes`
- `src/contexts/AuthContext.tsx:5-7` - Multiple relative imports:
  - `../config/appConfig` → `@/config/appConfig`
  - `../config/msalConfig` → `@/config/msalConfig`
  - `../services/applicationInsights` → `@/services/applicationInsights`
- `src/hooks/useAuth.ts:2` - `../contexts/AuthContext` → `@/contexts/AuthContext`
- `src/services/applicationInsights.ts:5` - `./telemetryFallback` → `@/services/telemetryFallback`
- `src/services/apiInterceptor.ts:1` - `./applicationInsights` → `@/services/applicationInsights`
- `src/AppWithConfig.tsx:7-11` - Multiple relative imports:
  - `./config/appConfig` → `@/config/appConfig`
  - `./config/msalConfig` → `@/config/msalConfig`
  - `./App` → `@/App`
- `src/components/auth/ProtectedRoute.tsx:3` - `../../hooks/useAuth` → `@/hooks/useAuth`
- `src/components/MonitoringDashboard.tsx:2-3` - Multiple relative imports:
  - `../utils/monitoring` → `@/utils/monitoring`
- `src/components/auth/LoginPage.tsx:7` - `../../hooks/useAuth` → `@/hooks/useAuth`
- `src/components/layout/AppSidebar.tsx:2` - `../../hooks/useAuth` → `@/hooks/useAuth`
- `src/components/layout/AppHeader.tsx:7` - `../../hooks/useAuth` → `@/hooks/useAuth`
- `src/components/layout/AppLayout.tsx:3-5,7` - Multiple relative imports:
  - `./AppHeader` → `@/components/layout/AppHeader`
  - `./AppSidebar` → `@/components/layout/AppSidebar`
  - `./AppFooter` → `@/components/layout/AppFooter`
  - `../../hooks/useAuth` → `@/hooks/useAuth`

### 2. Direct PrimeReact Import Violations
**PRIORITY: CRITICAL** - All PrimeReact components must be wrapped in `@/components/controls`

#### Files with direct PrimeReact imports:
- `src/App.tsx:2` - `PrimeReactProvider` (acceptable - core provider)
- `src/AppWithConfig.tsx:4-5` - **VIOLATION**:
  - `ProgressSpinner` from `primereact/progressspinner` → Create `@/components/controls/ProgressSpinner`
  - `Message` from `primereact/message` → Create `@/components/controls/Message`
- `src/pages/Dashboard.tsx:2-6` - **MAJOR VIOLATIONS**:
  - `Card` from `primereact/card` → Create `@/components/controls/Card`
  - `Chart` from `primereact/chart` → Create `@/components/controls/Chart`
  - `DataTable` from `primereact/datatable` → Create `@/components/controls/DataTable`
  - `Column` from `primereact/column` → Create `@/components/controls/Column`
  - `Button` from `primereact/button` → Use existing `@/components/controls/Button`
- `src/components/auth/ProtectedRoute.tsx:4-5` - **VIOLATIONS**:
  - `ProgressSpinner` from `primereact/progressspinner` → Use `@/components/controls/ProgressSpinner`
  - `Message` from `primereact/message` → Use `@/components/controls/Message`
- `src/components/auth/LoginPage.tsx:3-6` - **VIOLATIONS**:
  - `Card` from `primereact/card` → Use `@/components/controls/Card`
  - `Button` from `primereact/button` → Use `@/components/controls/Button`
  - `Message` from `primereact/message` → Use `@/components/controls/Message`
  - `ProgressSpinner` from `primereact/progressspinner` → Use `@/components/controls/ProgressSpinner`
- `src/components/layout/AppLayout.tsx:6` - **VIOLATION**:
  - `ProgressSpinner` from `primereact/progressspinner` → Use `@/components/controls/ProgressSpinner`
- `src/components/layout/AppHeader.tsx:2-5` - **VIOLATIONS**:
  - `Toolbar` from `primereact/toolbar` → Create `@/components/controls/Toolbar`
  - `Button` from `primereact/button` → Use `@/components/controls/Button`
  - `Avatar` from `primereact/avatar` → Create `@/components/controls/Avatar`
  - `Menu` from `primereact/menu` → Create `@/components/controls/Menu`

### 3. Missing Wrapper Components
**PRIORITY: HIGH** - Create the following wrapper components in `@/components/controls/`:

#### Required Wrapper Components:
1. `Card.tsx` - Wrap `primereact/card`
2. `Chart.tsx` - Wrap `primereact/chart`
3. `DataTable.tsx` - Wrap `primereact/datatable`
4. `Column.tsx` - Wrap `primereact/column`
5. `ProgressSpinner.tsx` - Wrap `primereact/progressspinner`
6. `Message.tsx` - Wrap `primereact/message`
7. `Toolbar.tsx` - Wrap `primereact/toolbar`
8. `Avatar.tsx` - Wrap `primereact/avatar`
9. `Menu.tsx` - Wrap `primereact/menu`

#### Update Controls Index
- Update `src/components/controls/index.ts` to export all wrapper components
- Fix existing `Button` export (currently uses `default as Button`, should be named export)

### 4. Controls Directory Issues
**PRIORITY: MEDIUM** - Fix existing controls structure

#### Issues:
- `src/components/controls/index.ts:1` - Uses `default as Button` instead of named export
- Missing proper TypeScript interfaces for wrapper components

## ✅ Compliance Checklist

### Phase 1: Create Missing Wrapper Components ✅ COMPLETE
- [x] Create `@/components/controls/Card.tsx`
- [x] Create `@/components/controls/Chart.tsx`
- [x] Create `@/components/controls/DataTable.tsx`
- [x] Create `@/components/controls/Column.tsx`
- [x] Create `@/components/controls/ProgressSpinner.tsx`
- [x] Create `@/components/controls/Message.tsx`
- [x] Create `@/components/controls/Toolbar.tsx`
- [x] Create `@/components/controls/Avatar.tsx`
- [x] Create `@/components/controls/Menu.tsx`
- [x] Update `@/components/controls/index.ts` with all exports
- [x] Fix Button.tsx to use named export instead of default export

### Phase 2: Convert Relative Imports to Absolute
- [ ] Fix `src/main.tsx` imports
- [ ] Fix `src/routes/AppRoutes.tsx` imports
- [ ] Fix `src/pages/Dashboard.tsx` imports
- [ ] Fix `src/App.tsx` imports
- [ ] Fix `src/contexts/AuthContext.tsx` imports
- [ ] Fix `src/hooks/useAuth.ts` imports
- [ ] Fix `src/services/applicationInsights.ts` imports
- [ ] Fix `src/services/apiInterceptor.ts` imports
- [ ] Fix `src/AppWithConfig.tsx` imports
- [ ] Fix all `src/components/auth/` file imports
- [ ] Fix all `src/components/layout/` file imports
- [ ] Fix `src/components/MonitoringDashboard.tsx` imports

### Phase 3: Replace Direct PrimeReact Imports
- [ ] Update `src/AppWithConfig.tsx` to use wrapper components
- [ ] Update `src/pages/Dashboard.tsx` to use wrapper components
- [ ] Update `src/components/auth/ProtectedRoute.tsx` to use wrapper components
- [ ] Update `src/components/auth/LoginPage.tsx` to use wrapper components
- [ ] Update `src/components/layout/AppLayout.tsx` to use wrapper components
- [ ] Update `src/components/layout/AppHeader.tsx` to use wrapper components

### Phase 4: Verification
- [ ] Run TypeScript compilation check (`npm run typecheck`)
- [ ] Run ESLint check (`npm run lint`)
- [ ] Test application functionality (`npm run dev`)
- [ ] Verify all imports follow `@/` pattern
- [ ] Verify no direct PrimeReact imports exist (except PrimeReactProvider)

## Implementation Notes

### Wrapper Component Template:
```typescript
// @/components/controls/ComponentName.tsx
import { ComponentName as PrimeComponent } from 'primereact/componentname';
import type { ComponentNameProps as PrimeComponentProps } from 'primereact/componentname';

export interface ComponentNameProps extends PrimeComponentProps {
  // Add custom props if needed
}

export const ComponentName: React.FC<ComponentNameProps> = (props) => {
  return <PrimeComponent {...props} />;
};
```

### Index Export Pattern:
```typescript
// @/components/controls/index.ts
export { Button } from './Button';
export { Card } from './Card';
export { Chart } from './Chart';
export { DataTable } from './DataTable';
export { Column } from './Column';
export { ProgressSpinner } from './ProgressSpinner';
export { Message } from './Message';
export { Toolbar } from './Toolbar';
export { Avatar } from './Avatar';
export { Menu } from './Menu';
```

## Success Criteria
- ✅ Zero relative imports in application code
- ✅ All PrimeReact components accessed through `@/components/controls`
- ✅ TypeScript compilation passes
- ✅ Application functions correctly
- ✅ Follows ARCHITECTURE.md standards

## Estimated Effort
- **Phase 1**: 2-3 hours (Create wrapper components)
- **Phase 2**: 1-2 hours (Convert relative imports)
- **Phase 3**: 2-3 hours (Replace PrimeReact imports)
- **Phase 4**: 1 hour (Testing and verification)
- **Total**: 6-9 hours