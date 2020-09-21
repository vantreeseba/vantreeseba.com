import styles from './index.module.css';

export default function Loading() {
 return (
   <>
    <span>Loading</span>
    <span className={styles.typingText}>................</span>
   </>
  );
}
