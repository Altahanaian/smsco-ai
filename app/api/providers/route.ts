import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Provider from '@/models/Provider';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, password, phone, field, lang, bio, linkedin } = body;

  if (!name || !email || !password || !phone || !field || !lang || !bio) {
    return NextResponse.json(
      { message: 'يرجى تعبئة جميع الحقول المطلوبة' },
      { status: 400 }
    );
  }

  await connectToDatabase();

  const exists = await Provider.findOne({ email });
  if (exists) {
    return NextResponse.json(
      { message: 'البريد الإلكتروني مستخدم مسبقًا' },
      { status: 409 }
    );
  }

  const newProvider = await Provider.create({
    name,
    email,
    password,
    phone,
    field,
    lang,
    bio,
    linkedin: linkedin || '',
  });

  return NextResponse.json(
    { message: 'تم إنشاء الحساب بنجاح', provider: newProvider },
    { status: 201 }
  );
}
