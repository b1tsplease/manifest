import { memo } from "react";
import styles from "./ReadManifest.module.css";

const ReadManifest = memo(({ onClickReadManifest }) => (
  <div className={styles.readManifestContainer}>
    <div className={styles.readManifestLeft}>
      <h2 className={styles.readManifestSubtitle}>
        O que a Internet pela Educação defende?
      </h2>

      <button
        onClick={onClickReadManifest}
        className={[styles.buttonOutlined, styles.buttonDesk].join(" ")}
        aria-label="Ler o manifesto completo"
      >
        Ler o manifesto completo
      </button>

      <a
        href="/files/manifesto_pela_educacao.pdf"
        className={styles.buttonMobile}
        rel="noopener noreferrer"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <button
          className={styles.buttonOutlined}
          aria-label="Ler o manifesto completo"
        >
          Ler o manifesto completo
        </button>
      </a>
    </div>

    <div className={styles.readManifestRight}>
      <div className={styles.manifestTopicBlock}>
        <div className={styles.manifestTopicNumber}>1</div>

        <div className={styles.manifestTopicText}>
          <p>
            O acesso a conteúdos educacionais isentos dos planos de internet
          </p>
        </div>
      </div>

      <div className={styles.manifestTopicBlock}>
        <div className={styles.manifestTopicNumber}>2</div>

        <div className={styles.manifestTopicText}>
          <p>Mapeamento de todos os portais e ferramentas educacionais</p>
        </div>
      </div>

      <div className={styles.manifestTopicBlock}>
        <div className={styles.manifestTopicNumber}>3</div>

        <div className={styles.manifestTopicText}>
          <p>O reconhecimento da internet enquanto ferramenta pedagógica</p>
        </div>
      </div>
    </div>
  </div>
));

export default ReadManifest;
