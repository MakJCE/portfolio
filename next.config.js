/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales:['en', 'es'],
    defaultLocale: 'en'
  },
  experimental: {
    appDir: true
  },
  reactStrictMode: true
};

module.exports = nextConfig
