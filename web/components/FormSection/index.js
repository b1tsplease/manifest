import React, { useEffect, useRef, useState } from "react";
import Api from "../../services/Api";
import styles from "./FormSection.module.css";

const FormSection = ({ data }) => {
  const [signaturesCount, setSignaturesCount] = useState(0);
  const [signatures, setSignatures] = useState([]);

  const [formData, setFormData] = useState({});
  const formRef = useRef();

  const handleChange = key => e => {
    setFormData({ ...formData, [key]: e.currentTarget.value });
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const response = await Api.put(`/subscriptions`, formData);

      setFormData({});
      fetchCount();
      fetchSignatures();
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCount = async () => {
    try {
      const response = await Api.get("/subscriptions/count");

      setSignaturesCount(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSignatures = async () => {
    try {
      const response = await Api.get("/subscriptions");

      setSignatures(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCount();
    fetchSignatures();
  }, []);

  return (
    <section className={styles.formSection}>
      <h1 className={styles.formSectionTitle}>
        Como apoiar o Internet pela Educação?
      </h1>
      <div className={styles.formSectionContent}>
        <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
          <div className={styles.formGroup}>
            <label htmlFor="formName" className={styles.formLabel}>
              Nome
            </label>
            <input
              id="formName"
              className={styles.formControl}
              placeholder="Ex.: Luiz Castro"
              onChange={handleChange("name")}
              value={formData.name || ""}
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
              onChange={handleChange("email")}
              value={formData.email || ""}
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
              onChange={handleChange("occupation")}
              value={formData.occupation || ""}
            />
          </div>
          <button className={styles.formButton}>Assinar este manifesto</button>
        </form>
        <div className={styles.signaturesInfoContainer}>
          <div className={styles.signaturesInfo}>
            <strong className={styles.signaturesCount}>
              {signaturesCount}
            </strong>
            <p className={styles.signaturesDescription}>
              pessoas já assinaram esse manifesto
            </p>
            <ul className={styles.signaturesList}>
              {signatures.slice(0, 3).map(s => (
                <li key={`${s.id}`} className={styles.signatureItem}>
                  <strong>{s.name}</strong> assinou há alguns instantes
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
