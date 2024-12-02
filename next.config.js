const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")], // Ensure the "styles" directory exists in your project root
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Cloudinary image hosting
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media.dev.to", // Dev.to image hosting for blog posts
        pathname: "**",
      },
    ],
  },
};
