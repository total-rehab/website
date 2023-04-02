/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_VERSION: process.env.APP_VERSION,
    API_BASE_URL: process.env.API_BASE_URL,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
  },
  transpilePackages: ['next-image-export-optimizer'],
  images: {
    loader: 'custom',
    imageSizes: [10, 16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: new URL(process.env.SUPABASE_URL).hostname,
        port: '',
        pathname: '/storage/**',
      },
    ],
  },
};

module.exports = nextConfig;
