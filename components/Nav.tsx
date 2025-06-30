'use client';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Nav() {
  const { data: session } = useSession();
  return (
    <nav className="p-4 bg-gray-100 flex justify-end">
      {session ? (
        <button
          onClick={() => signOut()}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          تسجيل الخروج
        </button>
      ) : (
        <button
          onClick={() => signIn('google')}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          تسجيل الدخول بـ Google
        </button>
      )}
    </nav>
  );
}
