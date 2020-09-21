import { Octokit } from '@octokit/rest';

const octokit = new Octokit({ auth: process.env.GH_TOKEN });

export default async(_, res) => {
  return octokit.request('/users/vantreeseba').then(data => {
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=86400');
    res.send(data);
  }).catch(err => {
    res.status(err.status);
    res.error(err);
  });
};
