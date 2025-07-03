// app/page.tsx
'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  const t = useTranslations('landing');
  const locale = useLocale();
  const isAr = locale === 'ar';

  return (
    <div
      dir={isAr ? 'rtl' : 'ltr'}
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center p-8"
      style={{ backgroundImage: 'url("/background.jpg")', backdropFilter: 'brightness(0.95)' }}
    >
      <Image src="/logo.png" alt="SMSCO Logo" width={120} height={120} />

      <h1 className="text-6xl text-purple-900 mt-4 mb-2">
        {t('title')}
      </h1>

      <p className="text-2xl text-white mb-8">
        {t('subtitle')}
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <Link href="/#start" locale={locale}>
          <button className="px-8 py-4 text-xl bg-purple-700 text-white rounded-2xl">
            {t('getStarted')}
          </button>
        </Link>

        <Link href="/admin/readme" locale={locale}>
          <button className="px-8 py-4 text-xl bg-white text-purple-700 border-2 border-purple-700 rounded-2xl">
            {t('explore')}
          </button>
        </Link>
      </div>
    </div>
  );
}
