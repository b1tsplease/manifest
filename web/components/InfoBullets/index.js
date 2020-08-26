import React from 'react';
import styles from './InfoBullets.module.css';

const InfoBullets = () => (
  <div className={styles.informativeContent}>
    <div className={styles.informativeContent__block}>
      <div className={styles.informativeContent__bullets}>
        <div className={[styles.circle, styles.circleRed].join(" ")} />
        <div className={styles.circle} />
        <div className={styles.circle} />
        <div className={styles.circle} />
      </div>

      <div className={styles.informativeContent__block_text}>
        1 em cada 5 alunos de escolas públicas acessam à internet pelo celular
      </div>
    </div>

    <div className={styles.informativeContent__block}>
      <div className={styles.informativeContent__block_text}>
        2 em cada 5 estudantes de escolas públicas urbanas não possuem computador
      </div>
    </div>

    <div className={styles.informativeContent__block}>
      <div className={styles.informativeContent__block_text}>
        1  em cada 3 inscritos no Enem nos últimos cinco anos não possuem acesso à internet
      </div>
    </div>

    <div className={styles.informativeContent__block}>
      <div className={styles.informativeContent__block_text}>
        Fontes: TIC<br />
        Educação 2019 <br />
        Inep 2019
      </div>
    </div>
  </div>
);

export default InfoBullets;
