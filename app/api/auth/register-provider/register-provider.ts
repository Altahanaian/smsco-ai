import type { NextApiRequest, NextApiResponse } from 'next';

let providers: any[] = []; // قاعدة بيانات مؤقتة

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const {
    name,
    email,
    password,
    phone,
    field,
    lang,
    bio,
    linkedin,
    recaptchaToken,
  } = req.body;

  // التحقق من البيانات الأساسية
  if (!name || !email || !password || !phone || !field || !lang || !bio) {
    return res
      .status(400)
      .json({ message: 'الرجاء تعبئة جميع الحقول المطلوبة' });
  }

  // التحقق من تكرار البريد الإلكتروني
  const exists = providers.find((p) => p.email === email);
  if (exists) {
    return res.status(409).json({ message: 'البريد الإلكتروني مسجل مسبقًا' });
  }

  // في المستقبل: التحقق من reCAPTCHA باستخدام Google API

  // إنشاء حساب جديد
  const newProvider = {
    id: providers.length + 1,
    name,
    email,
    phone,
    field,
    lang,
    bio,
    linkedin: linkedin || null,
    createdAt: new Date().toISOString(),
  };

  providers.push(newProvider);

  return res
    .status(201)
    .json({ message: 'تم إنشاء الحساب بنجاح', provider: newProvider });
}
