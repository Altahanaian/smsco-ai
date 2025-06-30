import { NextApiRequest, NextApiResponse } from 'next';

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
      'أداء',
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
  {
    id: 3,
    name: 'محمد العنزي',
    field: 'استشارات مالية',
    rating: 4.7,
    lang: 'ar',
    img: '/consultant3.jpg',
    keywords: [
      'محاسبة',
      'استثمار',
      'مالية',
      'تحليل',
      'تقارير',
      'ميزانية',
      'ضريبة',
    ],
  },
  {
    id: 4,
    name: 'Emily Smith',
    field: 'Marketing & Branding',
    rating: 4.6,
    lang: 'en',
    img: '/consultant4.jpg',
    keywords: [
      'marketing',
      'branding',
      'social media',
      'ads',
      'content',
      'campaign',
      'SEO',
    ],
  },
  {
    id: 5,
    name: 'خالد الغامدي',
    field: 'استشارات تقنية',
    rating: 4.9,
    lang: 'ar',
    img: '/consultant5.jpg',
    keywords: [
      'تقنية',
      'تحول رقمي',
      'ذكاء اصطناعي',
      'أمن سيبراني',
      'أنظمة',
      'برمجة',
      'تحليل نظم',
    ],
  },
  {
    id: 6,
    name: 'Layla AlFahad',
    field: 'Human Resources',
    rating: 4.5,
    lang: 'en',
    img: '/consultant6.jpg',
    keywords: [
      'HR',
      'recruitment',
      'performance',
      'training',
      'talent',
      'development',
    ],
  },
  {
    id: 7,
    name: 'فهد السبيعي',
    field: 'استشارات قانونية',
    rating: 4.4,
    lang: 'ar',
    img: '/consultant7.jpg',
    keywords: ['قانون', 'عقود', 'لوائح', 'أنظمة', 'تحكيم', 'شكاوى', 'محاماة'],
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { query } = req.body;

  if (!query || typeof query !== 'string') {
    return res.status(400).json({ error: 'Invalid query' });
  }

  const normalizedQuery = query.toLowerCase();

  const matches = consultants.filter(
    (consultant) =>
      consultant.keywords.some((keyword) =>
        normalizedQuery.includes(keyword.toLowerCase())
      ) ||
      normalizedQuery.includes(consultant.field.toLowerCase()) ||
      normalizedQuery.includes(consultant.name.toLowerCase())
  );

  res.status(200).json({ matches });
}
