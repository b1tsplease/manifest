import { memo } from "react";
import styles from "./Hero.module.css";

const Hero = memo(({ onClickWatchVideo }) => (
  <div className={styles.heroContainer}>
    <h2 className={styles.heroSubtitle}>
      A educação remota em tempos de pandemia evidenciou o óbvio:
    </h2>
    <h1 className={styles.heroTitle}>O grande número de excluídos digitais</h1>
    <div className={styles.watchVideoButtonContainer}>
      <button
        onClick={onClickWatchVideo}
        className={styles.watchVideoButton}
        aria-label="Assistir ao vídeo"
      >
        <svg
          className={styles.iconPlayCircle}
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="play-circle"
          class="svg-inline--fa fa-play-circle fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"
          ></path>
        </svg>
        <span>Assistir ao vídeo</span>
      </button>
    </div>
  </div>
));

export default Hero;
