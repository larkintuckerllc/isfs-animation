import React from 'react';
import styles from './index.scss';

function Legend() {
  return (
    <div id={styles.root}>
      <div className={styles.rootItem}>Item</div>
      <div className={styles.rootItem}>Item</div>
      <div className={styles.rootItem}>Item</div>
      <div className={styles.rootItem}>Item</div>
      <div className={styles.rootItem}>Item</div>
    </div>
  );
}
export default Legend;
