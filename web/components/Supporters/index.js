import React from "react";
import styles from "./Supporters.module.css";

const ReadManifest = () => (
  <div className={styles.supportersContainer}>
    <div className={styles.supportersLeft}>
      <h2 className={styles.supportersSubtitle}>Apoiadores dessa causa</h2>

      <a href="#signmanifest">
        <button
          className={styles.buttonOutlined}
          aria-label="Assinar o manifesto"
        >
          Assinar o manifesto
        </button>
      </a>
    </div>

    <div className={styles.supportersRight}>
      <a
        href="https://sobre.quero.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className={styles.logo}
          src="/images/supporters/quero_educacao.png"
          alt="Quero Educação"
        />
      </a>

      <a href="https://invoz.org" rel="noopener noreferrer" target="_blank">
        <img
          className={styles.logo}
          src="/images/supporters/invoz.png"
          alt="INVOZ"
        />
      </a>

      <a
        href="https://www.melhorescola.com.br/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className={styles.logo}
          src="/images/supporters/melhor_escola.png"
          alt="Melhor Escola"
        />
      </a>

      <a
        href="https://www.isemear.org.br/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className={styles.logo}
          src="/images/supporters/instituto_semear.png"
          alt="Instituto Semear"
        />
      </a>

      <a
        href="https://querobolsa.com.br/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className={styles.logo}
          src="/images/supporters/quero_bolsa.png"
          alt="Quero Bolsa"
        />
      </a>

      <a
        href="https://regeneracaoglobal.com/home#googtrans(pt)"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className={styles.logo}
          src="/images/supporters/regeneracao_global.png"
          alt="Regeneração Global"
        />
      </a>

      <a
        href="https://www.iefuturo.org.br/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className={styles.logo}
          src="/images/supporters/instituto_empreendedor_futuro.png"
          alt="Instituto Empreendedor do Futuro"
        />
      </a>
    </div>
  </div>
);

export default ReadManifest;
