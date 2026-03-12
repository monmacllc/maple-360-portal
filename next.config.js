/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    outputFileTracingIncludes: {
      '/landing/*': ['./src/app/landing/**/*'],
      '/portal/*': ['./src/app/portal/**/*'],
    },
  },
};

module.exports = nextConfig;