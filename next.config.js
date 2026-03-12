/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove standalone output for now
  images: {
    unoptimized: true,
  },
  // Ensure static generation works properly
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
};

module.exports = nextConfig;