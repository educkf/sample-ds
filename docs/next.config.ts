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

  // Custom webpack configuration to handle node_modules assets
  webpack: (config, { isServer }) => {
    // Add rule to copy design system components
    if (!isServer) {
      config.module.rules.push({
        test: /\.js$/,
        include: /node_modules\/sample-design-system-educkf/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/ds-components/',
            outputPath: 'static/ds-components/',
          },
        },
      });
    }
    return config;
  },

  // Custom headers for security and CORS
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
      {
        source: '/api/ds-components/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET',
          },
          {
            key: 'Content-Type',
            value: 'application/javascript',
          },
        ],
      },
    ];
  },

  // Rewrites to serve design system components
  async rewrites() {
    return [
      {
        source: '/api/ds-components/:component',
        destination: '/api/ds-components/:component',
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

export default withMarkdoc({
  schemaPath: './markdoc'
})(nextConfig);
