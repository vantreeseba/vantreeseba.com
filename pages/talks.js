import styles from '../styles/Home.module.css';
import listStyles from '../components/github/index.module.css';

import Header from '../components/header';
import Footer from '../components/footer';
import Module from '../components/module';

import { buildContent } from '../lib/utils';

export default function Talks() {
  const talks = {
    talks: [
      {
        name: 'AI Techniques',
        url: 'https://www.youtube.com/watch?v=KWOxsm0K0Hk',
        description:
          'An intro talk about pathfinding, steering behaviors, FSMs and GOAP.',
      },
      {
        name: 'Intro to ES6',
        url: 'https://www.youtube.com/watch?v=45prOYKXmMs',
        description: 'An introduction to ES6 features for freeCodeCamp OKC.',
      },
      {
        name: 'WebGL and Shaders',
        url: 'https://www.youtube.com/watch?v=s3YZowkL0Fw',
        description: 'A short talk on how to make a laser like thing in WebGL.',
      },
      {
        name: 'An intro to Node.js',
        url: 'https://www.youtube.com/watch?v=XdpjKtptGz4',
        description: '',
      },
      {
        name: 'Intro to WebGL/Shaders.',
        url: 'https://www.youtube.com/watch?v=h9mZMyGQu8o',
        description: '',
      },

      {
        name: 'How I Prototype (UI/Web)',
        url: 'https://www.youtube.com/watch?v=MDStyY3dR88',
        description: '',
      },
    ],
  };

  const content = buildContent(talks, listStyles);
  return (
    <div className={styles.container}>
      <Header />

      <main className={`${styles.main} ${styles.col1}`}>
        <Module title={'talks'}>
          <div className={listStyles.content}>{content}</div>
        </Module>
      </main>

      <Footer />
    </div>
  );
}
