const path = require('path');

module.exports = {
  // Ensuring the 'styles' directory exists in your project root
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Cloudinary image hosting
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to', // Dev.to image hosting for blog posts
        pathname: '**',
      },
    ],
  },

  // Custom Webpack Configuration (to handle issues with SSR and third-party libraries)
  webpack(config) {
    // You can exclude problematic libraries or customize handling here
    config.externals = ['']; // Example to exclude specific libraries from SSR

    return config;
  },

  // Enabling React Strict Mode for better error handling
  reactStrictMode: true,

  // Minify using SWC for faster builds (instead of Terser)
  swcMinify: true,

  // Disable server-side rendering for client-only components
  experimental: {
    esmExternals: true,
  },

  // Add any other custom Next.js configuration options if necessary
};
