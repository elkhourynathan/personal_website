import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/personal_website',
  assetPrefix: '/personal_website/',
};

export default nextConfig;
