#!/bin/bash

# Generate OpenAPI client with Zod schemas
# Usage: ./scripts/generate-client.sh [swagger-url]

# SWAGGER_URL="${1:-https://localhost:7443/swagger/v1/swagger.json}"
SWAGGER_URL="${1:-https://host.docker.internal:7443/swagger/all/swagger.json}"
OUTPUT_DIR="src/api"
OUTPUT_FILE="GreenOnionClient.ts"
TEMPLATE_DIR="$OUTPUT_DIR/templates"
TEMPLATE_FILE="custom-datetime.hbs"

echo "🚀 Generating OpenAPI client from: $SWAGGER_URL"

# Download swagger spec
echo "📥 Downloading OpenAPI specification..."
curl --insecure --output greenonion-swagger.json "$SWAGGER_URL"

if [ $? -ne 0 ]; then
    echo "❌ Failed to download OpenAPI spec"
    echo "Using previous swagger file"
fi

# Generate client
echo "🔧 Generating TypeScript client with Zod schemas..."
npx openapi-zod-client \
    ./greenonion-swagger.json \
    --output "$OUTPUT_DIR/$OUTPUT_FILE" \
    --with-alias
    
    #--template "$TEMPLATE_DIR/$TEMPLATE_FILE" \

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