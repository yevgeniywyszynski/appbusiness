import React from 'react';
import styles from './Services.module.scss';
import {Outlet} from 'react-router-dom';

const Services = () => {
    return(
        <div className={styles.servicesWrapper}>
            <div className={styles.step2}>
                <div className={styles.stepDescripton}>
                    <p className={styles.services}>SERVICES</p>
                    <h2 className={styles.title}><span className={styles.howStl}>HOW TO PROVIDE</span> TOOLS THAT HELP<br /> ANYONE GIVE VOICE THEIR <br />IDEAS</h2>
                </div>
                <p className={styles.number}>02</p>
            </div>
            <div className={styles.services}>
                <div className={styles.service}>
                    <img src="/images/active.png" className={styles.imgLogo} />
                    <p className={styles.serviceTitle}>DIGITAL MARKETING</p>
                    <p className={styles.serviceDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                </div>
                <div className={styles.service}>
                    <img src="/images/present.png" className={styles.imgLogo} />
                    <p className={styles.serviceTitle}>FINANCIAL PLANING</p>
                    <p className={styles.serviceDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                </div>
                <div className={styles.service}>
                    <img src="/images/grafik.png" className={styles.imgLogo} />
                    <p className={styles.serviceTitle}>DIGITAL MARKETING</p>
                    <p className={styles.serviceDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                </div>
                <div className={styles.service}>
                    <img src="/images/suitcase.png" className={styles.imgLogo} />
                    <p className={styles.serviceTitle}>BUSINESS CONSULTING</p>
                    <p className={styles.serviceDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                </div>
                <div className={styles.service}>
                    <img src="/images/research.png" className={styles.imgLogo} />
                    <p className={styles.serviceTitle}>MARKETING RESEARCH</p>
                    <p className={styles.serviceDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                </div>
                <div className={styles.service}>
                    <img src="/images/interactive.png" className={styles.imgLogo} />
                    <p className={styles.serviceTitle}>UX RESEARCH</p>
                    <p className={styles.serviceDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                </div>
            </div>
        </div>
    )
}

export default Services;