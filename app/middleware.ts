import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // إذا كان الطلب عبارة عن ملف أو يبدأ بـ /api فلا تقم بإعادة التوجيه
  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next')
  ) {
    return;
  }

  // إذا كان المستخدم بالفعل في صفحة اللغة مثل /en أو /ar فلا تقم بإعادة التوجيه
  const pathnameIsMissingLocale = /^\/$/.test(pathname);
  if (pathnameIsMissingLocale) {
    const locale = request.headers.get('accept-language')?.startsWith('ar')
      ? 'ar'
      : 'en';
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}${search}`, request.url)
    );
  }

  return NextResponse.next();
}
