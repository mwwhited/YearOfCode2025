#!/bin/bash

# Type checking and validation script
# Runs all type checks and validations

echo "🔍 Running comprehensive type checks..."

# TypeScript compilation check
echo "📝 Checking TypeScript compilation..."
npx tsc --noEmit
if [ $? -ne 0 ]; then
    echo "❌ TypeScript compilation failed"
    exit 1
fi

# ESLint check
echo "🧹 Running ESLint..."
npm run lint
if [ $? -ne 0 ]; then
    echo "❌ ESLint checks failed"
    exit 1
fi

# Build test
echo "🏗️  Testing build process..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ All checks passed!"