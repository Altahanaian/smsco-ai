// next.config.js

// استيراد البلجن وتهيئة المسار إلى next-intl.config.js
const nextIntlPlugin = require('next-intl/plugin')('./next-intl.config.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1) تجاوز أخطاء ESLint أثناء البناء
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 2) الإعدادات الحالية للـ i18n (مطابقة لملف next-intl.config.js)
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    localeDetection: false,
  },

  // 3) إعدادات الصور
  images: {
    domains: ['yourdomain.com'],
  },

  // 4) رؤوس الأمان
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

  // 5) أي إعدادات أخرى عندك…
}

// غلّف التهيئة بالبلجن قبل التصدير
module.exports = nextIntlPlugin(nextConfig)
