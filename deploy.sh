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

echo "✨ Deployment preparation complete!"
echo "📝 Next steps:"
echo "1. Push the changes to your production repository/branch"
echo "2. Deploy the contents of the 'dist' directory to your production server"
echo "3. Start the production server with 'npm start'" 