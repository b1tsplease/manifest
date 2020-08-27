import React, { memo } from "react";
import styles from "./Video.module.css";

export const YouTube = memo(({ src }) => (
  <div className={styles.fluidVideo}>
    <iframe
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
));

const Video = () => <div>Not implemented</div>;

export default Video;
