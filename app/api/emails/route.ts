import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const emails = await prisma.signup.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(emails);
}
