import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compress: true,
  reactStrictMode: true,
  experimental: {
    viewTransition: true,
    optimizePackageImports: ['lucide-react'], // Tối ưu Chunk JS khi dùng Lucide Icons
  },
  images: {
    minimumCacheTTL: 31536000, // Ép Vercel/NextJS cache hình ảnh đã optimize tối đa 1 năm
  },
  async headers() {
    return [
      {
        source: '/images/:all*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache hình nền mãi mãi ở Frontend
          },
        ],
      },
      {
        source: '/_next/image/:all*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
