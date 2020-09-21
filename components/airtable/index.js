import useSWR from 'swr';

import styles from './index.module.css';
import Module from '../module/';
import Loading from '../loading';

const fetcher = url => fetch(url).then(r => r.json());

export default function Github() {
  const { data, error } = useSWR('/api/airtable/', fetcher);
  let content;

  if(error) {
    content = <div>Error fetching data from github.</div>
  } else if(!data){
    content = <Loading />;
  } else {
    content = buildContent(data.data);
  }


  return (
    <Module 
      title="Media To Consume" 
    >
      <div className={styles.content}>
        {content}
      </div>
    </Module>
  );
}
