// app/dashboard/provider/page.tsx

'use client';

import React from 'react';
import { User, Calendar, DollarSign } from 'lucide-react';

export default function DashboardProviderPage() {
  const stats = [
    { title: 'عدد العملاء', value: 24, icon: <User className="w-6 h-6 text-purple-600" /> },
    { title: 'جلسات مقبلة', value: 5, icon: <Calendar className="w-6 h-6 text-green-600" /> },
    { title: 'الإيرادات', value: '12,340 ر.س', icon: <DollarSign className="w-6 h-6 text-yellow-600" /> },
  ];

  const appointments = [
    { name: 'علي محمد', time: '01-07-2025 10:00' },
    { name: 'سارة أحمد', time: '02-07-2025 14:00' },
  ];

  return (
    <div className="mx-auto max-w-7xl p-6 space-y-8 bg-gray-50 min-h-screen">
      {/* الهيدر */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-extrabold">لوحة تحكم المزود</h1>
          <p className="text-gray-500">مرحباً بك في لوحة التحكم الخاصة بك</p>
        </div>
        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
          إضافة خدمة جديدة
        </button>
      </header>

      {/* بطاقات الإحصائيات */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="flex items-center space-x-2 mb-2">
              {item.icon}
              <span className="text-2xl font-bold">{item.value}</span>
            </div>
            <p className="text-gray-600">{item.title}</p>
          </div>
        ))}
      </section>

      {/* جدول المواعيد القادمة */}
      <section>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">مواعيد قادمة</h2>
          <ul className="divide-y">
            {appointments.map((a) => (
              <li key={a.name} className="py-2 flex justify-between">
                <span>{a.name}</span>
                <span className="text-gray-500">{a.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
