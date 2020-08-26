import React from 'react';
import styles from './InfoBullets.module.css';

const InfoBullets = () => (
  <section className={styles.informativeContent}>
    <div className={styles.informativeContent__line}>
      <div className={styles.informativeContent__block}>
        <div className={styles.informativeContent__bullets}>
          <div className={[styles.circle, styles.circleRed].join(" ")} />
          <div className={styles.circle} />
          <div className={styles.circle} />
          <div className={styles.circle} />
          <div className={styles.circle} />
        </div>

        <div className={styles.informativeContent__block_text}>
          1 em cada 5 alunos de escolas públicas <strong>acessam à internet pelo celular</strong>
        </div>
      </div>

      <div className={styles.informativeContent__block}>
        <div className={styles.informativeContent__bullets}>
          <div className={[styles.circle, styles.circleRed].join(" ")} />
          <div className={[styles.circle, styles.circleRed].join(" ")} />
          <div className={styles.circle} />
          <div className={styles.circle} />
          <div className={styles.circle} />
        </div>

        <div className={styles.informativeContent__block_text}>
          2 em cada 5 estudantes de escolas públicas urbanas <strong>não possuem computador</strong>
        </div>
      </div>
    </div>

    <div className={styles.informativeContent__line}>
      <div className={styles.informativeContent__block}>
        <div className={styles.informativeContent__bullets}>
          <div className={[styles.circle, styles.circleRed].join(" ")} />
          <div className={styles.circle} />
          <div className={styles.circle} />
        </div>

        <div className={styles.informativeContent__block_text}>
          1  em cada 3 inscritos no Enem nos últimos cinco anos <strong>não possuem acesso à internet</strong>
        </div>
      </div>

      <div className={styles.informativeContent__block}>
        <div className={[styles.informativeContent__block_text, styles.informativeContent__block_text_fonts].join(" ")}>
          Fontes:  TIC Educação 2019 <br />
          Inep 2019
        </div>
      </div>
    </div>
  </section>
);

export default InfoBullets;
