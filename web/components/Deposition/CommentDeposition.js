import React from "react";
import styles from "./Deposition.module.css";

const CommentDeposition = ({ comment, author, ocuppation }) => (
  <div className={`${styles.depositionItem} ${styles.depositionItemComment}`}>
    <div className={[styles.depositionItemContent]}>
      <p className={styles.depositionItemMessage}>{comment}</p>

      <strong className={styles.depositionItemAuthor}>{author}</strong>
      <span className={styles.depositionItemOcuppation}>{ocuppation}</span>
    </div>
  </div>
);

export default CommentDeposition;
