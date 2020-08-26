import React, { memo } from 'react';
import styles from './IFrame.module.css';

const IFrame = memo(({ src }) => (
  <div className={styles.fluidPdf}>
    <iframe
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen>
      </iframe>
  </div>
));

export default IFrame;
