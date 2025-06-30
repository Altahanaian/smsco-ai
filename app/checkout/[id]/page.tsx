'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
export default function CheckoutPage({ params }: { params: { id: string } }) {
  const [loading, setLoading] = useState(false);
  const handleBuy = async () => {
    setLoading(true);
    const res = await fetch('/api/checkout_sessions', {
      method: 'POST',
      body: JSON.stringify({ serviceId: params.id }),
    });
    const { url } = await res.json();
    window.location.href = url;
  };
  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'Cairo' }}>
      <h1>{loading ? 'يرجى الانتظار…' : 'جاري توجيهك للدفع…'}</h1>
      <button
        onClick={handleBuy}
        disabled={loading}
        style={{
          marginTop: '1rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#6a1b9a',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        {loading ? '…' : 'اشتر الآن'}
      </button>
    </div>
  );
}
