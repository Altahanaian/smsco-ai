import './globals.css';
import { ReactNode } from 'react';
import { useLocale } from 'next-intl';
import { dir } from 'i18next'; // أو استخدم function dir(locale) لو كانت متاحة

export const metadata = {
  title: 'SMSCO | سمسكو',
  description: 'منصة احترافية ذكية للاستشارات والخدمات.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const locale = useLocale(); // اللغة الحالية ar أو en
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction}>
      <head>
        {/* خط Cairo */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-white text-gray-900">{children}</body>
    </html>
  );
}
