import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email } = await req.json();
  if (!email)
    return NextResponse.json({ success: false, message: 'Missing email' });

  try {
    // Save to DB
    await prisma.signup.create({ data: { email } });

    // Send via Zoho SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.sa',
      port: 465,
      secure: true,
      auth: {
        user: 'info@smsco.ai',
        pass: 'npAjn0jBLhH3', // Replace with actual Zoho app password
      },
    });

    await transporter.sendMail({
      from: '"SMSCO Platform" <info@smsco.ai>',
      to: 'info@smsco.ai',
      subject: 'New Signup',
      html: `<p>New signup from: <strong>${email}</strong></p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to process request',
    });
  }
}
