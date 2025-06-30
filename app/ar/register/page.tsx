import React from 'react';

export default function RegisterPage() {
  return (
    <main dir="rtl" className="p-8">
      <h1 className="text-2xl font-bold mb-4">التسجيل</h1>
      <p>يمكنك التسجيل كمستخدم أو كمستشار للبدء في استخدام المنصة.</p>
      <a href="/ar/register/client" className="text-blue-600 underline">
        تسجيل مستخدم
      </a>
      <br />
      <a href="/ar/register/consultant" className="text-blue-600 underline">
        تسجيل مستشار
      </a>
    </main>
  );
}
