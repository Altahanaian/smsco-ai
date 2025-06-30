'use client';

import React from 'react';

export default function LoginProviderPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4">تسجيل كمقدّم خدمة</h1>
        <label className="block mb-2">
          <span className="text-gray-700">البريد الإلكتروني</span>
          <input
            type="email"
            className="mt-1 block w-full border rounded p-2"
            placeholder="you@example.com"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">كلمة المرور</span>
          <input
            type="password"
            className="mt-1 block w-full border rounded p-2"
            placeholder="••••••••"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          تسجيل كمقدّم
        </button>
      </form>
    </div>
  );
}
