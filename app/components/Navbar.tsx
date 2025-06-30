'use client';
import Link from 'next/link';

export default function Navbar({ lang }: { lang: 'ar' | 'en' }) {
  const isAr = lang === 'ar';

  const links = isAr
    ? [
        { href: '/', label: 'الرئيسية' },
        { href: '/admin/emails', label: 'البريد الإلكتروني' },
        { href: '/admin/readme', label: 'دليل الاستخدام' },
        { href: '/admin/control', label: 'متابعة التشغيل' },
      ]
    : [
        { href: '/', label: 'Home' },
        { href: '/admin/emails', label: 'Emails' },
        { href: '/admin/readme', label: 'README Guide' },
        { href: '/admin/control', label: 'Platform Monitor' },
      ];

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: isAr ? 'flex-end' : 'flex-start',
        gap: '2rem',
        padding: '1rem 2rem',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        direction: isAr ? 'rtl' : 'ltr',
      }}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          style={{
            color: '#6a1b9a',
            fontWeight: 'bold',
            textDecoration: 'none',
          }}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
