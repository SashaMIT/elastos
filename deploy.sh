#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment process..."

# Kill any existing processes on production ports
echo "🛑 Stopping any existing processes..."
lsof -ti:3000,5001,4173,4174,4175 | xargs kill -9 2>/dev/null || true

# Clean up previous builds
echo "🧹 Cleaning up previous builds..."
rm -rf dist node_modules

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building application..."
npm run build

# Test the production build locally
echo "🔍 Testing production build..."
npm run preview -- --port 4175 &

# Wait for the preview server to start
sleep 5

# Check if the preview server is running
if curl -s http://localhost:4175 > /dev/null; then
    echo "✅ Production build test successful!"
else
    echo "❌ Production build test failed!"
    exit 1
fi

# Kill the preview server
echo "🛑 Stopping preview server..."
lsof -ti:4175 | xargs kill -9 2>/dev/null || true

# Check if index.html exists in dist/public
if [ -f "dist/public/index.html" ]; then
  echo "✅ index.html found in dist/public/"
else
  echo "❌ index.html NOT found in dist/public/"
  exit 1
fi

# Make sure public directory is accessible from server
mkdir -p dist/server/public
cp -r dist/public/* dist/server/public/ || true

# Copy additional assets from client/public to dist/public and dist/server/public
echo "📦 Copying additional static assets..."
if [ -d "client/public/images" ]; then
  mkdir -p dist/public/images
  mkdir -p dist/server/public/images
  cp -r client/public/images/* dist/public/images/ || true
  cp -r client/public/images/* dist/server/public/images/ || true
  echo "✅ Images copied from client/public"
fi

if [ -d "client/public/fonts" ]; then
  mkdir -p dist/public/fonts
  mkdir -p dist/server/public/fonts
  cp -r client/public/fonts/* dist/public/fonts/ || true
  cp -r client/public/fonts/* dist/server/public/fonts/ || true
  echo "✅ Fonts copied from client/public"
fi

if [ -d "client/public/logo-assets" ]; then
  mkdir -p dist/public/logo-assets
  mkdir -p dist/server/public/logo-assets
  cp -r client/public/logo-assets/* dist/public/logo-assets/ || true
  cp -r client/public/logo-assets/* dist/server/public/logo-assets/ || true
  echo "✅ Logo assets copied from client/public"
fi

if [ -d "client/public/whitepapers" ]; then
  mkdir -p dist/public/whitepapers
  mkdir -p dist/server/public/whitepapers
  cp -r client/public/whitepapers/* dist/public/whitepapers/ || true
  cp -r client/public/whitepapers/* dist/server/public/whitepapers/ || true
  echo "✅ Whitepapers copied from client/public"
fi

if [ -d "client/public/marque" ]; then
  mkdir -p dist/public/marque
  mkdir -p dist/server/public/marque
  cp -r client/public/marque/* dist/public/marque/ || true
  cp -r client/public/marque/* dist/server/public/marque/ || true
  echo "✅ Marque assets copied from client/public"
fi

# Also copy any other files at root level (robots.txt, sitemap.xml, etc.)
cp -r client/public/*.txt dist/public/ 2>/dev/null || true
cp -r client/public/*.xml dist/public/ 2>/dev/null || true
cp -r client/public/*.txt dist/server/public/ 2>/dev/null || true
cp -r client/public/*.xml dist/server/public/ 2>/dev/null || true

echo "✅ Files copied to dist/server/public/"
ls -la dist/server/public/

echo "✅ Deploy prep complete!"
echo "📝 Next steps:"
echo "1. Push the changes to your production repository/branch"
echo "2. Deploy the contents of the 'dist' directory to your production server"
echo "3. Start the production server with 'npm start'" 