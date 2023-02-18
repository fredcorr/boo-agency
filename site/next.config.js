const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
