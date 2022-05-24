import React from 'react';
import styles from './Team.module.scss';
import { FaFacebook, FaFacebookF, FaFacebookSquare, FaGooglePlus, FaGooglePlusG, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Slider from 'react-slick';

const Team = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1060,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
      };
      
    return(
        <div className={styles.teamWrapper}>
            <div className={styles.titleWrapper}>
                <p className={styles.title}>We Have a Professional Team of Business Analysts</p>
                <p className={styles.number}>02</p>
            </div>
            <div className={styles.teamWorkersWrapper}>
                <Slider {...settings}>
                    <div className={styles.workerWrapper}>
                        <div className={styles.worker}>
                            <div className={styles.linkWrapper}>
                                <a className={styles.link}><FaFacebookF className={styles.social} /></a>
                                <a className={styles.link}><FaTwitter className={styles.social} /></a>
                                <a className={styles.link}><FaLinkedinIn className={styles.social} /></a>
                                <a className={styles.link}><FaGooglePlusG className={styles.social} /></a>
                            </div>
                        </div>
                        <div className={styles.workerBioWrapper}>
                            <p className={styles.name}>Jone due</p>
                            <p className={styles.description}>
                            t is a long established fact that a reader will be distracted by the readable content 
                            </p>
                        </div>
                    </div>
                    <div className={styles.workerWrapper}>
                        <div className={styles.worker2}>
                            <div className={styles.linkWrapper}>
                                <a className={styles.link}><FaFacebookF className={styles.social} /></a>
                                <a className={styles.link}><FaTwitter className={styles.social} /></a>
                                <a className={styles.link}><FaLinkedinIn className={styles.social} /></a>
                                <a className={styles.link}><FaGooglePlusG className={styles.social} /></a>
                            </div>
                        </div>
                        <div className={styles.workerBioWrapper}>
                            <p className={styles.name}>Jone due</p>
                            <p className={styles.description}>
                            t is a long established fact that a reader will be distracted by the readable content 
                            </p>
                        </div>
                    </div>
                    <div className={styles.workerWrapper}>
                        <div className={styles.worker3}>
                            <div className={styles.linkWrapper}>
                                <a className={styles.link}><FaFacebookF className={styles.social} /></a>
                                <a className={styles.link}><FaTwitter className={styles.social} /></a>
                                <a className={styles.link}><FaLinkedinIn className={styles.social} /></a>
                                <a className={styles.link}><FaGooglePlusG className={styles.social} /></a>
                            </div>
                        </div>
                        <div className={styles.workerBioWrapper}>
                            <p className={styles.name}>Jone due</p>
                            <p className={styles.description}>
                            t is a long established fact that a reader will be distracted by the readable content 
                            </p>
                        </div>
                    </div>
                    <div className={styles.workerWrapper}>
                        <div className={styles.worker3}>
                            <div className={styles.linkWrapper}>
                                <a className={styles.link}><FaFacebookF className={styles.social} /></a>
                                <a className={styles.link}><FaTwitter className={styles.social} /></a>
                                <a className={styles.link}><FaLinkedinIn className={styles.social} /></a>
                                <a className={styles.link}><FaGooglePlusG className={styles.social} /></a>
                            </div>
                        </div>
                        <div className={styles.workerBioWrapper}>
                            <p className={styles.name}>Jone due</p>
                            <p className={styles.description}>
                            t is a long established fact that a reader will be distracted by the readable content 
                            </p>
                        </div>
                    </div>
                    <div className={styles.workerWrapper}>
                        <div className={styles.worker3}>
                            <div className={styles.linkWrapper}>
                                <a className={styles.link}><FaFacebookF className={styles.social} /></a>
                                <a className={styles.link}><FaTwitter className={styles.social} /></a>
                                <a className={styles.link}><FaLinkedinIn className={styles.social} /></a>
                                <a className={styles.link}><FaGooglePlusG className={styles.social} /></a>
                            </div>
                        </div>
                        <div className={styles.workerBioWrapper}>
                            <p className={styles.name}>Jone due</p>
                            <p className={styles.description}>
                            t is a long established fact that a reader will be distracted by the readable content 
                            </p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Team;
