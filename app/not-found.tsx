'use client';

import { useEffect, useState } from 'react';

export default function NotFound() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    const userLang = navigator.language.startsWith('ar') ? 'ar' : 'en';
    setLang(userLang);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold mb-4">
        {lang === 'ar' ? '٤٠٤ - الصفحة غير موجودة' : '404 - Page Not Found'}
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        {lang === 'ar'
          ? 'عذرًا، الصفحة التي تحاول الوصول إليها غير موجودة.'
          : "The page you're looking for doesn't exist."}
      </p>
      <a href="/" className="text-blue-600 hover:underline">
        {lang === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
      </a>
    </div>
  );
}
