import type { NextConfig } from "next";

const isGhPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_REPO_NAME ?? "hunt-showdown-cheats-site";
const basePath = isGhPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "preview.redd.it", pathname: "/**" },
      { protocol: "https", hostname: "i.redd.it", pathname: "/**" },
      { protocol: "https", hostname: "assetsio.gnwcdn.com", pathname: "/**" },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
