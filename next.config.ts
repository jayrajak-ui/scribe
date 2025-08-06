import type { NextConfig } from "next"; // <-- 1. Change this line

const repoName = 'my-freed-clone';

const config: NextConfig = { // <-- 2. Change this line
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  images: {
    unoptimized: true,
  },
};

export default config;