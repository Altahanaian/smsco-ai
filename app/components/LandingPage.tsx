'use client';
import Navbar from './Navbar';

export default function LandingPage({ lang }: { lang: 'ar' | 'en' }) {
  const isAr = lang === 'ar';

  const t = isAr
    ? {
        welcome: 'مرحبًا بكم في سمسكو',
        description:
          'منصة لحلول الذكاء الاصطناعي والخدمات الاستشارية والتدريب.',
        getStarted: 'ابدأ الآن',
        explore: 'استكشاف المزيد',
      }
    : {
        welcome: 'Welcome to SMSCO',
        description:
          'A platform for AI solutions, consulting, and training services.',
        getStarted: 'Get Started',
        explore: 'Explore More',
      };

  return (
    <div style={{ fontFamily: 'sans-serif', direction: isAr ? 'rtl' : 'ltr' }}>
      <Navbar lang={lang} />

      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(to bottom right, #f3e5f5, #fff)',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <h1
          style={{ fontSize: '2.5rem', color: '#6a1b9a', marginBottom: '1rem' }}
        >
          {t.welcome}
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: '2rem' }}>
          {t.description}
        </p>

        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <a href="/#start">
            <button
              style={{
                padding: '1rem 2rem',
                fontSize: '1rem',
                backgroundColor: '#6a1b9a',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              {t.getStarted}
            </button>
          </a>

          <a href="/admin/readme">
            <button
              style={{
                padding: '1rem 2rem',
                fontSize: '1rem',
                backgroundColor: '#fff',
                color: '#6a1b9a',
                border: '2px solid #6a1b9a',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              {t.explore}
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
