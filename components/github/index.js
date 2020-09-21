import useSWR from 'swr';

import styles from './index.module.css';
import Module from '../module/';
import Loading from '../loading';

const fetcher = url => fetch(url).then(r => r.json());

function buildContent({
  company,
  login,
  location,
  public_repos,
  followers
}) {
  return Object.entries({
    login, 
    company,
    location,
    public_repos,
    followers
  }).map(([key, value]) => {
    return (
      <>
        <div key={`${key}`} className={styles.key}>{key}</div>
        <div key={`${key}-value`} className={styles.value}>{value}</div>
      </>
    );
  });
}

export default function Github() {
  const { data, error } = useSWR('/api/github', fetcher);
  let content;

  if(error) {
    content = <div>Error fetching data from github.</div>
  } else if(!data){
    content = <Loading />;
  } else {
    content = buildContent(data.data);
  }


  return (
    <Module title="Github" title2="@vantreeseba">
      <div className={styles.content}>
        {content}
      </div>
    </Module>
  );
}
