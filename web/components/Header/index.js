import React from "react";
import styles from "./Header.module.css";

const Header = () => (
  <div className={styles.container}>
    <div className={styles.logoContainer}>
      <img className={styles.logo} src="/images/logo-2x.png" alt="" />
    </div>
    <div className={styles.buttonContainer}>
      <button className={styles.button}>Compartilhar</button>
      <button className={styles.buttonOutlined}>Participar</button>
    </div>
  </div>
);

export default Header;
