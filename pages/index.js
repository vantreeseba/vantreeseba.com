import styles from '../styles/Home.module.css';
import Module from '../components/module/';
import Github from '../components/github/';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={`${styles.typingText} ${styles.line1}`}>Ben Van Treese</span>
        <span className={styles.cursor}>—</span>
      </header>
      <main className={styles.main}>
        <Github />
        <Module title="Twitter" title2="@vantreeseba" footer="test">
          This is a test.
          Does it work well?
        </Module>
        <Module title="Soundcloud" footer="test">
          This is a test.
          Does it work well?
        </Module>
      </main>

      <footer className={styles.footer}>
        footer
     </footer>
    </div>
  )
}
