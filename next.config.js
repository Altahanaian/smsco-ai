/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1) تجاوز أخطاء ESLint أثناء البناء
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 2) الإعدادات الحالية للـ i18n
  i18n: { locales: ['en', 'ar'], defaultLocale: 'en', localeDetection: false },

  // 3) إعدادات الصور
  images: {
    domains: ['yourdomain.com'],
  },

  // 4) إضافة رؤوس الأمان
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
}

module.exports = nextConfig
