#!/bin/bash

# Post-build script to inject build ID and timestamp
set -e

TIMESTAMP=$(date +%s)
BUILD_ID=$(date +%Y%m%d-%H%M%S)

echo "=== Post-Build Processing ==="
echo "Build ID: $BUILD_ID"
echo "Timestamp: $TIMESTAMP"

# Check if the HTML file exists
if [ ! -f "dist/public/index.html" ]; then
    echo "ERROR: dist/public/index.html not found"
    exit 1
fi

# Inject build ID into title
sed -i '' "s/<title>Elastos/<title>[v$BUILD_ID] Elastos/" dist/public/index.html

# Inject build metadata
sed -i '' "s/<meta name=\"description\" content=\"/<meta name=\"build-id\" content=\"$BUILD_ID\"><meta name=\"build-timestamp\" content=\"$TIMESTAMP\"><meta name=\"description\" content=\"/" dist/public/index.html

echo "=== Build ID injection complete ==="

# Verify injection
echo "=== Verification ==="
grep -A2 -B2 "build-id" dist/public/index.html || echo "Build ID not found in verification"
grep "<title>" dist/public/index.html

echo "=== Post-Build Complete ===" 