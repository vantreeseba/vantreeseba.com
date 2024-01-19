import React from 'react';
import './globals.css';
import { HeaderMenu } from '@/components/header-menu';

export const metadata = {
  title: 'vantreeseba.com',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={'dark'}>
        <div className="grid justify-center p-4">
          <HeaderMenu />
        </div>
        <div className="grid justify-center">{children}</div>
      </body>
    </html>
  );
}
