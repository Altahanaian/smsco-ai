// app/api/match/route.ts

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { clientId, serviceCategory } = await req.json();

    if (!clientId || !serviceCategory) {
      return NextResponse.json(
        { error: 'Missing clientId or serviceCategory' },
        { status: 400 }
      );
    }

    // البحث عن مقدمي الخدمة النشطين في الفئة المطلوبة
    const providers = await prisma.provider.findMany({
      where: {
        services: { has: serviceCategory },
        isActive: true,
      },
      orderBy: { rating: 'desc' },
      take: 10,
    });

    // تسجيل أول مطابقة في تاريخ الـ matches
    if (providers.length > 0) {
      await prisma.match.create({
        data: {
          clientId,
          providerId: providers[0].id,
          serviceCategory,
        },
      });
    }

    return NextResponse.json({ providers });
  } catch (error) {
    console.error('[/api/match] Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
