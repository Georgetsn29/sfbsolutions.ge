// import type { NextConfig } from "next";

// const repoName = "sfbsolutions.ge";

// const NextConfig: NextConfig = {
//     output: "export",
//     basePath: `/${repoName}`,
//     assetPrefix: `/${repoName}`,
//     trailingSlash: true,
//     images: {
//     unoptimized: true,
//   },
// };

// export default NextConfig;




// import type { NextConfig } from "next";

// const NextConfig: NextConfig = {
//   output: "export",
//   trailingSlash: true,
//   images: {
//     unoptimized: true,
//   },
// };

// export default NextConfig;


import type { NextConfig } from "next";

const basePath = "/sfbsolutions.ge";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

