import useSWR from 'swr';

import styles from './index.module.css';
import Module from '../../module';
import Loading from '../../loading';
import {buildContentTable} from '../../../../lib/utils';

const fetcher = url => fetch(url).then(r => r.json());

export default function MediaToConsume() {
  const keys = ['Name', 'Type', 'Creators', 'Rating'];
  const { data, error } = useSWR('/api/airtable/Media-To-Consume/Finished', fetcher);
  let content;

  if(error) {
    content = <div>Error fetching data from airtable.</div>
  } else if(!data){
    content = <Loading />;
  } else {
    content = buildContentTable(keys, data, styles);
  }

  return (
    <Module 
      title="Finished Media" 
    >
      <div className={styles.content}>
        {content}
      </div>
    </Module>
  );
}
