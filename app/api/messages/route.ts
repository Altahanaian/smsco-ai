import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.FORMSPREE_API_KEY;
  const formId = process.env.FORMSPREE_FORM_ID;

  if (!apiKey || !formId) {
    return NextResponse.json(
      { error: 'Missing API credentials' },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      `https://formspree.io/api/forms/${formId}/submissions`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Accept: 'application/json',
        },
      }
    );

    const data = await res.json();
    const messages =
      data.submissions?.map((sub: any) => ({
        id: sub.id,
        email: sub.data.email,
        message: sub.data.message,
        date: sub.createdAt,
      })) || [];

    return NextResponse.json({ messages });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}
