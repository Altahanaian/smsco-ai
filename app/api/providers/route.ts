// المسار: app/api/providers/route.ts
import { NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'

export async function GET() {
  const providers = await prisma.provider.findMany({
    where: { isActive: true }
  })
  return NextResponse.json({ success: true, providers })
}
