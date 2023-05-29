/**
 * @type {import('next').NextConfig}
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['prisma', '@prisma/client'],
  },
  env: {},
  i18n,
}

module.exports = nextConfig
