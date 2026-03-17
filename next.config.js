const nextConfig = {
  output: "standalone",
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, must-revalidate",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;