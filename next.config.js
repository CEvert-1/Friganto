const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medcsgi5905iop68k8rl6n0.nomodo.app",
      },
      {
        protocol: "https",
        hostname: "medcsmefh85iopes0n2jc70.nomodo.app",
      },
    ],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))

module.exports = nextConfig
