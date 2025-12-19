import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Morrison & Associates',
  description: 'Strategic legal counsel for complex corporate transactions, delivering sophisticated M&A and securities expertise with unwavering commitment to client success',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
