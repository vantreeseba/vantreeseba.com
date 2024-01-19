import styles from './index.module.css';
import Link from '../../link';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <span className={`${styles.typingText} ${styles.line1}`}>
          Ben Van Treese
        </span>
        <span className={styles.cursor}>—</span>
      </header>

      <header className={styles.header}>
        <Link href="/" className={styles.headerLink}>
          home
        </Link>
        <Link href="/projects_2" className={styles.headerLink}>
          projects
        </Link>
        <Link href="/portfolio" className={styles.headerLink}>
          games
        </Link>
      </header>
    </>
  );
}

//         <Link href="/blog" className={styles.headerLink}>
//           blog-posts
//         </Link>
// <Link href="/demos" className={styles.headerLink}>
//   demos
// </Link>
