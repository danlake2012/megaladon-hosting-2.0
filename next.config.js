/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  }
  ,
  // Export static HTML from the App router (appDir) — safe for this project since routes are static
  output: 'export'
}

module.exports = nextConfig;
