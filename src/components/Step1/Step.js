import React from 'react';
import styles from './Step1.module.scss';

const Step1 = () => {
    return(
        <div className={styles.stepWrapper}>
            <p className={styles.number}>01</p>
            <div className={styles.stepDescription}>
                <p className={styles.upTitle}>ABOUTS US</p>
                <h2 className={styles.title}><span className={styles.canStyl}>WE CAN </span>HELP YOUR BUSINESS GROW</h2>
                <p className={styles.subtitle}>Get your Businnes in 4 easy steps</p>
            </div>
        </div>
    )
}

export default Step1;

