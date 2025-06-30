import { NextResponse } from 'next/server';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});
const productData: Record<string, { name: string; price: number }> = {
  'ai-data-analysis': { name: 'تحليل البيانات الذكي', price: 50000 },
};
export async function POST(req: Request) {
  const { serviceId } = await req.json();
  const prod = productData[serviceId];
  if (!prod)
    return NextResponse.json({ error: 'Unknown service' }, { status: 400 });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'sar',
          product_data: { name: prod.name },
          unit_amount: prod.price,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
  });
  return NextResponse.json({ url: session.url });
}
