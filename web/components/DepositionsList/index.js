import React, { memo } from 'react';
import Deposition from '../Deposition';
import styles from './DepositionsList.module.css';

const DepositionsList = memo(({ data }) => {

  return (
    <div className={styles.depositionsList}>
      {data.map(deposition => <Deposition {...deposition} />)}
    </div>
  );
});

export default DepositionsList;