#!/bin/bash
# deploy.sh - Deploy HackerStack to Vercel

echo "🚀 Deploying HackerStack.ai to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm i -g vercel
fi

# Deploy to Vercel
echo "📦 Deploying..."
vercel --yes --prod

echo "✅ Deployment complete!"
echo "🌐 Your site will be live at the URL provided by Vercel"
