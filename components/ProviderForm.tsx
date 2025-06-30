'use client';
import { useState } from 'react';

export default function ProviderForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    field: '',
    lang: '',
    bio: '',
    linkedin: '',
  });
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');
  const isAr =
    typeof window !== 'undefined' && window.navigator.language.startsWith('ar');

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/providers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({
          name: '',
          email: '',
          password: '',
          phone: '',
          field: '',
          lang: '',
          bio: '',
          linkedin: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto space-y-4 p-6 bg-white rounded-xl shadow"
    >
      <h2 className="text-2xl font-bold text-center">
        {isAr ? 'تسجيل مزود خدمة' : 'Register Provider'}
      </h2>
      {[
        'name',
        'email',
        'password',
        'phone',
        'field',
        'lang',
        'bio',
        'linkedin',
      ].map((field) => (
        <input
          key={field}
          name={field}
          value={form[field as keyof typeof form]}
          onChange={handleChange}
          placeholder={isAr ? `أدخل ${field}` : `Enter ${field}`}
          required={field !== 'linkedin'}
          className="w-full p-2 border rounded"
        />
      ))}
      <button
        type="submit"
        className="w-full p-2 bg-blue-600 text-white rounded"
      >
        {status === 'sending'
          ? isAr
            ? 'جاري الإرسال...'
            : 'Sending...'
          : isAr
          ? 'تسجيل'
          : 'Submit'}
      </button>
      {status === 'success' && (
        <p className="text-green-600">
          {isAr ? 'تم التسجيل بنجاح' : 'Registered successfully'}
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-600">
          {isAr ? 'حدث خطأ أثناء التسجيل' : 'Registration failed'}
        </p>
      )}
    </form>
  );
}
