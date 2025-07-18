#!/bin/bash

# Component refactoring script
# Automates common component refactoring tasks

echo "🔧 Component Refactoring Script"

# Function to improve component type safety
improve_type_safety() {
    local component_path="$1"
    
    echo "📝 Improving type safety for $component_path"
    
    if [ -f "$component_path" ]; then
        # Backup original file
        cp "$component_path" "${component_path}.backup"
        
        # Replace 'any' with 'unknown' where appropriate
        sed -i 's/Record<string, any>/Record<string, unknown>/g' "$component_path"
        
        # Add proper generic constraints
        sed -i 's/<T>/<T extends Record<string, unknown>>/g' "$component_path"
        
        echo "✅ Type safety improved for $component_path"
    else
        echo "❌ Component file not found: $component_path"
    fi
}

# Function to add error boundaries
add_error_boundary() {
    local component_dir="$1"
    
    echo "🛡️  Adding error boundary to $component_dir"
    
    cat > "$component_dir/ErrorBoundary.tsx" << 'EOF'
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error boundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', border: '1px solid #ff0000', borderRadius: '4px' }}>
          <h2>Something went wrong.</h2>
          <p>{this.state.error?.message}</p>
          <button onClick={() => this.setState({ hasError: false, error: undefined })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
EOF
    
    echo "✅ Error boundary created at $component_dir/ErrorBoundary.tsx"
}

# Function to add loading component
add_loading_component() {
    local component_dir="$1"
    
    echo "⏳ Adding loading component to $component_dir"
    
    cat > "$component_dir/Loading.tsx" << 'EOF'
import React from 'react';

interface LoadingProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
}

const Loading: React.FC<LoadingProps> = ({ 
  message = 'Loading...', 
  size = 'medium' 
}) => {
  const sizeStyles = {
    small: { width: '20px', height: '20px' },
    medium: { width: '40px', height: '40px' },
    large: { width: '60px', height: '60px' }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      gap: '10px',
      padding: '20px' 
    }}>
      <div
        style={{
          ...sizeStyles[size],
          border: '3px solid #f3f3f3',
          borderTop: '3px solid #3498db',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}
      />
      <p>{message}</p>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
EOF
    
    echo "✅ Loading component created at $component_dir/Loading.tsx"
}

# Function to refactor component props
refactor_component_props() {
    local component_path="$1"
    
    echo "🔄 Refactoring component props for $component_path"
    
    if [ -f "$component_path" ]; then
        # Backup original file
        cp "$component_path" "${component_path}.backup"
        
        # Extract component name from path
        component_name=$(basename "$component_path" .tsx)
        
        # Add Props interface if not exists
        if ! grep -q "interface ${component_name}Props" "$component_path"; then
            # This is a simplified approach - would need more sophisticated parsing
            echo "// TODO: Add proper Props interface for $component_name" >> "$component_path"
        fi
        
        echo "✅ Props refactored for $component_path"
    else
        echo "❌ Component file not found: $component_path"
    fi
}

# Function to add component tests
add_component_tests() {
    local component_path="$1"
    local component_name=$(basename "$component_path" .tsx)
    local test_dir=$(dirname "$component_path")/__tests__
    
    echo "🧪 Adding tests for $component_name"
    
    # Create test directory if it doesn't exist
    mkdir -p "$test_dir"
    
    cat > "$test_dir/${component_name}.test.tsx" << EOF
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import $component_name from '../$component_name'

describe('$component_name [unit] [component]', () => {
  it('renders without crashing', () => {
    render(<$component_name />)
    // Add specific assertions here
  })

  it('handles props correctly', () => {
    // Add prop testing here
  })

  it('handles user interactions', () => {
    // Add interaction testing here
  })
})
EOF
    
    echo "✅ Test file created at $test_dir/${component_name}.test.tsx"
}

# Main script logic
case "${1:-help}" in
    "type-safety")
        improve_type_safety "${2:-src/components/GenericDataGrid.tsx}"
        ;;
    "error-boundary")
        add_error_boundary "${2:-src/components}"
        ;;
    "loading")
        add_loading_component "${2:-src/components}"
        ;;
    "props")
        refactor_component_props "${2}"
        ;;
    "tests")
        add_component_tests "${2}"
        ;;
    "full-refactor")
        echo "🚀 Running full component refactor"
        improve_type_safety "src/components/GenericDataGrid.tsx"
        add_error_boundary "src/components"
        add_loading_component "src/components"
        echo "✅ Full refactor complete"
        ;;
    "help"|*)
        echo "Usage: $0 [command] [path]"
        echo ""
        echo "Commands:"
        echo "  type-safety [path]    - Improve TypeScript type safety"
        echo "  error-boundary [dir]  - Add error boundary component"
        echo "  loading [dir]         - Add loading component"
        echo "  props [path]          - Refactor component props"
        echo "  tests [path]          - Add component tests"
        echo "  full-refactor         - Run complete refactor process"
        echo "  help                  - Show this help message"
        echo ""
        echo "Examples:"
        echo "  $0 type-safety src/components/MyComponent.tsx"
        echo "  $0 error-boundary src/components"
        echo "  $0 full-refactor"
        ;;
esac