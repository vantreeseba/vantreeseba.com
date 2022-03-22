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
        <img className={styles['bio-image']} src="assets/bio-image.jpg" />
        <Module title="Resume" span={2}>
          <Resume />
        </Module>
      </main>
      <Footer />
    </div>
  );
}
