/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "build",
    experimental: {
        optimizePackageImports: ["@untitledui/icons"],
    },
};

export default nextConfig;
