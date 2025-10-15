/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  transpilePackages: ["@devine/ui", "@devine/utils"]
};

export default nextConfig;
