import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: { formats: ['image/avif', 'image/webp'], qualities: [75, 90] },
};

export default nextConfig;
