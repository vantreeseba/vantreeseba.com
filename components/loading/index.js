import styles from './index.module.css';

export default function Loading() {
 return (
   <>
    <span className={styles.text}>Loading</span>
    <span className={styles.typingText}>................</span>
   </>
  );
}
