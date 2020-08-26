import React from 'react';
import styles from './ReadManifest.module.css';

const ReadManifest = () => (
  <div className={styles.readManifestContainer}>
    <div className={styles.readManifestLeft}>
      <h2 className={styles.readManifestSubtitle}>
        O que a Internet pela Educação defende?
      </h2>

      <button className={styles.buttonOutlined}>Ler o manifesto completo</button>
    </div>

    <div className={styles.readManifestRight}>
      <div className={styles.manifestTopicBlock}>
        <div className={styles.manifestTopicNumber}>
          1
        </div>

        <div className={styles.manifestTopicText}>
          <p>O acesso a conteúdos educacionais isentos dos planos de internet</p>
        </div>
      </div>

      <div className={styles.manifestTopicBlock}>
        <div className={styles.manifestTopicNumber}>
          2
        </div>

        <div className={styles.manifestTopicText}>
          <p>Mapeamento de todos os portais e ferramentas educacionais</p>
        </div>
      </div>

      <div className={styles.manifestTopicBlock}>
        <div className={styles.manifestTopicNumber}>
          3
        </div>

        <div className={styles.manifestTopicText}>
          <p>O reconhecimento da internet enquanto ferramenta pedagógica</p>
        </div>
      </div>
    </div>
  </div>
);

export default ReadManifest;
