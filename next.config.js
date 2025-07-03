// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1) تجاهل أخطاء ESLint أثناء البناء
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 2) إعدادات الصور (إذا كنت تستخدم الصور)
  images: {
    domains: ['yourdomain.com'],
  },

  // 3) رؤوس الأمان
  async headers() {
    return [
      {
        source: '/(.*)',   // تطبّق على كل المسارات
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // 4) أي إعدادات Next.js إضافية أخرى عندك …
};

// استدعاء البلجن من next-intl/plugin بدون باراميتر:
const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl(nextConfig);
