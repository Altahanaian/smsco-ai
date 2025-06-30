// pages/api/ai/chat.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
const FETCH_TIMEOUT_MS = 10000; // 10 ثواني

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  // إعداد الـ AbortController للـ timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.AI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: message }],
      }),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    const data = await response.json();
    // نعيد حالة الاستجابة الأصلية (مثلاً 200 أو 401 لو مفتاح خاطئ)
    return res.status(response.status).json(data);
  } catch (err: any) {
    clearTimeout(timeoutId);
    if (err.name === 'AbortError') {
      return res.status(504).json({ error: 'AI request timeout' });
    }
    console.error('AI request failed:', err);
    return res.status(500).json({ error: 'AI request failed' });
  }
}
