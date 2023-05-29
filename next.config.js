/**
 * @type {import('next').NextConfig}
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ['prisma', '@prisma/client'],
  },
  env: {
    NEXT_EMAILJS_SERVICE_ID: process.env.NEXT_EMAILJS_SERVICE_ID,
    NEXT_EMAILJS_TEMPLATE_ID: process.env.NEXT_EMAILJS_TEMPLATE_ID,
    NEXT_EMAILJS_PUBLIC_KEY: process.env.NEXT_EMAILJS_PUBLIC_KEY,
  },
  i18n,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
