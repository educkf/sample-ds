import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental features for MCP
  experimental: {
    // Support for app directory
  },

  // Production optimizations
  poweredByHeader: false,
  compress: true,

  // Custom headers for CORS to support MCP clients
  async headers() {
    return [
      {
        source: '/app/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
