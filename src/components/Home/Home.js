import React from 'react'
import {Outlet, Link} from 'react-router-dom';
import styles from './Home.module.scss';
import Step1 from '../Step1/Step';
import Carusel from '../Slider/Slider';
import Abouts from '../Abouts/About';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Business from '../Business/Business';
import Team from '../Team/Team';

const Home = () => {
    return(
        <div className={styles.homeWrapper}>
            <div className={styles.titleDescriptionWrapper}>
                <h2 className={styles.title}>TRUSTED AND <br/> PROFESSIONAL ADVISERS</h2>
                <p className={styles.subtitle}>FOR YOUR BUSINESS</p>
                <Link to="/abouts" className={styles.btnSinup}>ABOUT US</Link>
            </div>
            <Abouts />
            <Services />
            <Carusel />
            <Business />
            <Team />
            <Contact />
        </div>
    )
}

export default Home;