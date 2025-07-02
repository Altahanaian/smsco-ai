// المسار: app/api/match/route.ts
import { NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'

export async function POST(request: Request) {
  // … نفس منطق ai-match أو عدّل حسب الحاجة
  return NextResponse.json({ success: true })
}
