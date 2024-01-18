import styles from '../../styles/Home.module.css';
import demoStyles from './index.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

import Module from '../../components/module';

import { useRouter } from 'next/router';

const demos = {
  fsm: {
    name:'dropecho/deagent.hx',
    username: 'github',
    url: 'https://dropecho.github.io/deagent.hx/fsm.html'
  },
  dungen: {
    name: 'dropecho/dungen',
    username: 'github',
    url: 'http://dropecho.github.io/dungen/',
  },
  storygen: {
    name: 'dropecho/storygen',
    username: 'github',
    url: 'http://dropecho.github.io/storygen/',
  },
  langgen: {
    name: 'dropecho/langgen',
    username: 'github',
    url: 'http://dropecho.github.io/langgen/',
  },
};

export default function Demo() {
  const router = useRouter();
  const { id } = router.query;

  const demo = demos[id];

  if (!demo) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={`${styles.main} ${styles.col2}`}>
        <Module
          title={demo.name}
          span={2}
          contentStyles={{ padding: '0px'}}
        >
          <iframe
            className={demoStyles.demoframe}
            src={demo.url}
            frameBorder="false"
            scrolling="no"
          />
        </Module>
      </main>
      <Footer />
    </div>
  );
}
