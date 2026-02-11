import React, { useEffect } from 'react';
import styles from './preloader.module.scss';

const Preloader = () => {

    useEffect(() => {
    console.log("🚀 DEBUG: PRELOADER MOUNTED");
  }, []);
  return (
    <div className={styles.preloaderOverlay}>
      <div className={styles.loaderContainer}>
        <div className={styles.panWrapper}>
          <div className={styles.pancake}></div>
          <div className={styles.pan}></div>
        </div>
        <p className={styles.loadingText}>Plating your experience...</p>
      </div>
    </div>
  );
};

export default Preloader;