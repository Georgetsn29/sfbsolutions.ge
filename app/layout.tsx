import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'SFB Solutions',
  description: 'სრულყოფილი გადაწყვეტილებები თქვენი სავაჭრო სივრცისთვის',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ka">
      <head>
        <link rel="icon" href="./img/head.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
