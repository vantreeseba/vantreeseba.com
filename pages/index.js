import styles from '../styles/Home.module.css';

import Header from '../components/header';
import Footer from '../components/footer';
import Module from '../components/module';
import Resume from '../components/resume';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={`${styles.main} ${styles.col3}`}>
        <Module title="" span="2">
          <Resume />
        </Module>
        <Module title="" span="1">
          <img
            style={{ width: '100%' }}
            src="https://lh3.googleusercontent.com/pw/ACtC-3c2w67A1BSWxEhP2Fzzd9Z1WUR0uOpi_koY3LimTcsmUr5v8tIq_u_IFtwQ37NiU1c9m6tvkQ10dBbLGtwqlilKt1nCzGGrFLaa9a2CIVvdxI8z3QsOzj3HmNvlcezrw1minlRRuWQCaUzpT_wNxYUCmQ=w1219-h914-no?authuser=0"
          />
        </Module>
      </main>

      <Footer />
    </div>
  );
}
