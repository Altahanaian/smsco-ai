const path = require('path');
const nextIntl = require('next-intl/plugin').default;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['yourdomain.com']
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' }
        ]
      }
    ];
  },
  webpack(config) {
    config.resolve.alias['@lib'] = path.resolve(__dirname, 'lib');
    return config;
  }
};

module.exports = nextIntl(nextConfig);
