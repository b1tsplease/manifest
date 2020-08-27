import React from "react";
import styles from "./FormSection.module.css";

const FormSection = ({ data }) => (
  <section className={styles.formSection} id="signmanifest">
    <h1 className={styles.formSectionTitle}>
      Como apoiar o Internet pela Educação?
    </h1>
    <div className={styles.formSectionContent}>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="formName" className={styles.formLabel}>
            Nome
          </label>
          <input
            id="formName"
            className={styles.formControl}
            placeholder="Ex.: Luiz Castro"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="formEmail" className={styles.formLabel}>
            E-mail
          </label>
          <input
            id="formEmail"
            className={styles.formControl}
            placeholder="Ex.: nome@mail.com"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="formOccupation" className={styles.formLabel}>
            Ocupação
          </label>
          <input
            id="formOccupation"
            className={styles.formControl}
            placeholder="Ex.: Estudante"
          />
        </div>
        <button className={styles.formButton}>Assinar este manifesto</button>
      </form>
      <div className={styles.signaturesInfoContainer}>
        <div className={styles.signaturesInfo}>
          <strong className={styles.signaturesCount}>1.234</strong>
          <p className={styles.signaturesDescription}>
            pessoas já assinaram esse manifesto
          </p>
          <ul className={styles.signaturesList}>
            <li className={styles.signatureItem}>
              <strong>Letícia Y.</strong> assinou há 8 minutos
            </li>
            <li className={styles.signatureItem}>
              <strong>Anderson S.</strong> assinou há 22 minutos
            </li>
            <li className={styles.signatureItem}>
              <strong>Rafael L.</strong> assinou há 37 minutos
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default FormSection;
