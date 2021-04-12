import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";

import Module from "../components/module";

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div />
        <Module title="games">
          <div> Ice Breakers </div>
        </Module>
        <Module title="two" />
      </main>
      <Footer />
    </div>
  );
}
