// next.config.mjs
import withMDX from '@next/mdx';

const mdxConfig = withMDX({
  extension: /\.mdx?$/,
});

const nextConfig = {
  // Other Next.js configurations here...
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
};

export default mdxConfig(nextConfig);
