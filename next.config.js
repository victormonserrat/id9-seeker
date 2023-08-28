/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['lumiere-a.akamaihd.net'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
