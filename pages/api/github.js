// import { Octokit } from '@octokit/rest';
import { graphql } from '@octokit/graphql';
// const octokit = new Octokit({ auth: process.env.GH_TOKEN });

const github = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GH_TOKEN}`,
  },
});

export default async(_, res) => {
  const query = `{
    viewer {
      Company: company
      Location: location
      ContributedTo: repositoriesContributedTo
        (first:100, includeUserRepositories: true, privacy: PUBLIC) {
        totalCount
        nodes {
          name: nameWithOwner
        }
      }
    }
  }`;
  return github(query)
    .then(result => {
      res.send(result);
    }).catch(err => {
      res.send(err);
      console.log(err);
    });
};
