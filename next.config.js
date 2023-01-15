const path = require('path');
const dotenv = require('dotenv');
const appRoot = require('app-root-path');

dotenv.config({
  path: path.join(appRoot.path, `.env.${process.env.APP_ENV ?? 'local'}`),
});

console.log(process.env.SUPABASE_URL);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_VERSION: process.env.APP_VERSION,
    API_BASE_URL: process.env.API_BASE_URL,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  },
};

module.exports = nextConfig;
