/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['cdn.snappfood.ir', 'www.zoodfood.com'],
  }
}

module.exports = nextConfig
