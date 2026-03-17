import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;