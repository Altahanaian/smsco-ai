'use client';
import { useEffect, useState } from 'react';

export default function AdminReadmePage() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/readme.html')
      .then((res) => res.text())
      .then((html) => setContent(html));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', color: '#6a1b9a', marginBottom: '1rem' }}>
        📘 دليل استخدام منصة SMSCO
      </h1>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        style={{
          background: '#fff',
          padding: '1rem',
          borderRadius: '10px',
          boxShadow: '0 0 10px #ddd',
        }}
      />
    </div>
  );
}
