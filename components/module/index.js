import styles from './index.module.css'

const Module = ({title = 'Module', title2, footer ='', children}) => (
  <div className={styles.module}>
    <div className={styles.header}>
      {title} 
      <span className={styles.divider}>
        {title2 ? ' | ' : ''}
      </span>
      <span className={styles.title2}>
        {title2 ? title2 : ''}
      </span>
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
