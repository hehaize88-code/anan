import type { NextConfig } from "next";

// Cloudflare Pages publishes the generated static files from /out.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Worker-only D1 modules are not part of this static Pages build.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
