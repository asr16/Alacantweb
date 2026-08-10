import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    qualities: [75, 90, 95, 100],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
