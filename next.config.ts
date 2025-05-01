import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/udf-to-pdf",
        destination: "/convert-udf-to-pdf", // your new URL
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
