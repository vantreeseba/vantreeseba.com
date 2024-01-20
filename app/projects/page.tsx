import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { GHDataInput, getGithubData } from './data';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Eye, FileWarningIcon, HistoryIcon, LucideIcon, Star, TagIcon } from 'lucide-react';

type TooltipIconProps = {
  Icon: LucideIcon;
  content: React.ReactNode;
};

function TooltipIcon({ Icon, content }: TooltipIconProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Icon size={18} className="text-base0D" />
        </TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

async function ProjectsTable(search: GHDataInput) {
  const data = await getGithubData(search);
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  };

  return data.map((repo) => {
    return (
      <Card key={repo.name}>
        <CardContent className={'p-1 m-0 grid grid-cols-3'}>
          <CardHeader className="m-0 p-2 col-span-2">
            <CardTitle className="text-lg text-accent-foreground">
              <Link href={repo.url} legacyBehavior passHref>
                {repo.name}
              </Link>
            </CardTitle>
            <CardDescription className="text-base0B">{repo.description}</CardDescription>
            <CardDescription>
              <Link href={repo.licenseInfo?.url || ''}>
                license: {repo.licenseInfo?.name || 'UNKNOWN'}
              </Link>
            </CardDescription>
          </CardHeader>

          <div>
            <div className="grid grid-cols-2 p-0 pr-2 justify-items-end">
              <TooltipIcon Icon={Star} content="Number of users who have starred this repo." />
              <p className="text-base0B">{repo.watchers.totalCount}</p>
            </div>
            <div className="grid grid-cols-2 p-0 pr-2 justify-items-end">
              <TooltipIcon Icon={FileWarningIcon} content="Number of issues on this repo." />
              <p className="text-base0B">{repo.issues.totalCount}</p>
            </div>
            <div className="grid grid-cols-2 p-0 pr-2 justify-items-end">
              <TooltipIcon Icon={TagIcon} content="Latest release tag/version." />
              <p className="text-base0B">{repo.latestRelease?.name || 'N/A'}</p>
            </div>
            <div className="grid grid-cols-2 p-0 pr-2 justify-items-end">
              <TooltipIcon Icon={HistoryIcon} content="Last date this repo was pushed to." />
              <p className="text-base0B">
                {new Date(repo?.pushedAt || '').toLocaleDateString('en-US', dateOptions)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  });
}

export default async function ProjectPage() {
  return (
    <div className="grid p-4 gap-4 grid-cols-2 justify-center content-center">
      <div className="grid gap-4">
        <ProjectsTable name="unity" />
      </div>
      <div className="grid gap-4">
        <ProjectsTable language="haxe" />
      </div>
      <div className="grid gap-4">
        <ProjectsTable org="vantreeseba" />
      </div>
    </div>
  );
}
