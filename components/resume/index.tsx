import React from 'react';
import Image from 'next/image';

import sections from './sections.json';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';

type SectionProps = {
  title: string;
  entries: Array<string>;
};

function Section({ title, entries }: SectionProps) {
  return (
    <Card key={title}>
      <CardHeader className="text-base0A">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-base0B">
        {entries.map((entry) => {
          return <li key={entry}>{entry}</li>;
        })}
      </CardContent>
    </Card>
  );
}

export default function Resume() {
  return (
    <>
      <div className="p-2 grid grid-cols-3 justify-items-center">
        <Image
          src="/bio-image.jpg"
          alt={'An image of Ben Van Treese.'}
          width={200}
          height={200}
          className="rounded-full"
        />
        <Card className="col-span-2 m-0 w-full">
          <CardContent className="text-base0B">
            <p className="pt-2 typingText">I'm Ben Van Treese, a web and game developer.</p>
            <br />
            <p className="pt-2 typingText line2">
              My main interests are procedural generation, art, music, robotics and electronics.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-3 grid-flow-row-dense gap-4 p-2 w-full">
        {sections.map((x, i) => {
          return <Section key={i} title={x.title} entries={x.entries} />;
        })}
      </div>
    </>
  );
}
