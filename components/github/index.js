import useSWR from 'swr';

import styles from './index.module.css';
import Module from '../module/';
import Loading from '../loading';

import {buildContent} from '../../lib/utils';

const fetcher = url => fetch(url).then(r => r.json());

export default function Github() {
  const { data, error } = useSWR('/api/github', fetcher);
  let content;

  if(error) {
    content = <div>Error fetching data from github.</div>
  } else if(!data){
    content = <Loading />;
  } else {
    content = buildContent({
      Company: data.data.company,
      Location: data.data.location,
      'Public Repos': data.data.public_repos,
      Followers: data.data.followers,
    }, styles);
  }


  return (
    <Module 
      title="Github" 
      username="@vantreeseba"
      url="https://github.com/vantreeseba"
    >
      <div className={styles.content}>
        {content}
      </div>
    </Module>
  );
}
