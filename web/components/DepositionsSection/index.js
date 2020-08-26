import React from 'react';
import DepositionsList from '../DepositionsList';
import styles from './DepositionsSection.module.css';


const DepositionsSection = ({ data }) => (
  <section className={styles.depositionsSection}>
    <h1 className={styles.depositionsSectionTitle}>O que alunos e apoiadores falam desse manifesto?</h1>
    <DepositionsList data={data} />
  </section>
);

export default DepositionsSection;
