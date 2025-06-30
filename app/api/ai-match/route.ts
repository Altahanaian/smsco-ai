import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
  const { keywords = [], lang } = await request.json()

  const providers = await prisma.provider.findMany({
    where: {
      lang,
      keywords: { hasSome: keywords },
      isActive: true
    }
  })

  return NextResponse.json({ success: true, data: providers })
}
