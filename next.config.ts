import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Allow Sanity's CDN
        pathname: "/images/**",   // Allow any images under this path
      },
    ],
  },
};

export default nextConfig;
