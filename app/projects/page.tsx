import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { GHDataInput, getGithubData } from './data';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Eye, FileWarningIcon, HistoryIcon, LucideIcon, Star, TagIcon } from 'lucide-react';

type TooltipIconProps = {
  Icon: LucideIcon;
  content: string;
};

function TooltipIcon({ Icon, content }: TooltipIconProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Icon size={18} />
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
      <Card key={repo.name} className="m-1">
        <CardContent className={'p-1 m-0 grid grid-cols-3'}>
          <CardHeader className="m-0 p-2 col-span-2">
            <CardTitle className="text-lg">
              <Link href={repo.url} legacyBehavior passHref>
                {repo.name}
              </Link>
            </CardTitle>
            <CardDescription>{repo.description}</CardDescription>
            <CardDescription>
              <Link href={repo.licenseInfo?.url || ''}>
                license: {repo.licenseInfo?.name || 'UNKNOWN'}
              </Link>
            </CardDescription>
          </CardHeader>

          <div>
            <div className="grid grid-cols-2 p-0 pr-2 justify-items-end">
              <TooltipIcon Icon={Star} content="Number of users who have starred this repo." />
              {repo.stargazerCount}
            </div>
            <div className="grid grid-cols-2 p-0 pr-2 justify-items-end">
              <TooltipIcon Icon={Eye} content="Number of users who have watched this repo." />
              {repo.watchers.totalCount}
            </div>
            <div className="grid grid-cols-2 p-0 pr-2 justify-items-end">
              <TooltipIcon Icon={FileWarningIcon} content="Number of issues on this repo." />
              {repo.issues.totalCount}
            </div>
            <div className="grid grid-cols-2 p-0 pr-2 justify-items-end">
              <TooltipIcon Icon={TagIcon} content="Latest release tag/version." />
              {repo.latestRelease?.name || 'N/A'}
            </div>
            <div className="grid grid-cols-2 p-0 pr-2 justify-items-end">
              <TooltipIcon Icon={HistoryIcon} content="Last date this repo was pushed to." />
              {new Date(repo?.pushedAt || '').toLocaleDateString('en-US', dateOptions)}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  });
}

export default async function ProjectPage() {
  return (
    <div className="grid grid-cols-2 justify-center content-center">
      <div>
        <ProjectsTable name="unity" />
      </div>
      <div>
        <ProjectsTable language="haxe" />
      </div>
    </div>
  );
}
