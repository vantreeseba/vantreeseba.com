import { useRouter } from "next/router";
import styles from "./index.module.css";

function ActiveLink({ children = [], href = "", className = "" }) {
  const router = useRouter();
  const isCurrentLink = router.asPath === href;
  className += isCurrentLink ? " " + styles.activeLink : "";

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

export default ActiveLink;
