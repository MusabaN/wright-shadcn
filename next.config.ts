import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3cdn.tabs.no',
        port: '',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
