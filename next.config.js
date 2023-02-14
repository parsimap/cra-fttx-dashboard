/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  reactStrictMode: true,
  env: {
    BASE_API_URL: "https://api.parsimap.ir"
  },
  webpack(config, context) {
    if (!context.isServer) {
      config.resolve.fallback.fs = false;
    }
    return config
  }
};

module.exports = nextConfig
