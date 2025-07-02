// next.config.js
const nextIntlPlugin = require('next-intl/plugin')('./next-intl.config.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // تجاهل أخطاء ESLint عند البناء
  eslint: { ignoreDuringBuilds: true },

  // إعدادات الصور
  images: {
    domains: ['yourdomain.com'],
  },

  // رؤوس الأمان
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options',         value: 'DENY' },
          { key: 'X-Content-Type-Options',  value: 'nosniff' },
          { key: 'Referrer-Policy',         value: 'origin-when-cross-origin' },
        ],
      },
    ]
  },

  // أي إعدادات أخرى — لكن **احذف** تمامًا هذا الجزء:
  // i18n: {...}
}

module.exports = nextIntlPlugin(nextConfig)
