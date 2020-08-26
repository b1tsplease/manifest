import React from 'react';
import styles from './Supporters.module.css';

const ReadManifest = () => (
  <div className={styles.supportersContainer}>
    <div className={styles.supportersLeft}>
      <h2 className={styles.supportersSubtitle}>
        Apoiadores dessa causa
      </h2>

      <button className={styles.buttonOutlined}  aria-label="Assinar o manifesto">Assinar o manifesto</button>
    </div>

    <div className={styles.supportersRight}>
    
    </div>
  </div>
);

export default ReadManifest;
