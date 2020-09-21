import styles from './index.module.css'

const Module = ({title = 'Module', username, url, footer ='', children}) => (
  <div className={styles.module}>
    <div className={styles.header}>
      {title} 
      <span className={styles.divider}>
        {username ? ' | ' : ''}
      </span>
      <a href={url} className={styles.title2}>
        {username ? username : ''}
      </a>
    </div>
    <div className={styles.content}>
      {children}
    </div>
    <div className={styles.footer}>
      {footer}
    </div>
  </div>
);

export default Module;
