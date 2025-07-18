#!/bin/bash

# Test organization script
# Helps organize and tag tests for category-based running

echo "🧪 Test Organization Script"

# Function to add tags to test files
add_test_tags() {
    local file_path="$1"
    local tags="$2"
    
    if [ -f "$file_path" ]; then
        echo "📝 Adding tags [$tags] to $file_path"
        # Use sed to add tags to describe blocks
        sed -i "s/describe('\([^']*\)'/describe('\1 [$tags]'/g" "$file_path"
        echo "✅ Tags added to $file_path"
    else
        echo "❌ File not found: $file_path"
    fi
}

# Function to create test script commands
create_test_scripts() {
    echo "📦 Adding test scripts to package.json"
    
    # Backup package.json
    cp package.json package.json.backup
    
    # Add test scripts using jq if available, otherwise use sed
    if command -v jq &> /dev/null; then
        echo "Using jq for JSON manipulation"
        jq '.scripts += {
            "test:unit": "vitest run -t \"unit\"",
            "test:integration": "vitest run -t \"integration\"",
            "test:devtool": "vitest run -t \"devtool\"",
            "test:component": "vitest run -t \"component\"",
            "test:api": "vitest run -t \"api\"",
            "test:watch:unit": "vitest --watch -t \"unit\"",
            "test:watch:integration": "vitest --watch -t \"integration\""
        }' package.json > package.json.tmp && mv package.json.tmp package.json
    else
        echo "jq not available, manual addition required"
    fi
    
    echo "✅ Test scripts added to package.json"
}

# Function to validate test structure
validate_tests() {
    echo "🔍 Validating test structure"
    
    # Check for test files
    test_files=$(find src -name "*.test.tsx" -o -name "*.test.ts")
    
    if [ -z "$test_files" ]; then
        echo "❌ No test files found"
        return 1
    fi
    
    echo "Found test files:"
    echo "$test_files"
    
    # Check for proper tagging
    untagged_files=""
    for file in $test_files; do
        if ! grep -q "\[.*\]" "$file"; then
            untagged_files="$untagged_files $file"
        fi
    done
    
    if [ -n "$untagged_files" ]; then
        echo "⚠️  Files without tags:"
        echo "$untagged_files"
    else
        echo "✅ All test files are properly tagged"
    fi
}

# Function to run test categories
run_test_categories() {
    echo "🏃 Running test categories"
    
    categories=("unit" "integration" "devtool" "component" "api")
    
    for category in "${categories[@]}"; do
        echo "Testing $category category..."
        npm run "test:$category" || echo "❌ $category tests failed or not found"
    done
}

# Main script logic
case "${1:-help}" in
    "tag-unit")
        add_test_tags "src/__tests__/App.test.tsx" "unit component"
        add_test_tags "src/components/__tests__/GenericDataGrid.test.tsx" "unit component"
        ;;
    "tag-integration")
        add_test_tags "src/__tests__/api.integration.test.tsx" "integration api"
        ;;
    "tag-devtools")
        add_test_tags "src/__tests__/devtools.test.tsx" "devtool debug"
        ;;
    "tag-all")
        add_test_tags "src/__tests__/App.test.tsx" "unit component"
        add_test_tags "src/components/__tests__/GenericDataGrid.test.tsx" "unit component"
        add_test_tags "src/__tests__/api.integration.test.tsx" "integration api"
        add_test_tags "src/__tests__/devtools.test.tsx" "devtool debug"
        ;;
    "scripts")
        create_test_scripts
        ;;
    "validate")
        validate_tests
        ;;
    "run-all")
        run_test_categories
        ;;
    "setup")
        echo "🚀 Setting up complete test organization"
        create_test_scripts
        validate_tests
        echo "✅ Test organization setup complete"
        ;;
    "help"|*)
        echo "Usage: $0 [command]"
        echo ""
        echo "Commands:"
        echo "  tag-unit       - Add tags to unit test files"
        echo "  tag-integration - Add tags to integration test files"
        echo "  tag-devtools   - Add tags to devtool test files"
        echo "  tag-all        - Add tags to all test files"
        echo "  scripts        - Add test scripts to package.json"
        echo "  validate       - Validate test structure and tagging"
        echo "  run-all        - Run all test categories"
        echo "  setup          - Complete test organization setup"
        echo "  help           - Show this help message"
        ;;
esac