// .eslintrc.js
module.exports = {
  root: true,
  extends: ['next', 'next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  rules: {
    // تسمح باستخدام any مؤقتاً
    '@typescript-eslint/no-explicit-any': 'off',
    // تحوّل الخطأ في المتغيرات غير المستخدمة إلى تحذير
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
}
