import styles from '../styles/Home.module.css';

import Header from '../components/header';
import Footer from '../components/footer';
import Module from '../components/module';
import Resume from '../components/resume';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={`${styles.main} ${styles.col4}`}>
        <div className={styles.left}>
          <img className={styles['bio-image']} src="assets/bio-image.jpg" />
          <br />
          <div>
            <a href="https://twitter.com/vantreeseba">twitter</a>
          </div>
          <div>
            <a href="https://github.com/vantreeseba">github</a>
          </div>
          <div>
            <a href="https://soundcloud.com/vantreeseba">soundcloud</a>
          </div>
          <div>
            <a href="https://vantreeseba.itch.io">itch.io</a>
          </div>
        </div>
        <Module title="Resume" span={2}>
          <Resume />
        </Module>
      </main>
      <Footer />
    </div>
  );
}
