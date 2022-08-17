/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "raw.githubusercontent.com",
      "lh3.googleusercontent.com",
      "theplatformstorage.blob.core.windows.net",
    ],
  },
  experimental: { images: { allowFutureImage: true } },
};

module.exports = nextConfig;
