# WHMCS Dynamic Plans Integration

## Overview

Your site now has dynamic WHMCS integration! The hosting plans component (`components/WHMCSPlans.tsx`) can pull live pricing and features from your WHMCS installation.

## Current Status

✅ **Component Created**: `WHMCSPlans.tsx` fetches plans from WHMCS API
✅ **Fallback Plans**: Static plans display if API is not configured
✅ **Deployed**: Site is live with the new component

## How It Works

1. **Client Component**: `WHMCSPlans.tsx` makes a client-side request to `/api/whmcs/plans`
2. **API Route**: `pages/api/whmcs/plans.ts` securely calls WHMCS API server-side
3. **Fallback**: If API fails or isn't configured, shows default plans

## To Enable Live WHMCS Data

### Option 1: Static Export (Current Setup)

Since you're using Next.js static export, the API route won't work. The component will use fallback plans (pids 10-14 with current pricing).

**To update fallback plans**, edit `components/WHMCSPlans.tsx` and modify the `fallbackPlans` array.

### Option 2: Enable Dynamic API (Requires Node.js Server)

To enable live WHMCS data:

1. **Get WHMCS API Credentials**:
   - Log into WHMCS admin
   - Go to System Settings > API Credentials
   - Create new API credentials (identifier + secret)

2. **Configure Environment Variables**:
   Edit `.env.local`:
   ```bash
   WHMCS_API_URL=https://billing.megaladonhosting.com/includes/api.php
   WHMCS_API_IDENTIFIER=your_api_identifier_here
   WHMCS_API_SECRET=your_api_secret_here
   ```

3. **Deploy with Node.js Server**:
   - Remove `output: 'export'` from `next.config.js`
   - Deploy to a Node.js hosting provider (Vercel, Railway, DigitalOcean App Platform)
   - Or use Next.js standalone server on your current host

4. **Rebuild and Deploy**:
   ```bash
   npm run build
   npm start  # or deploy to Node.js hosting
   ```

## WHMCS Product Requirements

For best results, structure your WHMCS product descriptions like:
```
50 GB NVMe
100k Bandwidth
One-click Apps
```

Each line becomes a feature bullet point (max 3 shown).

## Files Created

- `pages/api/whmcs/plans.ts` - API route for WHMCS integration
- `components/WHMCSPlans.tsx` - Dynamic plans component with fallback
- `.env.local` - Environment variables template

## Current Product IDs

The fallback plans use these WHMCS product IDs:
- Basic: pid=10
- Plus: pid=11
- Pro: pid=12
- Business: pid=13
- Unlimited: pid=14

Update these in `WHMCSPlans.tsx` if your WHMCS uses different IDs.
