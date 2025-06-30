export const metadata = {
  title: 'SMSCO | AI-Powered Consulting & Training Platform',
  description:
    'A smart digital platform connecting you to the right consultants, delivering expert guidance and data-driven training solutions with AI technology.',
  keywords: [
    'SMSCO',
    'AI consulting platform',
    'smart consulting',
    'AI-powered training',
    'digital advisory',
    'intelligent business solutions',
    'data-driven decisions',
    'consultants marketplace',
    'Next.js AI platform',
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
