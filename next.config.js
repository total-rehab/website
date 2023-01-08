const dotenv = require('dotenv');

dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    apiBaseUrl: process.env.API_BASE_URL,
  },
};

module.exports = nextConfig;
