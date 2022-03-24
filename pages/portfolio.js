import styles from '../styles/Home.module.css';
import portfolioStyles from '../styles/portfolio.module.css';
import Header from '../components/header';
import Footer from '../components/footer';

import Module from '../components/module';

function Game({ name, description, url, imgUrl }) {
  return (
    <>
      <a className={portfolioStyles.key} href={url}>
        <div>{name}</div>
        <br />
        <div className={portfolioStyles.description}>{description}</div>
      </a>
      <a className={portfolioStyles.value} href={url}>
        <img className={portfolioStyles.value} src={imgUrl} />
      </a>
      <span className={portfolioStyles.line} />
    </>
  );
}

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={`${styles.main} ${styles.col2}`}>
        <Module title="Goldfire Studios" span={1}>
          <div className={portfolioStyles.content}>
            <Game
              name="Arctic Awakening"
              description="A first-person narrative adventure set in the mysterious Arctic North where you and your robotic companion, Alfie, must search for your co-pilot... and a way home."
              url="https://arcticawakening.com"
              imgUrl="https://arcticawakening.com/_nuxt/img/001.a57ca04.jpg"
            />
            <Game
              name="Casino RPG"
              description="A free-to-play MMO game that combines casino-style gambling and a Sims-type creativity system.
Available cross-platform on web browsers, Android, iPhone(?), and STEAM"
              url="https://casinorpg.com"
              imgUrl="https://goldfirestudios.com/_nuxt/img/casinorpg-bg.ebcc3a1.webp"
            />
            <Game
              name="Exocraft"
              description="Design spaceships and build a space mining fleet as you team up to battle for resources and glory in this massively multiplayer action strategy set in an alien wasteland."
              url="https://exocraft.io"
              imgUrl="https://goldfirestudios.com/_nuxt/img/exocraft.3de347a.jpg"
            />
          </div>
        </Module>
        <Module title="Personal Games" span={1}>
          <div className={portfolioStyles.content}>
            <Game
              name="7DRL-Ice Breakers"
              description="Can you break the ICE of the corporations who are hiding their dark secrets?
How deep will you delve?"
              url="https://vantreeseba.itch.io/ice-breakers"
              imgUrl="https://img.itch.zone/aW1nLzU0MjcxMzcucG5n/315x250%23c/7IwS%2FN.png"
            />
            <Game
              name="LD40-Lumberjack"
    description="You're a lumberjack, and you have to cut enough wood to keep everyone warm through the winter. If there is enough wood, it might attract more NPCs."
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
