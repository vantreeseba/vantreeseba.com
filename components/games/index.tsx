import React from 'react';
import sections from './sections.json';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';

import Image from 'next/image';
import Link from 'next/link';

type GameProps = {
  name: string;
  description: string;
  url: string;
  imgUrl: string;
};

function Game({ name, description, url, imgUrl }: GameProps) {
  return (
    <Card key={name} className="max-w-lg">
      <Image
        src={imgUrl}
        className="rounded-t-lg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }} // optional
        alt={''}
      />
      <CardHeader className="text-base0E">
        <CardTitle className="pt-2">
          <Link href={url}>{name}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base0B">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default function Games() {
  return (
    <>
      <div className="grid lg:grid-cols-3 grid-flow-row-dense gap-4 p-2 w-full">
        {sections.map((x, i) => {
          return <Game key={i} {...x} />;
        })}
      </div>
    </>
  );
}
