import styles from "./index.module.css";

const Module = ({
  title = "Module",
  username = "",
  url = "",
  footer = "",
  children = [],
  span = 1,
}) => (
  <div className={styles.module} style={{ "gridColumn": `span ${span}` }}>
    <div className={styles.header}>
      {title}
      <span className={styles.divider}>{username ? " | " : ""}</span>
      <a href={url} className={styles.title2}>
        {username}
      </a>
    </div>
    <div className={styles.content}>{children}</div>
    <div className={styles.footer}>{footer}</div>
  </div>
);

export default Module;
