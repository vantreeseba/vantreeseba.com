import useSWR from 'swr';

import styles from './index.module.css';
import Module from '../module/';
import Loading from '../loading';
import {buildContent} from '../../lib/utils';

const fetcher = url => fetch(url).then(r => r.json());

function getCurrentlyPlaying({data, error}) {
  let content;
  if(error) {
    content = 'Error.' 
  } else if(!data || !data.item){
    content = <Loading />;
  } else {
    const {name, artists} = data.item;
    content = name ? name + ' by ' + artists.map(a => a.name).join(', ') : 'N/A';
  }
  return buildContent({'Now playing': content}, styles);
}

function getTopTracks({data, error}) {
  let content;
  if(error) {
    content = 'Error.' 
  } else if(!data){
    content = <Loading />;
  } else {
    content = data.items.map(track => {
      return (
        <div className={styles.value}>
          <span className={styles.track}>{track.name}</span>
          <span className={styles.by}>{' by ' }</span>
          <span className={styles.artist}>{track.artists.map(a => a.name).join(', ')}</span>
        </div>
      );
    });
  }
  return buildContent({
    'Top tracks': content
  }, styles);
}


export default function Github() {
  const listeningData = useSWR('/api/spotify/listening', fetcher, {refreshInterval: 30000 });
  // const topData = useSWR('/api/spotify/top', fetcher);
  const listening = getCurrentlyPlaying(listeningData);
  const top = ''; //getTopTracks(topData);

  return (
    <Module 
      title="Spotify" 
    >
      <div className={styles.content}>
        {listening}
        {top}
      </div>
    </Module>
  );
}
