// next.config.js

// 1) استدعاء بلجن next-intl مع مسار ملف الإعدادات
const nextIntl = require('next-intl/plugin')('./next-intl.config.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 2) تجاهل أخطاء ESLint أثناء البناء
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 3) إعدادات الصور (إذا كنت تستخدم الصور)
  images: {
    domains: ['yourdomain.com'],
  },

  // 4) رؤوس الأمان – يجب أن تُعيد مصفوفة
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

  // 5) أي إعدادات Next.js إضافية أخرى عندك …
};

module.exports = nextIntl(nextConfig);
