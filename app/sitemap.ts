// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.smsco.ai'
  const now = new Date().toISOString()

  // صفحة الخدمات
  const entries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/services`,
      lastModified: now,
    },
  ]

  // إضافة روابط لكل خدمة ضمن التصنيف (لما يتم إنشاؤها لاحقًا)
  [
    '/services/ai-consultation',
    '/services/digital-training',
    '/services/smart-match',
    '/services/tamheer-program',
    '/services/performance-evaluation',
    '/services/cv-cover-letter',
    '/services/event-booking',
    '/services/event-management',
    '/services/ai-marketing',
    '/services/chatbot',
    '/services/payment-and-billing',
    '/services/analytics-reports',
    '/services/e-signature',
    '/services/internal-arbitration',
    '/services/data-encryption',
    '/services/fraud-prevention',
  ].forEach((path) =>
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified: now,
    })
  )

  return entries
}
