import styles from './index.module.css';

/**
 * @param {object} props
 * @param {string} [props.title] - The title of the module.
 * @param {string} [props.username] - The username to display beside title
 * @param {string} [props.url] - The url to link when clicking on username
 * @param {string} [props.footer] - Some string content for the footer
 * @param {Array|object} [props.children] - The child elements of the module
 * @param {object} [props.contentStyles] - The styles to apply to the content div
 * @param {number} [props.span]
 * @param {number} [props.col]
 * @returns {object}
 */
function Module({
  title = 'Module',
  username = '',
  url = '',
  footer = '',
  children = [],
  contentStyles = {},
  span = 0,
  col = 1,
}) {
  return (
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
}

export default Module;
