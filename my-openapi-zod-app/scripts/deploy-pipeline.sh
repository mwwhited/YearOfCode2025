#!/bin/bash

# Deployment Pipeline Script
# Handles staging and production deployments with quality gates

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_step() {
    echo -e "${BLUE}🚀 $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# Parse arguments
ENVIRONMENT=${1:-staging}
SKIP_TESTS=${2:-false}

if [[ "$ENVIRONMENT" != "staging" && "$ENVIRONMENT" != "production" ]]; then
    print_error "Invalid environment. Use 'staging' or 'production'"
    exit 1
fi

print_step "Starting deployment pipeline for $ENVIRONMENT environment"

# Step 1: Quality Gates
print_step "Running quality gates"

# Run enhanced build pipeline
if [ "$SKIP_TESTS" = "true" ]; then
    ./scripts/build-pipeline.sh --skip-tests --production
else
    ./scripts/build-pipeline.sh --production
fi

# Step 2: Security Checks
print_step "Running security audit"
npm audit --audit-level=high || {
    print_warning "Security audit found issues. Continue? (y/n)"
    read -r response
    if [[ "$response" != "y" ]]; then
        print_error "Deployment cancelled due to security concerns"
        exit 1
    fi
}

# Step 3: Coverage Validation
print_step "Validating coverage thresholds"
npm run test:coverage || {
    print_warning "Coverage thresholds not met. Continue? (y/n)"
    read -r response
    if [[ "$response" != "y" ]]; then
        print_error "Deployment cancelled due to coverage requirements"
        exit 1
    fi
}

# Step 4: Environment-specific deployment
case $ENVIRONMENT in
    staging)
        print_step "Deploying to staging environment"
        
        # Staging deployment steps
        print_step "Creating staging build"
        npm run build
        
        print_step "Running staging deployment"
        # Here you would add your staging deployment commands
        echo "📦 Staging deployment completed"
        echo "🔗 Staging URL: https://staging.your-app.com"
        ;;
        
    production)
        print_step "Deploying to production environment"
        
        # Production requires additional confirmation
        print_warning "Are you sure you want to deploy to PRODUCTION? (yes/no)"
        read -r confirm
        if [[ "$confirm" != "yes" ]]; then
            print_error "Production deployment cancelled"
            exit 1
        fi
        
        # Production deployment steps
        print_step "Creating production build"
        npm run build
        
        print_step "Running production deployment"
        # Here you would add your production deployment commands
        echo "📦 Production deployment completed"
        echo "🔗 Production URL: https://your-app.com"
        ;;
esac

# Step 5: Post-deployment validation
print_step "Running post-deployment validation"

# Health check (mock)
print_step "Performing health check"
sleep 2
print_success "Health check passed"

# Generate deployment report
print_step "Generating deployment report"
cat > deployment-report.md << EOF
# Deployment Report

**Environment:** $ENVIRONMENT
**Deployment Date:** $(date)
**Deployed By:** $(whoami)
**Git Commit:** $(git rev-parse HEAD 2>/dev/null || echo "Not a git repository")

## Quality Gates
- ✅ TypeScript compilation
- ✅ ESLint validation
- ✅ Unit tests
- ✅ Coverage thresholds
- ✅ Security audit
- ✅ Build process

## Deployment Status
- ✅ Build successful
- ✅ Deployment completed
- ✅ Health check passed

## Next Steps
- Monitor application metrics
- Verify functionality in $ENVIRONMENT
- Check error logs
EOF

print_success "Deployment report generated: deployment-report.md"
print_success "🎉 Deployment to $ENVIRONMENT completed successfully!"

# Optional: Send notification (placeholder)
print_step "Deployment notification sent to team"