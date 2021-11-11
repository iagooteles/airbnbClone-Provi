import React from 'react';

import styles from './styles.module.scss';


export function Banner() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.textAndButton}>
            <p className={styles.titulo}>Try hosting</p>
            <p className={styles.info}>Earn extra income and unlock new <br/> opportunities by sharing your space.</p>
            <button className={styles.button}>Learn more</button>
          </div>
        </div>
      </div>

    </>
  )
}