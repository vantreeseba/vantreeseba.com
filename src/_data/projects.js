const EleventyFetch = require("@11ty/eleventy-fetch");

const EMPTY = { dropechoUnity: [], dropechoHaxe: [], personal: [] };
const GQL_ENDPOINT = "https://api.github.com/graphql";

async function githubSearch(query, token, cacheKey) {
  const gql = `{
    search(type: REPOSITORY, query: ${JSON.stringify(query)}, first: 50) {
      edges {
        node {
          ... on Repository {
            name: nameWithOwner
            url
            description
            stargazerCount
            pushedAt
            latestRelease { tagName }
            issues { totalCount }
            watchers { totalCount }
          }
        }
      }
    }
  }`;

  // Append cacheKey as a dummy param so each query gets its own cache entry.
  // GitHub's GraphQL endpoint ignores unknown query params.
  const data = await EleventyFetch(`${GQL_ENDPOINT}?_cache=${cacheKey}`, {
    duration: "1h",
    type: "json",
    fetchOptions: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query: gql }),
    },
  });

  return (data?.data?.search?.edges ?? [])
    .map((e) => e.node)
    .filter(Boolean)
    .sort((a, b) => new Date(b.pushedAt) - new Date(a.pushedAt));
}

module.exports = async function () {
  const token = process.env.GH_TOKEN;
  if (!token) {
    console.warn("[projects] GH_TOKEN not set — using empty project lists");
    return EMPTY;
  }

  try {
    const [dropechoUnity, dropechoHaxe, personal] = await Promise.all([
      githubSearch("org:dropecho in:name unity", token, "dropecho-unity"),
      githubSearch("org:dropecho language:haxe", token, "dropecho-haxe"),
      githubSearch("user:vantreeseba", token, "personal"),
    ]);
    return { dropechoUnity, dropechoHaxe, personal };
  } catch (e) {
    console.error("[projects] GitHub fetch failed:", e.message);
    return EMPTY;
  }
};
