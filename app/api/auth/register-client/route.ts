import { NextResponse } from 'next/server';
import fetch from 'node-fetch';
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
  const { name, email, password, phone, recaptchaToken } = await req.json();

  // تحقق من reCAPTCHA
  const secret = process.env.RECAPTCHA_SECRET_KEY!;
  const verifyRes = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secret}&response=${recaptchaToken}`,
    }
  );
  const verifyData = await verifyRes.json();
  if (!verifyData.success) {
    return NextResponse.json(
      { message: 'فشل التحقق من reCAPTCHA' },
      { status: 400 }
    );
  }

  // تشفير كلمة المرور
  const hashed = await bcrypt.hash(password, 10);

  // TODO: حفظ المستخدم في قاعدة البيانات (Prisma مثالياً)
  // await prisma.user.create({ data: { name, email, password: hashed, phone, role: 'CLIENT' } });

  // إرسال بريد التحقق (يمكن إضافة خدمة nodemailer/Zoho)
  // await sendVerificationEmail(email, token...)

  return NextResponse.json({
    message: 'تم التسجيل بنجاح، تحقق من بريدك للتفعيل',
  });
}
