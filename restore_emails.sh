#!/bin/bash

echo "🔄 بدء استعادة النسخ الاحتياطية..."

if [ ! -d "app/admin/emails_backup" ] || [ ! -d "app/api/emails_backup" ]; then
  echo "❌ لم يتم العثور على النسخ الاحتياطية!"
  exit 1
fi

cp -r app/admin/emails_backup/* app/admin/emails/
cp -r app/api/emails_backup/* app/api/emails/

echo "✅ تم استعادة الملفات بنجاح:"
echo "⬅️ من emails_backup إلى emails"
