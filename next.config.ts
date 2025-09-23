import type { NextConfig } from "next";

const repoName = "";

const NextConfig: NextConfig = {
    output: "export",
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}`,
    trailingSlash: true,
};

export default NextConfig;