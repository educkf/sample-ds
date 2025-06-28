import type { NextConfig } from "next";
import withMarkdoc from '@markdoc/next.js';

const nextConfig: NextConfig = {
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx'],
};

export default withMarkdoc(/* markdoc options */)(nextConfig);
