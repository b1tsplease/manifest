import React, { useState } from "react";
import Modal from "../Modal";
import { YouTube } from "../Video";
import styles from "./Deposition.module.css";

const VideoDeposition = ({
  author,
  ocuppation,
  videoUrl,
  imageUrl,
  imageAlt
}) => {
  const [isVideoModalVisible, setIsVideoModalVisible] = useState(false);

  const handleVideoModalOpen = () => setIsVideoModalVisible(true);

  const handleVideoModalDismiss = () => setIsVideoModalVisible(false);

  return (
    <div
      className={`${styles.depositionItem} ${styles.depositionItemVideo}`}
      onClick={handleVideoModalOpen}
    >
      <Modal visible={isVideoModalVisible} onDismiss={handleVideoModalDismiss}>
        <YouTube src={videoUrl} />
      </Modal>
      <div className={[styles.depositionItemContent]}>
        <img
          className={[styles.depositionItemContentImage]}
          src={imageUrl}
          alt={imageAlt}
        />

        <div className={styles.depositionItemInfo}>
          <strong className={styles.depositionItemAuthor}>{author}</strong>
          <span className={styles.depositionItemOcuppation}>{ocuppation}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoDeposition;
