/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com','raw.githubusercontent.com','lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig
