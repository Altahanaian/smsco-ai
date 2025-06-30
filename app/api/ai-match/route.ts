// app/api/ai-match/route.ts

import { NextResponse } from 'next/server';

const consultants = [
  {
    id: 1,
    name: 'د. أحمد الزهراني',
    field: 'استشارات إدارية',
    rating: 4.8,
    lang: 'ar',
    img: '/consultant1.jpg',
    keywords: [
      'إدارة',
      'تخطيط',
      'تنظيم',
      'قيادة',
      'إدارة موارد بشرية',
      'استراتيجية',
      'هيكلة',
    ],
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    field: 'Business Strategy',
    rating: 4.9,
    lang: 'en',
    img: '/consultant2.jpg',
    keywords: [
      'business',
      'strategy',
      'startup',
      'planning',
      'growth',
      'operations',
      'scaling',
    ],
  },
  // أضف هنا باقي المستشارين بنفس الصيغة
];

// POST /api/ai-match
export async function POST(request: Request) {
  try {
    const { keywords = [], lang } = await request.json();
    const matches = consultants.filter(c =>
      c.lang === lang &&
      c.keywords.some(kw =>
        keywords.map((k: string) => k.toLowerCase()).includes(kw.toLowerCase())
      )
    );
    return NextResponse.json({ success: true, data: matches });
  } catch (e: any) {
    console.error('Error in ai-match POST:', e);
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}

// GET /api/ai-match
export async function GET() {
  return NextResponse.json({ success: true, data: consultants });
}
