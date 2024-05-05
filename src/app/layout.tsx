import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SEO } from './SEO';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: `%s - ${SEO.title}`,
    default: SEO.title,
  },
  description: SEO.description,
  keywords: SEO.keywords,
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: SEO.verification.other,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
