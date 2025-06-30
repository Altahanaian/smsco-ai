'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type Service = {
  id: string;
  title: { en: string; ar: string };
  desc: { en: string; ar: string };
  price: number;
};

const services: Service[] = [
  {
    id: 'ai-data-analysis',
    title: { en: 'AI Data Analysis', ar: 'تحليل البيانات الذكي' },
    desc: {
      en: 'Extract insights from your data with advanced AI algorithms.',
      ar: 'استخلاص رؤى وتحليلات من بياناتك عبر خوارزميات AI متقدمة',
    },
    price: 500,
  },
  // يمكن إضافة خدمات أخرى هنا...
];

export default function ServicesPage() {
  const [lang, setLang] = useState<'en' | 'ar'>('ar');
  useEffect(
    () => setLang(navigator.language.startsWith('en') ? 'en' : 'ar'),
    []
  );
  const isEn = lang === 'en';
  return (
    <div
      dir={isEn ? 'ltr' : 'rtl'}
      lang={lang}
      style={{
        padding: '2rem',
        fontFamily: isEn ? 'Roboto, sans-serif' : 'Cairo, sans-serif',
      }}
    >
      <h1 style={{ fontSize: '2rem', color: '#4a148c' }}>
        {isEn ? 'Our Smart Services' : 'خدماتنا الذكية'}
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
          gap: '1.5rem',
          marginTop: '1.5rem',
        }}
      >
        {services.map((s) => (
          <div
            key={s.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '1rem',
              textAlign: 'center',
            }}
          >
            <h2 style={{ marginBottom: '0.5rem' }}>
              {isEn ? s.title.en : s.title.ar}
            </h2>
            <p style={{ color: '#555', marginBottom: '1rem' }}>
              {isEn ? s.desc.en : s.desc.ar}
            </p>
            <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
              {s.price} {isEn ? 'SAR' : 'ريال'}
            </p>
            <Link
              href={`/checkout/${s.id}`}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#6a1b9a',
                color: '#fff',
                borderRadius: '5px',
                textDecoration: 'none',
              }}
            >
              {isEn ? 'Buy Now' : 'شراء الآن'}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
