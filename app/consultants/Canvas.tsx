// Smart Consultants Matching Page
'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const consultants = [
  {
    id: 1,
    name: 'د. أحمد الزهراني',
    field: 'استشارات إدارية',
    rating: 4.8,
    lang: 'ar',
    img: '/consultant1.jpg',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    field: 'Business Strategy',
    rating: 4.9,
    lang: 'en',
    img: '/consultant2.jpg',
  },
];

export default function AIConsultantsPage() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState<typeof consultants>([]);

  const handleSearch = async () => {
    const response = await fetch('/api/ai-match', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: input }),
    });
    const data = await response.json();
    setResults(data.matches || []);
  };

  return (
    <main className="min-h-screen p-6 font-sans bg-gray-50">
      <nav className="flex justify-between items-center py-4">
        <Link
          href="/"
          className="text-purple-700 font-bold text-lg flex items-center gap-2"
        >
          <Image src="/logo.png" alt="SMSCO Logo" width={32} height={32} />
          SMSCO
        </Link>
        <div className="flex gap-4">
          <Link
            href="/#about"
            className="text-gray-700 hover:text-purple-700 font-medium"
          >
            من نحن
          </Link>
          <Link
            href="/#testimonials"
            className="text-gray-700 hover:text-purple-700 font-medium"
          >
            آراء العملاء
          </Link>
          <Link
            href="/#register"
            className="text-gray-700 hover:text-purple-700 font-medium"
          >
            التسجيل
          </Link>
          <Link href="/consultants" className="text-purple-700 font-medium">
            🔎 الاستشارات الذكية
          </Link>
        </div>
      </nav>

      <h1 className="text-3xl font-bold text-center mb-6">
        🔎 اختر استشاريك الذكي
      </h1>

      <div className="flex flex-col items-center gap-4 max-w-xl mx-auto">
        <input
          className="w-full border p-3 rounded-lg"
          placeholder="اكتب نوع الاستشارة أو التخصص"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-purple-700 text-white px-6 py-2 rounded-lg"
          onClick={handleSearch}
        >
          بحث ذكي
        </button>
        <Link
          href="#register"
          className="text-sm text-purple-700 hover:underline"
        >
          أو سجل الآن للحصول على توصيات مخصصة ⬇️
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {results.map((c) => (
          <div
            key={c.id}
            className="border rounded-xl p-4 shadow-lg flex items-center gap-4"
          >
            <Image
              src={c.img}
              alt={c.name}
              width={80}
              height={80}
              className="rounded-full"
            />
            <div>
              <h2 className="text-xl font-bold">{c.name}</h2>
              <p className="text-gray-600">{c.field}</p>
              <p>⭐ {c.rating}</p>
            </div>
          </div>
        ))}
        {results.length === 0 && (
          <p className="text-center text-gray-500 col-span-2">
            لا توجد نتائج حتى الآن
          </p>
        )}
      </div>

      {/* About Section */}
      <section id="about" className="mt-20 bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">من نحن</h2>
        <p className="text-gray-700 leading-relaxed">
          SMSCO هي شركة رائدة في تقديم حلول الاستشارات والتدريب باستخدام الذكاء
          الاصطناعي، نربط العملاء بالمستشارين المناسبين بسرعة وكفاءة.
        </p>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="mt-20 bg-white p-8 rounded-xl shadow"
      >
        <h2 className="text-2xl font-bold mb-4">آراء العملاء</h2>
        <ul className="space-y-4">
          <li className="text-gray-800">
            "خدمة مميزة وسهولة في الوصول إلى الاستشارة المناسبة." – عميل سعودي
          </li>
          <li className="text-gray-800">
            "سرعة استجابة ودقة في التطابق مع استشاري محترف." – Sarah M.
          </li>
        </ul>
      </section>

      {/* Registration Section */}
      <section id="register" className="mt-20 bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">سجل الآن</h2>
        <form className="space-y-4">
          <input
            className="w-full border p-3 rounded-lg"
            placeholder="الاسم الكامل"
          />
          <input
            className="w-full border p-3 rounded-lg"
            placeholder="البريد الإلكتروني"
          />
          <input
            className="w-full border p-3 rounded-lg"
            placeholder="مجال الاهتمام"
          />
          <button className="bg-purple-700 text-white px-6 py-2 rounded-lg">
            إنشاء حساب
          </button>
        </form>
      </section>
    </main>
  );
}
