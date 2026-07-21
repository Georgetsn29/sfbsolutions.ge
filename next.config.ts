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

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,

  basePath: "/Portfolio",
  
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  
};

export default nextConfig;

