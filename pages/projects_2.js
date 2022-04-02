import styles from '../styles/Home.module.css';
import portfolioStyles from '../styles/portfolio.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Loading from '../components/loading';

import Module from '../components/module';
import useSWR from 'swr';

function Project({ name, description, url, ...details }) {
  const breakName = name.split('/');
  const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const date = new Date(details?.pushedAt).toLocaleDateString(
    'en-US',
    dateOptions
  );

  return (
    <a href={url}>
      <div className={portfolioStyles.key}>
        <div style={{ paddingBottom: '0.25rem' }}>
          {breakName[0]}
          {'/'}
          <wbr />
          {breakName[1]}
        </div>
        <div className={portfolioStyles.description}>{description}</div>
      </div>
      <div className={portfolioStyles.value}>
        <div className={portfolioStyles.label}>updated:</div>
        <div>{date}</div>
        <div className={portfolioStyles.label}>stars:</div>
        <div>{details?.stargazerCount}</div>
        <div className={portfolioStyles.label}>issues:</div>
        <div>{details?.issues?.totalCount || 0}</div>
        <div className={portfolioStyles.label}>watchers:</div>
        <div>{details?.watchers?.totalCount || 0}</div>
        <div className={portfolioStyles.label}>release:</div>
        <div>{details?.latestRelease?.tagName || 'none'}</div>
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
