// lib/mongodb.ts
import mongoose from 'mongoose'

// لن نخّر الخطأ إلا عند محاولة الاتصال فعلياً
const MONGODB_URI = process.env.MONGODB_URI as string

// كاش للاتصال المجدد
let cached = (global as any).mongoose || {
  conn: null as mongoose.Mongoose | null,
  promise: null as Promise<mongoose.Mongoose> | null,
}

export async function connectToDatabase(): Promise<mongoose.Mongoose> {
  // الآن نتحقّق من وجود URI داخل الدالة
  if (!MONGODB_URI) {
    throw new Error('الرجاء إضافة MONGODB_URI في ملف .env')
  }

  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: 'smsco',
        bufferCommands: false,
      })
      .then((mongoose) => mongoose)
  }

  cached.conn = await cached.promise
  ;(global as any).mongoose = cached
  return cached.conn
}
