import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compress: true,
  reactStrictMode: true,
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
