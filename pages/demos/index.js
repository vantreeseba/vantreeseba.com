import styles from '../../styles/Home.module.css';
import portfolioStyles from '../../styles/portfolio.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

import Module from '../../components/module';

function Link({ name, url, imgUrl }) {
  return (
    <>
      <a href={url}>{name}</a>
      <a className={portfolioStyles.value} href={url}>
        <img className={portfolioStyles.value} src={imgUrl} />
      </a>
    </>
  );
}

export default function Demos() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={`${styles.main} ${styles.col2}`}>
        <Module title="Shaders">
          <div> Ice Breakers </div>
        </Module>
        <Module title="UI" span={1}>
          <div className={portfolioStyles.content}>
            <Link
              name="Neumorphic UI Demo"
              url="https://codepen.io/vantreeseba/pen/WNbYgog"
            />
          </div>
        </Module>
        <Module title="Game Dev">
          <div className={portfolioStyles.content}>
            <Link
              name="Realtime FSM to dot svg"
              url="https://dropecho.github.io/deagent.hx/fsm"
            />
            <Link
              name="Dungeon Generator"
              url="https://dropecho.github.io/dungen"
            />
            <Link
              name="Language Generator"
              url="https://dropecho.github.io/langgen?seed=0"
            />
            <Link
              name="Story Generator"
              url="https://dropecho.github.io/storygen"
            />
          </div>
        </Module>
      </main>
      <Footer />
    </div>
  );
}

// <Link name="Realtime FSM to dot svg" url="demos/fsm" />
// <Link name="Dungeon Generator" url="demos/dungen" />
// <Link name="Language Generator" url="demos/langgen" />
// <Link name="Story Generator" url="demos/storygen" />
