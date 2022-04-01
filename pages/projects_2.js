import styles from '../styles/Home.module.css';
import portfolioStyles from '../styles/portfolio.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Loading from '../components/loading';

import Module from '../components/module';
import useSWR from 'swr';

function Project({ name, description, url, ...details }) {
  return (
    <a href={url}>
      <div className={portfolioStyles.key}>
        <div>{name}</div>
        <br />
        <div className={portfolioStyles.description}>{description}</div>
      </div>
      <div className={portfolioStyles.value}>
        <div>
          updated: {new Date(details?.pushedAt || 0).toLocaleDateString()}
        </div>
        <div>stars: {details?.stargazerCount}</div>
        <div>issues: {details?.issues?.totalCount || 0}</div>
        <div>watchers: {details?.watchers?.totalCount || 0}</div>
        <div>release: {details?.latestRelease?.tagName || 'none'}</div>
      </div>
      <span className={portfolioStyles.line} />
    </a>
  );
}

function GithubList({
  org = '',
  user = '',
  name_contains = '',
  coding_lang = '',
}) {
  const { data, error } = useSWR(
    ['/api/github', { org, user, name_contains, coding_lang }],
    fetcher
  );

  let content;
  if (error) {
    content = <div>Error fetching data from github.</div>;
  } else if (!data) {
    content = <Loading />;
  } else if (data?.search?.edges?.length > 0) {
    console.log(data);
    const repos = data.search.edges.map((x) => x.node);
    content = repos
      .sort((a, b) => new Date(b.pushedAt) - new Date(a.pushedAt))
      .map((x) => <Project key={x.name} {...x} />);
  } else {
    content = <div> No projects found. </div>;
  }

  return content;
}

async function fetcher(url, args) {
  const uri = new URL(url, window.location.origin);
  for (var pair of Object.entries(args)) {
    uri.searchParams.set(pair[0], pair[1]);
  }
  const response = await fetch(uri.toString());
  return await response.json();
}

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={`${styles.main} ${styles.col2}`}>
        <Module title="Dropecho - Unity" span={1}>
          <div className={portfolioStyles.content}>
            <GithubList org="dropecho" name_contains="unity" />
          </div>
        </Module>
        <Module title="Dropecho - Haxe" span={1}>
          <div className={portfolioStyles.content}>
            <GithubList org="dropecho" coding_lang="haxe" />
          </div>
        </Module>
        <Module title="Personal" span={1}>
          <div className={portfolioStyles.content}>
            <GithubList user="vantreeseba" />
          </div>
        </Module>
      </main>
      <Footer />
    </div>
  );
}

//         <Module title="Personal - Haxe" span={1}>
//           <div className={portfolioStyles.content}>
//             <GithubList user="vantreeseba" coding_lang="haxe" />
//           </div>
//         </Module>
