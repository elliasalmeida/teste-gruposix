import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'inapak.com',
        port: '',
        search: '',
      },
    ],
  },
};

export default nextConfig;
