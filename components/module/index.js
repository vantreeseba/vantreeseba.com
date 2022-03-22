import styles from './index.module.css';

const Module = ({
  title = 'Module',
  username = '',
  url = '',
  footer = '',
  children = [],
  contentStyles = {},
  span = 0,
  col = 1,
}) => (
  <div
    className={styles.module}
    style={{ gridColumn: span ? `span ${span}` : `${col}` }}
  >
    <div className={styles.header}>
      {title}
      <span className={styles.divider}>{username ? ' | ' : ''}</span>
      <a href={url} className={styles.title2}>
        {username}
      </a>
    </div>
    <div className={styles.content} style={contentStyles}>
      {children}
    </div>
    <div className={styles.footer}>{footer}</div>
  </div>
);

export default Module;
