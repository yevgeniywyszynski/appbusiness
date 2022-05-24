import React from 'react';
import styles from './Business.module.scss';
import {Outlet} from 'react-router-dom';

const Business = () => {
    return(
        <div className={styles.blogWrapper}>
            <div className={styles.stepWrapper}>
                <p className={styles.step}>04</p>
            </div>
            <div className={styles.businessWrapper}>
                <div className={styles.createWrapper}>
                    <div className={styles.titleWrapper}>
                        <h2 className={styles.title}>CREATE <br /> <span className={styles.personalStyl}>PERSONALISED <br /> Business</span></h2>
                    </div>
                    <div className={styles.nomitationsWrapper}>
                        <p className={styles.numberNomination}>23</p>
                        <p className={styles.subtitle}>NOMINATIONS</p>
                    </div> 
                </div>
                <div className={styles.awardsWrapper}>
                    <p className={styles.description}>
                    ss normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in theirss normal distribution of letters, as opposed to using 'Content here, content here', making it look like
                    </p>
                    <div className={styles.awardsTitleWrapper}>
                        <p className={styles.numberNomination}>7</p>
                        <p className={styles.subtitle}>AWARDS</p>
                    </div> 
                </div>
                <div className={styles.agenciesWrapper}>
                    <button type="button" className={styles.btn}>Read More</button>
                    <div className={styles.awardsTitleWrapper}>
                        <p className={styles.numberNomination}>31</p>
                        <p className={styles.subtitle}>AGENCIES</p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Business;
