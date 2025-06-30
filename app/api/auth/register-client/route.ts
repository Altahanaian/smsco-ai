// app/api/auth/register-client/route.ts
import { NextResponse } from 'next/server';

type RecaptchaResponse = {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  // يمكنك إضافة الحقول الأخرى التي تعيدها reCAPTCHA مثل:
//   'error-codes'?: string[];
};

export async function POST(request: Request) {
  const { token } = await request.json();

  const verifyRes = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    { method: 'POST' }
  );

  // هنا نخبر TypeScript أن ما يرد علينا هو RecaptchaResponse
  const verifyData: RecaptchaResponse = await verifyRes.json();

  if (!verifyData.success) {
    return NextResponse.json(
      { message: 'فشل التحقق من reCAPTCHA' },
      { status: 400 }
    );
  }

  // بقية منطق التسجيل...
  return NextResponse.json({ success: true });
}
