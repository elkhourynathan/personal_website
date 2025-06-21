import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment and set these if deploying to a subpath:
  // basePath: '/personal_website',
  // assetPrefix: '/personal_website/',
};

export default nextConfig;
