import React from 'react';
import Layout from '../Layout/Layout';
import styles from '../assets/css/monitor.module.css';

function Monitor() {
  return (
    <Layout>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <div className={styles.cam1}>OFFLINE</div>
          <p className={styles.cameraLabel}>Camera 1</p>
        </div>
        <div className={styles.gridItem}>
          <div className={styles.cam2}>OFFLINE</div>
          <p className={styles.cameraLabel}>Camera 2</p>
        </div>
        <div className={styles.gridItem}>
          <div className={styles.cam3}>OFFLINE</div>
          <p className={styles.cameraLabel}>Camera 3</p>
        </div>
        <div className={styles.gridItem}>
          <div className={styles.cam4}>OFFLINE</div>
          <p className={styles.cameraLabel}>Camera 4</p>
        </div>
      </div>
    </Layout>
  );
}

export default Monitor;
