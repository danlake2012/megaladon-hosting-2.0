#!/usr/bin/env bash
set -euo pipefail

# Deploy Next.js with server support for WHMCS API integration
# This script uploads the built app and starts the Next.js server

REMOTE_USER="danlake2012"
REMOTE_HOST="50.6.224.84"
REMOTE_PATH="/home/danlake2012/nextjs_app"

echo "================================"
echo "Next.js Server Deployment Script"
echo "================================"
echo ""

# Check if Node.js is available on remote
echo "Checking for Node.js on server..."
if ! ssh ${REMOTE_USER}@${REMOTE_HOST} "which node" > /dev/null 2>&1; then
    echo ""
    echo "⚠️  Node.js not found on server!"
    echo ""
    echo "Please install Node.js first. See NEXTJS-SERVER-SETUP.md for instructions."
    echo ""
    echo "Quick install (if you have sudo access):"
    echo "  ssh ${REMOTE_USER}@${REMOTE_HOST}"
    echo "  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash"
    echo "  source ~/.bashrc"
    echo "  nvm install 20"
    echo ""
    exit 1
fi

NODE_VERSION=$(ssh ${REMOTE_USER}@${REMOTE_HOST} "node --version")
echo "✓ Node.js ${NODE_VERSION} found"
echo ""

echo "Building Next.js application..."
npm run build

echo "Creating remote directory structure..."
ssh ${REMOTE_USER}@${REMOTE_HOST} "mkdir -p ${REMOTE_PATH}"

echo "Uploading build files..."
rsync -avz --delete \
  --exclude='.git' \
  --exclude='node_modules' \
  --exclude='.next/cache' \
  .next/ ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}/.next/

rsync -avz \
  public/ ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}/public/

rsync -avz \
  package.json \
  package-lock.json \
  next.config.js \
  .env.local \
  ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}/

echo "Installing dependencies on server..."
ssh ${REMOTE_USER}@${REMOTE_HOST} "cd ${REMOTE_PATH} && npm install --production"

echo ""
echo "✓ Build uploaded successfully!"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Next Steps:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. Start the server:"
echo "   ssh ${REMOTE_USER}@${REMOTE_HOST}"
echo "   cd ${REMOTE_PATH}"
echo "   PORT=3001 npm start"
echo ""
echo "2. Configure Apache reverse proxy (see NEXTJS-SERVER-SETUP.md)"
echo ""
echo "3. Set up PM2 to keep it running:"
echo "   npm install -g pm2"
echo "   pm2 start npm --name 'nextjs-site' -- start"
echo "   pm2 save"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

