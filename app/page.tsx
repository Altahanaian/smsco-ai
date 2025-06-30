'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const isAr = lang === 'ar';

  useEffect(() => {
    const detectedLang = navigator.language.startsWith('en') ? 'en' : 'ar';
    setLang(detectedLang);
  }, []);

  const t = {
    title: isAr ? 'منصة SMSCO الذكية' : 'SMSCO Smart Platform',
    subtitle: isAr
      ? 'الاستشارات والتدريب المدعومة بالذكاء الاصطناعي'
      : 'AI-powered Consulting & Training',
    getStarted: isAr ? 'ابدأ الآن' : 'Get Started',
    explore: isAr ? 'استكشاف المنصة' : 'Explore Platform',
  };

  return (
    <div
      dir={isAr ? 'rtl' : 'ltr'}
      style={{
        minHeight: '100vh',
        backgroundImage: 'url("/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
        backdropFilter: 'brightness(0.95)',
      }}
    >
      <Image src="/logo.png" alt="SMSCO Logo" width={120} height={120} />
      <h1
        style={{
          fontSize: '3rem',
          color: '#4a148c',
          marginBottom: '1rem',
          marginTop: '1rem',
        }}
      >
        {t.title}
      </h1>
      <p style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '2rem' }}>
        {t.subtitle}
      </p>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Link href="/#start">
          <button
            style={{
              padding: '1rem 2rem',
              fontSize: '1.2rem',
              backgroundColor: '#6a1b9a',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            {t.getStarted}
          </button>
        </Link>
        <Link href="/admin/readme">
          <button
            style={{
              padding: '1rem 2rem',
              fontSize: '1.2rem',
              backgroundColor: '#fff',
              color: '#6a1b9a',
              border: '2px solid #6a1b9a',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            {t.explore}
          </button>
        </Link>
      </div>
    </div>
  );
}
