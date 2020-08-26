import styles from './Hero.module.css';

const Hero = () => (
  <div className={styles.heroContainer}>
    <h2 className={styles.heroSubtitle}>A educação remota em tempos de pandemia evidenciou o óbvio:</h2>
    <h1 className={styles.heroTitle}>O grande número de excluídos digitais</h1>
    <div className={styles.watchVideoButtonContainer}>
      <button className={styles.watchVideoButton} aria-label="Assistir ao vídeo">
        <span>Assistir ao vídeo</span>
      </button>
    </div>
  </div>
);

export default Hero;
