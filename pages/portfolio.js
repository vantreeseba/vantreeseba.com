import styles from "../styles/Home.module.css";
import portfolioStyles from "../styles/portfolio.module.css";
import Header from "../components/header";
import Footer from "../components/footer";

import Module from "../components/module";

function Game({ name, url, imgUrl }) {
  return (
    <>
      <a href={url}>{name}</a>
      <a className={portfolioStyles.value} href={url}>
        <img className={portfolioStyles.value} src={imgUrl} />
      </a>
    </>
  );
}

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={`${styles.main} ${styles.col3}`}>
        <Module title="Goldfire Studios" span={1}>
          <div className={portfolioStyles.content}>
            <Game
              name="Arctic Awakening"
              url="https://arcticawakening.com"
              imgUrl="https://arcticawakening.com/_nuxt/img/001.a57ca04.jpg"
            />
            <Game
              name="Casino RPG"
              url="https://casinorpg.com"
              imgUrl="https://goldfirestudios.com/_nuxt/img/casinorpg-bg.ebcc3a1.webp"
            />
            <Game
              name="Exocraft"
              url="https://exocraft.io"
              imgUrl="https://goldfirestudios.com/_nuxt/img/exocraft.3de347a.jpg"
            />
          </div>
        </Module>
        <Module title="Personal Games" span={1}>
          <div className={portfolioStyles.content}>
            <Game
              name="Ice Breakers"
              url="https://vantreeseba.itch.io/ice-breakers"
              imgUrl="https://img.itch.zone/aW1nLzU0MjcxMzcucG5n/315x250%23c/7IwS%2FN.png"
            />
            <Game
              name="LD40-Lumberjack"
              url="https://vantreeseba.itch.io/ld40-lumberjack"
              imgUrl="https://img.itch.zone/aW1hZ2UvMjAwOTQ0LzkzOTE3NS5wbmc=/315x250%23c/XFbRfw.png"
            />
          </div>
        </Module>
        <Module title="Personal Games" span={1}>
          <div className={portfolioStyles.content}>
            <Game
              name="Ice Breakers"
              url="https://vantreeseba.itch.io/ice-breakers"
              imgUrl="https://img.itch.zone/aW1nLzU0MjcxMzcucG5n/315x250%23c/7IwS%2FN.png"
            />
            <Game
              name="LD40-Lumberjack"
              url="https://vantreeseba.itch.io/ld40-lumberjack"
              imgUrl="https://img.itch.zone/aW1hZ2UvMjAwOTQ0LzkzOTE3NS5wbmc=/315x250%23c/XFbRfw.png"
            />
          </div>
        </Module>
 
      </main>
      <Footer />
    </div>
  );
}
