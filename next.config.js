/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  // Disable SWC minifier to avoid Terser issues
  swcMinify: false,
};

export default nextConfig;
