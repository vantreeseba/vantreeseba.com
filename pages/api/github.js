import { graphql } from "@octokit/graphql";

const github = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GH_TOKEN}`,
  },
});

export default async (_, res) => {
  const query = `{
    viewer {
      Company: company
      Location: location
     ContributedTo: repositoriesContributedTo(
       first:25, 
       includeUserRepositories: true, 
       privacy: PUBLIC, 
       orderBy: {field: STARGAZERS, direction: DESC}) {
        totalCount
        nodes {
          name: nameWithOwner
          url
        }
      }
    }
  }`;
  return github(query)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};
