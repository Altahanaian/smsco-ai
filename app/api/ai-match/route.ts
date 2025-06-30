import { NextResponse } from 'next/server'
import prisma from '@lib/prisma'

export async function POST(request: Request) {
  const { keywords = [], lang } = await request.json()

  // أولاً نجيب كل المقدمين النشطين للغة المطلوبة
  const all = await prisma.provider.findMany({
    where: { lang, isActive: true }
  })

  // ثم نفلترهم في الذاكرة بناءً على مصفوفة keywords
  const data = all.filter(p => {
    // p.keywords هو حقل Json → يفترض أن يكون مصفوفة string[]
    const kws: string[] = p.keywords as string[]
    return keywords.some(k => kws.includes(k))
  })

  return NextResponse.json({ success: true, data })
}
