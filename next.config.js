/** @type {import('next').NextConfig} */

const withInterceptStdout = require("next-intercept-stdout");

const nextConfig = withInterceptStdout(
  {
    reactStrictMode: false,
    swcMinify: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "ipfs.io",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "gateway.pinata.cloud",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "cloudflare-ipfs.com",
          port: "",
          pathname: "/**",
        },
      ],
    },
  },
  (text) => (text.includes("Duplicate atom key") ? "" : text),
);

module.exports = nextConfig;
