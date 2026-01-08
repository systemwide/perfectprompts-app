#!/bin/bash

# PerfectPrompts.ai Deployment Script
# This script helps you deploy the application to Vercel

set -e

echo "🚀 PerfectPrompts.ai Deployment Script"
echo "======================================="
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js first."
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found. Please run this script from the project root."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo ""
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build successful!"
    echo ""
else
    echo ""
    echo "❌ Build failed. Please fix the errors above and try again."
    exit 1
fi

# Check if Vercel CLI is installed
if command -v vercel &> /dev/null; then
    echo "Do you want to deploy to Vercel now? (y/n)"
    read -r answer
    if [ "$answer" = "y" ] || [ "$answer" = "Y" ]; then
        echo ""
        echo "🌐 Deploying to Vercel..."
        vercel --prod
        echo ""
        echo "✅ Deployment complete!"
    fi
else
    echo "💡 To deploy, install Vercel CLI:"
    echo "   npm install -g vercel"
    echo "   vercel login"
    echo "   vercel --prod"
    echo ""
    echo "Or push to GitHub and import in Vercel dashboard."
fi

echo ""
echo "======================================="
echo "📋 Next Steps:"
echo "1. Set up Gumroad products"
echo "2. Update product URLs in app/page.tsx"
echo "3. Connect your domain in Vercel"
echo "4. Start marketing!"
echo "======================================="
