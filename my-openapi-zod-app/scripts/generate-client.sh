#!/bin/bash

# Generate OpenAPI client with Zod schemas
# Usage: ./scripts/generate-client.sh [swagger-url]

SWAGGER_URL="${1:-https://localhost:7443/swagger/v1/swagger.json}"
OUTPUT_DIR="src/api"

echo "🚀 Generating OpenAPI client from: $SWAGGER_URL"

# Download swagger spec
echo "📥 Downloading OpenAPI specification..."
curl -k -o greenonion-swagger.json "$SWAGGER_URL"

if [ $? -ne 0 ]; then
    echo "❌ Failed to download OpenAPI spec"
    exit 1
fi

# Generate client
echo "🔧 Generating TypeScript client with Zod schemas..."
npx openapi-zod-client \
    --input ./greenonion-swagger.json \
    --output-dir "$OUTPUT_DIR" \
    --template-dir "$OUTPUT_DIR/templates" \
    --with-alias

if [ $? -eq 0 ]; then
    echo "✅ Client generated successfully in $OUTPUT_DIR"
else
    echo "❌ Failed to generate client"
    exit 1
fi

# Type check the generated code
echo "🔍 Type checking generated code..."
npx tsc --noEmit

echo "🎉 Done!"