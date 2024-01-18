import { graphql } from '@octokit/graphql';

const github = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GH_TOKEN}`,
  },
});

export default async (req, res) => {
  const url = new URL(req.url, 'https://' + req.headers['host']);
  const user = url.searchParams.get('user');
  const org = url.searchParams.get('org');
  const name = url.searchParams.get('name_contains');
  const language = url.searchParams.get('coding_lang');

  console.log('user', user);

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
  return github(query)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};
