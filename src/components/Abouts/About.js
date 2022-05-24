import React from 'react'
import {Outlet, useParams, useLocation} from 'react-router-dom';
import styles from './Abouts.module.scss';
import Step1 from '../Step1/Step';

const Abouts = () => {

    const {id} = useParams();

    console.log(id);

    const location = useLocation();

    console.log(location);

    return(
        <>
        <Step1 />
        <div className={styles.aboutsWrapper}>
            <div className={styles.imgWrapper}>
                <img src="images/laptop.png" className={styles.img}></img>
            </div>
            <div className={styles.aboutDescription}>
                <h2 className={styles.title}>EVERYTHING<br /> YOU NEED IN ONE SOLUTION</h2>
                <p className={styles.helpTitle}>HELP YOUR NEXT CAREER MOVE MORE SMOOTHER AND MORE EFFICIENT</p>
                <p className={styles.description}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                <p className={styles.cvFree}>TRY ONLINE BUILDER FOR FREE</p>
            </div>
        </div>
        </>
    )
}

export default Abouts;