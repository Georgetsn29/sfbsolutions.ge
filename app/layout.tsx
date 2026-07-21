import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'SFB Solutions',
  description: 'სრულყოფილი გადაწყვეტილებები თქვენი სავაჭრო სივრცისთვის',
  icons: {
    icon: '/img/head.png', // Next.js auto-prefixes basePath here!
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ka">
      <body>{children}</body>
    </html>
  );
}