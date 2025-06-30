'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      localStorage.setItem('auth', 'true');
      router.push('/admin/dashboard');
    } else {
      alert('كلمة المرور غير صحيحة');
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'Cairo' }}>
      <h1>🔐 تسجيل الدخول</h1>
      <form onSubmit={handleLogin} style={{ marginTop: '2rem' }}>
        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '0.5rem', width: '250px' }}
        />
        <br />
        <br />
        <button
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#6a1b9a',
            color: '#fff',
            border: 'none',
          }}
        >
          دخول
        </button>
      </form>
    </div>
  );
}
