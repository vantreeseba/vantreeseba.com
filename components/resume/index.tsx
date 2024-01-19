import React from 'react';
import sections from './sections.json';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';

type SectionProps = {
  title: string;
  entries: Array<string>;
};

function Section({ title, entries }: SectionProps) {
  return (
    <Card key={title} className="m-5">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {entries.map((entry) => {
          return <li key={entry}>{entry}</li>;
        })}
      </CardContent>
    </Card>
  );
}

export default function Resume() {
  return (
    <div>
      <Card className="m-5">
        <CardContent>
          <p className="pt-2">I'm a web and game developer.</p>
          <p className="pt-2">
            My main hobbies / interests are procedural generation and art, music, robotics and
            electronics.
          </p>
        </CardContent>
      </Card>

      {sections.map((x, i) => {
        return <Section key={i} title={x.title} entries={x.entries} />;
      })}
    </div>
  );
}
