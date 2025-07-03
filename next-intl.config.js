// next-intl.config.js

/** @type {import('next-intl').NextIntlConfig} */
module.exports = {
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  pages: {
    '*': ['common']
  }
};
