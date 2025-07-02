import { NextResponse } from 'next/server';
import prisma from '@lib/prisma';

export async function POST(request: Request) {
  type AiMatchBody = {
    keywords?: string[];
    lang: string;
  };

  const { keywords = [], lang }: AiMatchBody = await request.json();

  const all = await prisma.provider.findMany({
    where: { lang, isActive: true }
  });

  const data = all.filter((p) => {
    const kws = p.keywords as string[];
    return keywords.some((k) => kws.includes(k));
  });

  return NextResponse.json({ success: true, data });
}
