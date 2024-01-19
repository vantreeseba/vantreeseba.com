import styles from "../styles/Home.module.css";

import Header from "../components/header";
import Footer from "../components/footer";

import Github from "../components/github/";
// import Spotify from "../components/spotify/";
// import MediaToConsume from "../components/airtable/media-to-consume";
// import FinishedMedia from "../components/airtable/finished-media";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={`${styles.main} ${styles.col1}`}>
        <Github />
      </main>

      <Footer />
    </div>
  );
}
// <Spotify />
// <MediaToConsume />
// <FinishedMedia />
