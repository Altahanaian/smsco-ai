import React from 'react';

export default function RegisterPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <p>
        You can register as a client or as a consultant to begin using the
        platform.
      </p>
      <a href="/en/register/client" className="text-blue-600 underline">
        Register as Client
      </a>
      <br />
      <a href="/en/register/consultant" className="text-blue-600 underline">
        Register as Consultant
      </a>
    </main>
  );
}
