'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Message = {
  id: string;
  email: string;
  message: string;
  date: string;
};

export default function Dashboard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const router = useRouter();

  useEffect(() => {
    const isAuth = localStorage.getItem('auth') === 'true';
    if (!isAuth) router.push('/login');

    fetch('/api/messages')
      .then((res) => res.json())
      .then((data) => {
        if (data.messages) setMessages(data.messages);
      });
  }, []);

  const logout = () => {
    localStorage.removeItem('auth');
    router.push('/login');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Cairo, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', color: '#6a1b9a' }}>
        📨 رسائل المستخدمين
      </h1>

      {messages.length === 0 ? (
        <p>لا توجد رسائل بعد أو جاري التحميل...</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {messages.map((msg) => (
            <li
              key={msg.id}
              style={{
                background: '#f9f9f9',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '1rem',
                marginBottom: '1rem',
              }}
            >
              <strong>📧 {msg.email}</strong>
              <br />
              <span>{msg.message}</span>
              <br />
              <small>🕒 {new Date(msg.date).toLocaleString('ar-SA')}</small>
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={logout}
        style={{
          marginTop: '2rem',
          padding: '0.5rem 1rem',
          background: '#999',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        تسجيل الخروج
      </button>
    </div>
  );
}
