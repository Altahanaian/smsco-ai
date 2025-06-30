#!/bin/bash

echo "📦 بدء التحديث الكامل وتشغيل المنصة..."

# 1. نسخ package.json
cp package.json ./package.json
echo "✅ تم تحديث package.json"

# 2. تثبيت جميع الحزم
npm install
echo "✅ تم تثبيت جميع الحزم"

# 3. تشغيل الخادم المحلي
echo "🚀 جاري تشغيل الخادم على http://localhost:3000 ..."
npm run dev
