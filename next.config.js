/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: ['example.com'], // replace with your image domains
  },
  env: {
    MY_ENV_VARIABLE: process.env.MY_ENV_VARIABLE,
  },
  performance: {
    gzip: true,
    assetPrefix: 'https://cdn.example.com/', // replace with your CDN
  },
  // Additional configurations go here
};

module.exports = nextConfig;