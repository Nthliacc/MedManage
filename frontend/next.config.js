/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: 'http://localhost:8000',
    NEXT_PUBLIC_API_URL: 'http://localhost:8000',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
