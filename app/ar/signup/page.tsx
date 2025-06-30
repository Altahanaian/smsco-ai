'use client';
import { useState } from 'react';

export default function SignupPageAr() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('loading');
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const result = await res.json();
    setStatus(result.success ? 'success' : 'error');
    setEmail('');
  };

  return (
    <div
      dir="rtl"
      style={{
        padding: '4rem',
        maxWidth: '500px',
        margin: 'auto',
        textAlign: 'center',
      }}
    >
      {status === 'success' ? (
        <h2 style={{ color: 'green' }}>شكرًا! سيتم التواصل معك قريبًا.</h2>
      ) : (
        <>
          <h1 style={{ color: '#4a148c' }}>تسجيل</h1>
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <input
              type="email"
              name="email"
              placeholder="بريدك الإلكتروني"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: '0.75rem', fontSize: '1rem' }}
            />
            <button
              type="submit"
              style={{
                padding: '0.75rem',
                backgroundColor: '#6a1b9a',
                color: '#fff',
                border: 'none',
              }}
            >
              تسجيل
            </button>
            {status === 'error' && (
              <p style={{ color: 'red' }}>فشل في الإرسال. حاول مرة أخرى.</p>
            )}
          </form>
        </>
      )}
    </div>
  );
}
