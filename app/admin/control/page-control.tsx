'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function PlatformControlPage() {
  const [status, setStatus] = useState({
    db: false,
    email: false,
    recaptcha: true,
  });

  useEffect(() => {
    // محاكاة تحقق الحالة (يمكن ربطها فعليًا لاحقًا)
    setTimeout(() => {
      setStatus({ db: true, email: true, recaptcha: true });
    }, 1000);
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Cairo, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', color: '#6a1b9a' }}>
        📊 متابعة تشغيل المنصة
      </h1>

      <div
        style={{
          marginTop: '2rem',
          background: '#f9f9f9',
          padding: '1.5rem',
          borderRadius: '10px',
          boxShadow: '0 0 10px #ddd',
        }}
      >
        <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>
          ✅ حالة النظام
        </h2>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
          <li>🗃️ قاعدة البيانات: {status.db ? 'متصلة ✅' : 'غير متصلة ❌'}</li>
          <li>📨 نظام الإرسال: {status.email ? 'مفعل ✅' : 'غير مفعل ❌'}</li>
          <li>🛡️ reCAPTCHA: {status.recaptcha ? 'مفعل ✅' : '❌'}</li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.3rem' }}>🧪 إرسال تجريبي</h2>
        <form
          action="https://formspree.io/f/meokrkyj"
          method="POST"
          style={{ marginTop: '1rem' }}
        >
          <input
            type="email"
            name="email"
            placeholder="بريدك الإلكتروني"
            required
            style={{ padding: '0.5rem', width: '300px' }}
          />
          <button
            type="submit"
            style={{
              marginLeft: '1rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#6a1b9a',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            إرسال
          </button>
        </form>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.3rem' }}>🔗 روابط سريعة</h2>
        <ul>
          <li>
            <Link href="/admin/readme">📘 دليل الاستخدام</Link>
          </li>
          <li>
            <Link href="/admin/emails">📬 البريد الوارد</Link>
          </li>
          <li>
            <Link href="/">🏠 الصفحة الرئيسية</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
