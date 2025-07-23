import React, { useRef } from 'react';
import styles from './CardsFront.module.css';

const CardsFront = ({ video, img, text }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className={styles.cardsFrontContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.imageWrapper}>
        <img src={img} alt="preview" className={styles.videoPreview} />
        <div className={styles.overlay}></div>
        <p className={styles.imageText}>{text}</p>
      </div>

      <video
        ref={videoRef}
        src={video}
        muted
        loop
        playsInline
        className={styles.video}
      />
    </div>
  );
};

export default CardsFront;
