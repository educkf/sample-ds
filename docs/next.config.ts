import type { NextConfig } from "next";
import withMarkdoc from '@markdoc/next.js';

const nextConfig: NextConfig = {
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx'],

  // Production optimizations
  poweredByHeader: false,
  compress: true,

  // Image optimization
  images: {
    domains: ['unpkg.com', 'cdn.jsdelivr.net'],
    formats: ['image/webp', 'image/avif'],
  },

  // Custom headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Redirects (if needed)
  async redirects() {
    return [
      // Redirect old component paths to new structure
      {
        source: '/docs/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};

export default withMarkdoc(/* markdoc options */)(nextConfig);
