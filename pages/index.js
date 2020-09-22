import styles from '../styles/Home.module.css';
import Github from '../components/github/';
import Spotify from '../components/spotify/';
import MediaToConsume from '../components/airtable/media-to-consume'
import FinishedMedia from '../components/airtable/finished-media'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={`${styles.typingText} ${styles.line1}`}>Ben Van Treese</span>
        <span className={styles.cursor}>—</span>
      </header>
      <main className={styles.main}>
        <Github />
        <Spotify />
        <MediaToConsume />
        <FinishedMedia />
      </main>

      <footer className={styles.footer}>
        Powered by <a href="https://vercel.com">Vercel</a> and <a href="https://nextjs.org">Next.js</a>
        <br />
        Check out the source on <a href="https://github.com/vantreeseba/vantreeseba.com">github</a>
     </footer>
    </div>
  )
}
