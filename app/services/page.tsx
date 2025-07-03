// app/services/page.tsx
import React from 'react'
import Link from 'next/link'

interface ServiceCategory {
  category: string
  items: { title: string; href: string }[]
}

const services: ServiceCategory[] = [
  {
    category: 'الخدمات الأساسية',
    items: [
      { title: 'الاستشارات الذكية',     href: '/services/ai-consultation' },
      { title: 'التدريب الرقمي',        href: '/services/digital-training' },
      { title: 'المطابقة الذكية',       href: '/services/smart-match' },
    ],
  },
  {
    category: 'الخدمات الإدارية والمهنية',
    items: [
      { title: 'خدمة تمهير للتوظيف والتدريب', href: '/services/tamheer-program' },
      { title: 'تقييم الأداء المهني',           href: '/services/performance-evaluation' },
      { title: 'إعداد السير الذاتية ورسائل التوظيف', href: '/services/cv-cover-letter' },
    ],
  },
  {
    category: 'الفعاليات والمؤتمرات',
    items: [
      { title: 'حجز المؤتمرات والفعاليات',  href: '/services/event-booking' },
      { title: 'إدارة الأحداث وإصدار الشهادات', href: '/services/event-management' },
    ],
  },
  {
    category: 'الخدمات الداعمة والتسويق الذكي',
    items: [
      { title: 'التسويق الذكي باستخدام AI',    href: '/services/ai-marketing' },
      { title: 'روبوت الدردشة الذكي',         href: '/services/chatbot' },
      { title: 'نظام الدفع الإلكتروني والفوترة', href: '/services/payment-and-billing' },
      { title: 'تحليلات وتقارير الأداء',       href: '/services/analytics-reports' },
    ],
  },
  {
    category: 'خدمات الأمان وحفظ الحقوق',
    items: [
      { title: 'التوقيع الإلكتروني للعقود', href: '/services/e-signature' },
      { title: 'نظام التحكيم الداخلي',       href: '/services/internal-arbitration' },
      { title: 'تشفير البيانات الحساسة',      href: '/services/data-encryption' },
      { title: 'منع التلاعب والتواصل الخارجي', href: '/services/fraud-prevention' },
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">خدمات منصة سمسكو الذكية</h1>
      {services.map((cat) => (
        <section key={cat.category} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{cat.category}</h2>
          <ul className="list-disc list-inside space-y-2">
            {cat.items.map((svc) => (
              <li key={svc.href}>
                <Link href={svc.href} className="text-blue-600 hover:underline">
                  {svc.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  )
}
