# 📊 SMSCO.AI Platform

منصة ذكية للخدمات الإدارية والاستشارات والتدريب باستخدام تقنيات الذكاء الاصطناعي.

---

## 🎯 المميزات

- دعم لغتين: 🇸🇦 العربية و 🇬🇧 الإنجليزية
- نموذج تواصل احترافي مربوط بـ [Formspree](https://formspree.io)
- إرسال واستقبال الرسائل من البريد الرسمي `info@smsco.ai`
- لوحة تحكم ديناميكية لإدارة الرسائل
- حماية reCAPTCHA وفلترة الرسائل
- تصميم متجاوب (Responsive)

---

## 🧠 التقنيات المستخدمة

- Next.js 14
- TypeScript
- React 18
- Prisma ORM + SQLite
- Nodemailer / Zoho SMTP
- Formspree API
- Tailwind CSS
- i18next (تعدد اللغات)

---

## 🚀 التشغيل المحلي

```bash
npm install
npm run dev
```

ثم افتح: [http://localhost:3000](http://localhost:3000)

---

## 🔐 بيئة التطوير

قم بإنشاء ملف `.env.local` كالتالي:

```env
FORMSPREE_API_KEY=add0f7295f035d6352f2dffaf208ca874dde7296
FORMSPREE_FORM_ID=myzjnvbl
```

---

## 🛠️ إدارة لوحة التحكم

توجه إلى `/admin/dashboard` لعرض الرسائل  
(يتم التحقق من تسجيل الدخول المحلي عبر LocalStorage)

---

## 📬 التواصل

📧 [info@smsco.ai](mailto:info@smsco.ai)  
🌐 [https://www.smsco.ai](https://www.smsco.ai)

---

> تم تطوير هذه المنصة بدقة لتواكب التحول الرقمي في الإدارة الذكية.
