/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  // Allow proxied requests from Apache
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
        ],
      },
    ]
  },
  // Trust proxy headers
  serverRuntimeConfig: {
    trustProxy: true,
  },
  // Removed 'output: export' to enable API routes for WHMCS integration
  // This allows server-side rendering and API endpoints to work
}

module.exports = nextConfig;
