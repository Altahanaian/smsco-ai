import { NextResponse } from 'next/server';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});
export async function GET() {
  const charges = await stripe.charges.list({ limit: 100 });
  const total = charges.data.reduce((sum, c) => sum + (c.amount || 0), 0);
  return NextResponse.json({
    totalRevenue: total,
    orders: charges.data.length,
  });
}
