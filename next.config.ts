import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    // Plugin given by name so it works with Turbopack. Enables tables.
    remarkPlugins: ["remark-gfm"],
  },
});

export default withMDX(nextConfig);
