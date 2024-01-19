import React from 'react';
import Image from 'next/image';
import Resume from '../components/resume';

export default function HomePage() {
  return (
    <>
      <Resume />
    </>
  );
}

//  <Image
//     src="/bio-image.jpg"
//     alt={'An image of Ben Van Treese.'}
//     width={200}
//     height={200}
//     className="rounded-full"
//   />
