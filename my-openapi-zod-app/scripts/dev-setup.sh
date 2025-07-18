#!/bin/bash

# Development setup script
# Sets up the development environment and starts all necessary services

echo "🏗️  Setting up development environment..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Generate API client if swagger spec exists
if [ -f "greenonion-swagger.json" ]; then
    echo "🔧 Generating API client..."
    ./scripts/generate-client.sh
else
    echo "⚠️  No swagger spec found. Run generate-client.sh first."
fi

# Run linting
echo "🧹 Running linter..."
npm run lint

# Start development server
echo "🚀 Starting development server..."
npm run dev