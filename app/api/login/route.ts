export async function POST(req: Request) {
  const body = await req.json();
  const { password } = body;
  const correct = password === 'smsco2025'; // استبدلها لاحقاً بكلمة مرور من .env أو DB
  return new Response(null, { status: correct ? 200 : 401 });
}
