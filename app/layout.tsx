import React from 'react';
import './globals.css';

export const metadata = {
  title: 'vantreeseba.com',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={'dark'}>{children}</body>
    </html>
  );
}
