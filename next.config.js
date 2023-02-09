/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com", "raw.githubusercontent.com", "github.com"],
  },
};

module.exports = nextConfig;
