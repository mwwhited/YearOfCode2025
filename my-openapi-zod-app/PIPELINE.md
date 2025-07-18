# Build Pipeline & CI/CD Documentation

## Overview

This project implements a comprehensive build pipeline and CI/CD system with quality gates, automated testing, and deployment workflows.

## Local Build Pipeline

### Enhanced Build Script
```bash
npm run build:pipeline
```

**Features:**
- TypeScript compilation validation
- ESLint code quality checks
- Unit and integration tests
- Coverage reporting with thresholds
- Production build generation
- Build size reporting
- Security audit integration

**Options:**
```bash
./scripts/build-pipeline.sh --skip-tests        # Skip test execution
./scripts/build-pipeline.sh --skip-coverage     # Skip coverage generation  
./scripts/build-pipeline.sh --production        # Production build mode
```

## Git Hooks

### Pre-commit Hook
Runs automatically on `git commit`:
- ESLint with auto-fix
- TypeScript compilation check
- Unit tests for changed files
- Code formatting with Prettier

### Pre-push Hook
Runs automatically on `git push`:
- Full TypeScript compilation
- Complete test suite
- Build validation

## CI/CD Pipeline

### GitHub Actions Workflow
Located at `.github/workflows/ci.yml`

**Jobs:**
1. **Quality Checks** - TypeScript, ESLint, tests (Node 18.x, 20.x)
2. **Coverage Report** - Generate and upload coverage reports
3. **Build Test** - Validate build process and size
4. **Security Audit** - NPM security audit
5. **Deployment** - Staging and production deployments

### Automated Features
- **PR Comments**: Coverage reports and build size info
- **Artifact Upload**: Build files and coverage reports
- **Multi-Node Testing**: Node 18.x and 20.x compatibility
- **Codecov Integration**: Coverage tracking and reporting

## Coverage Configuration

### Thresholds
- **Lines**: 70%
- **Statements**: 70%
- **Functions**: 70%
- **Branches**: 70%

### Reports Generated
- **HTML**: Visual coverage report
- **JSON**: Machine-readable coverage data
- **LCOV**: Industry standard format
- **Text**: Console output

### Exclusions
- Test files (`**/*.test.{ts,tsx}`)
- Configuration files (`**/*.config.{ts,js}`)
- Node modules and build artifacts
- Setup and utility files

## Deployment Pipeline

### Staging Deployment
```bash
npm run deploy:staging
```

**Process:**
1. Run quality gates
2. Security audit
3. Coverage validation
4. Build generation
5. Staging deployment
6. Health checks

### Production Deployment
```bash
npm run deploy:production
```

**Process:**
1. All staging checks
2. User confirmation required
3. Production build
4. Production deployment
5. Post-deployment validation
6. Deployment reporting

## Quality Gates

### Type Safety
- TypeScript compilation without errors
- Strict mode enabled
- Type inference validation

### Code Quality
- ESLint validation
- Prettier formatting
- Import organization
- Unused variable detection

### Testing
- Unit test coverage (70% minimum)
- Integration test validation
- Component testing
- API client testing

### Security
- NPM audit for vulnerabilities
- Dependency checking
- Security level configuration

## Pipeline Scripts

### build-pipeline.sh
Comprehensive build process with quality checks and reporting.

### deploy-pipeline.sh
Deployment automation with environment-specific configurations.

### organize-tests.sh
Test organization and validation utilities.

### refactor-components.sh
Component refactoring automation tools.

## Configuration Files

### .lintstagedrc.js
Pre-commit hook configuration for lint-staged.

### .husky/
Git hooks configuration directory.

### vitest.config.ts
Test runner and coverage configuration.

### .github/workflows/ci.yml
GitHub Actions CI/CD pipeline definition.

## Usage Examples

### Development Workflow
```bash
# Start development
npm run dev

# Run tests during development
npm run test:watch:unit

# Before committing (automatic via pre-commit hook)
npm run lint
npm run typecheck

# Before pushing (automatic via pre-push hook)
npm run test:run
npm run build
```

### Release Workflow
```bash
# Run full pipeline
npm run build:pipeline

# Deploy to staging
npm run deploy:staging

# Deploy to production (requires confirmation)
npm run deploy:production
```

### Quality Assurance
```bash
# Generate coverage report
npm run test:coverage

# Run security audit
npm audit

# Full quality check
npm run check-types
```

## Monitoring and Reporting

### Build Reports
- Generated automatically in `build-report.md`
- Includes build size, test results, and configuration
- Available as CI/CD artifacts

### Coverage Reports
- HTML report in `coverage/` directory
- JSON summary for automation
- LCOV format for external tools

### Deployment Reports
- Generated in `deployment-report.md`
- Includes deployment status and health checks
- Environment-specific information

## Best Practices

1. **Always run local pipeline** before pushing
2. **Review coverage reports** for quality insights
3. **Monitor build sizes** to prevent bloat
4. **Use staging deployments** for validation
5. **Require production confirmations** for safety
6. **Keep security audits** up to date
7. **Review pipeline logs** for optimization opportunities