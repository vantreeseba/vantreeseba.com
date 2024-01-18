import React from 'react';
import Image from 'next/image';
import { Menu } from '@/components/menu';

export default function Home() {
  return (
    <div className="grid justify-center content-center">
      <Menu />
      <Image
        src="/bio-image.jpg"
        alt={'An image of Ben Van Treese.'}
        width={200}
        height={200}
        className="rounded-full"
      />
    </div>
  );
}
