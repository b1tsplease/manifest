import React from "react";
import styles from "./Midia.module.css";

const Midia = () => (
  <section className={styles.midiaContent}>
    <h2 className={styles.midiaSubtitle}>O que saiu na mídia</h2>

    <div className={styles.midiaRow}>
      <div className={styles.midiaBlock}>
        <div className={styles.midiaText}>
          <p>
            MEC fornecerá acesso à internet a alunos de universidades federais
          </p>

          <a
            href="https://querobolsa.com.br/revista/mec-fornecera-acesso-a-internet-a-alunos-de-universidades-federais"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ler matéria
          </a>
        </div>
      </div>

      <div className={styles.midiaBlock}>
        <div className={styles.midiaText}>
          <p>
            Congresso promulga emenda, e Fundeb permanente receberá mais verba
            da União
          </p>

          <a
            href="https://g1.globo.com/politica/noticia/2020/08/26/congresso-promulga-emenda-e-fundeb-permanente-recebera-mais-verba-da-uniao.ghtml"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ler matéria
          </a>
        </div>
      </div>
    </div>

    <div className={styles.midiaRow}>
      <div className={styles.midiaBlock}>
        <div className={styles.midiaText}>
          <p>50 melhores faculdades de Radiologia do Brasil, segundo o MEC</p>

          <a
            href="https://querobolsa.com.br/revista/50-melhores-faculdades-de-radiologia-do-brasil-segundo-o-mec"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ler matéria
          </a>
        </div>
      </div>

      <div className={styles.midiaBlock}>
        <div className={styles.midiaText}>
          <p>Conheça o Gioconda, o AVA do ensino a distância da Uniasselvi</p>

          <a
            href="https://querobolsa.com.br/revista/uniasselvi-ava-gioconda"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ler matéria
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Midia;
