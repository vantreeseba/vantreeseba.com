import { graphql } from '@octokit/graphql';

export type GHRepo = {
  name: string;
  url: string;
  homepageUrl: string;
  licenseInfo?: {
    name?: string;
    nickname?: string;
    url?: string;
  };
  description: string | null;
  stargazerCount: number;
  watchers: { totalCount: number };
  issues: { totalCount: number };
  latestRelease?: { name: string; tagName: string };
  pushedAt: string | null;
};

const github = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GH_TOKEN}`,
  },
});

export type GHDataInput = {
  user?: string;
  org?: string;
  name?: string;
  language?: string;
};

const defaultInput = {
  user: '@vantreeseba',
  org: 'dropecho',
  name: '',
  language: '',
};

export async function getGithubData({
  user = '@vantreeseba',
  org = 'dropecho',
  name = '',
  language = '',
}: GHDataInput = defaultInput) {
  const query = `
  {
     search(
      type: REPOSITORY,
      query: """
        ${user ? 'user:' + user : ''} 
        ${org ? 'org:' + org : ''} 
        ${name ? 'in:name ' + name : ''}
        ${language ? 'language:' + language : ''}
      """,
       first: 100
    ) {
      edges {
        node {
          ... on Repository {
            name: nameWithOwner
            url
            description
            homepageUrl
            licenseInfo {
              name
              nickname
              url
            }
            stargazerCount
            watchers {
              totalCount
            }
            issues {
              totalCount
            }
            latestRelease {
              name
              tagName
            }
            pushedAt
          }
        }
      }
    }
  }
  `;

  const data = (await github(query)) as {
    search: {
      edges: Array<{ node: GHRepo }>;
    };
  };

  return data?.search.edges.map((x) => x.node);
}
