const path = require("path");

module.exports = {
  webpack(config, { isServer }) {
    if (!isServer) {
      // Adding support for window and document usage on the client side
      config.node = {
        ...config.node,
        fs: "empty", // to prevent 'fs' module errors
        global: true,
        process: true,
      };
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media.dev.to",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media2.dev.to", // Added the correct hostname
        pathname: "**",
      },
    ],
  },
};
