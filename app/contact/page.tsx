'use client';
import { useState } from 'react';

export default function ContactPage() {
  const lang =
    typeof window !== 'undefined' && window.navigator.language.startsWith('en')
      ? 'en'
      : 'ar';
  const isEn = lang === 'en';

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      lang={isEn ? 'en' : 'ar'}
      dir={isEn ? 'ltr' : 'rtl'}
      style={{ padding: '4rem 2rem', maxWidth: 800, margin: 'auto' }}
    >
      <h1 style={{ fontSize: '2rem', color: '#6a1b9a', textAlign: 'center' }}>
        {isEn ? 'Contact Us' : 'اتصل بنا'}
      </h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
        {isEn
          ? 'We would love to hear from you. Please fill out the form below.'
          : 'يسعدنا تواصلك معنا. الرجاء تعبئة النموذج أدناه.'}
      </p>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
        <input
          type="text"
          name="name"
          placeholder={isEn ? 'Your Name' : 'اسمك'}
          value={form.name}
          onChange={handleChange}
          required
          style={{
            padding: '0.8rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
          }}
        />
        <input
          type="email"
          name="email"
          placeholder={isEn ? 'Your Email' : 'بريدك الإلكتروني'}
          value={form.email}
          onChange={handleChange}
          required
          style={{
            padding: '0.8rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
          }}
        />
        <textarea
          name="message"
          placeholder={isEn ? 'Your Message' : 'رسالتك'}
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          style={{
            padding: '0.8rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
          }}
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          style={{
            background: '#6a1b9a',
            color: '#fff',
            padding: '0.8rem',
            borderRadius: '8px',
            border: 'none',
          }}
        >
          {status === 'sending'
            ? isEn
              ? 'Sending...'
              : 'جاري الإرسال...'
            : isEn
            ? 'Send Message'
            : 'إرسال الرسالة'}
        </button>
        {status === 'success' && (
          <p style={{ color: 'green', textAlign: 'center' }}>
            {isEn ? 'Message sent successfully!' : 'تم إرسال الرسالة بنجاح!'}
          </p>
        )}
        {status === 'error' && (
          <p style={{ color: 'red', textAlign: 'center' }}>
            {isEn
              ? 'Failed to send message. Please try again.'
              : 'فشل في إرسال الرسالة. حاول مرة أخرى.'}
          </p>
        )}
      </form>
    </div>
  );
}
