import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/privacy-centers",
        destination: "/business-center",
        permanent: true,
      },
      {
        source: "/privacy-centers.html",
        destination: "/business-center",
        permanent: true,
      },
      {
        source: "/business-center.html",
        destination: "/business-center",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
