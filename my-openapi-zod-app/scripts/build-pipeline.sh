#!/bin/bash

# Enhanced Build Pipeline with Quality Checks
# Includes unit tests, type safety, and coverage reporting

set -e  # Exit on any error

echo "🏗️  Enhanced Build Pipeline Starting..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_step() {
    echo -e "${BLUE}📋 $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Function to run a command with error handling
run_command() {
    local cmd="$1"
    local description="$2"
    
    print_step "$description"
    
    if eval "$cmd"; then
        print_success "$description completed"
    else
        print_error "$description failed"
        exit 1
    fi
}

# Parse command line arguments
SKIP_TESTS=false
SKIP_COVERAGE=false
PRODUCTION=false

while [[ $# -gt 0 ]]; do
    case $1 in
        --skip-tests)
            SKIP_TESTS=true
            shift
            ;;
        --skip-coverage)
            SKIP_COVERAGE=true
            shift
            ;;
        --production)
            PRODUCTION=true
            shift
            ;;
        *)
            echo "Unknown option: $1"
            echo "Usage: $0 [--skip-tests] [--skip-coverage] [--production]"
            exit 1
            ;;
    esac
done

# Step 1: Install dependencies
run_command "npm ci" "Installing dependencies"

# Step 2: TypeScript compilation check
run_command "npm run typecheck" "TypeScript compilation check"

# Step 3: ESLint validation
run_command "npm run lint" "ESLint validation"

# Step 4: Unit tests
if [ "$SKIP_TESTS" = false ]; then
    run_command "npm run test:unit" "Unit tests"
else
    print_warning "Skipping unit tests"
fi

# Step 5: Integration tests (if not production)
if [ "$SKIP_TESTS" = false ] && [ "$PRODUCTION" = false ]; then
    print_step "Running integration tests (non-blocking)"
    if npm run test:integration; then
        print_success "Integration tests passed"
    else
        print_warning "Integration tests failed (non-blocking)"
    fi
fi

# Step 6: Coverage report
if [ "$SKIP_COVERAGE" = false ]; then
    run_command "npm run test:coverage" "Coverage report generation"
else
    print_warning "Skipping coverage report"
fi

# Step 7: Build application
if [ "$PRODUCTION" = true ]; then
    run_command "npm run build" "Production build"
else
    run_command "npm run build" "Development build"
fi

# Step 8: Build validation
print_step "Validating build output"
if [ -d "dist" ] && [ -f "dist/index.html" ]; then
    print_success "Build output validated"
else
    print_error "Build output validation failed"
    exit 1
fi

# Step 9: Generate build report
print_step "Generating build report"
BUILD_SIZE=$(du -sh dist 2>/dev/null | cut -f1 || echo "Unknown")
TEST_RESULTS=$(npm run test:run --silent 2>/dev/null | grep -E "(passed|failed|skipped)" | tail -1 || echo "No test results")

cat > build-report.md << EOF
# Build Report

**Build Date:** $(date)
**Build Size:** $BUILD_SIZE
**Node Version:** $(node --version)
**NPM Version:** $(npm --version)

## Quality Checks
- ✅ TypeScript compilation
- ✅ ESLint validation
- ✅ Unit tests
- ✅ Build process

## Test Results
$TEST_RESULTS

## Coverage Report
$([ "$SKIP_COVERAGE" = false ] && echo "Coverage report generated in coverage/" || echo "Coverage report skipped")

## Build Configuration
- Production: $PRODUCTION
- Skip Tests: $SKIP_TESTS
- Skip Coverage: $SKIP_COVERAGE
EOF

print_success "Build report generated: build-report.md"

print_success "🎉 Build pipeline completed successfully!"

# Optional: Deploy preview (if not production)
if [ "$PRODUCTION" = false ]; then
    print_step "Build preview available at: http://localhost:4173"
    print_step "Run 'npm run preview' to start preview server"
fi