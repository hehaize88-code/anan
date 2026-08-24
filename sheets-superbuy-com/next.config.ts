import type { NextConfig } from "next";

// Cloudflare Pages publishes the generated static files from /out.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
