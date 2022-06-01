import React from 'react';
import styles from './Contact.module.scss';
import {FaMailBulk, FaMap, FaPhone, FaFacebookF,FaLinkedinIn,FaGooglePlusG, FaTwitter   } from "react-icons/fa";

const Contact = () => {
    return(
        <div className={styles.contactWrapper}>
          <img className={styles.log} src='./images/logoRd.png' />
          <div className={styles.contactInfoWrapper}>
              <div className={styles.contact}>
                  <p className={styles.title}>Contact Us</p>
                  <div className={styles.contactIconWrapper}>
                    <div className={styles.contactIcon}>
                        <FaMap className={styles.ico}/>
                        <p className={styles.street}>
                            London 145<br/>
                            United Kingdom
                        </p>
                    </div>
                    <div className={styles.contactIcon}>
                        <FaMailBulk className={styles.ico}/>
                        <p className={styles.street}>
                            consultation@gmail.com <br/>
                            consultation@gmail.com
                        </p>
                    </div>
                    <div className={styles.contactIcon}>
                        <FaPhone className={styles.ico}/>
                        <p className={styles.street}>
                            +48 345 221 310 <br/>
                            +48 345 221 310
                        </p>
                    </div>
                  </div>
                  <div className={styles.socialIconsWrapper}>
                    <a className={styles.link}><FaFacebookF className={styles.social} /></a>
                    <a className={styles.link}><FaTwitter className={styles.social} /></a>
                    <a className={styles.link}><FaLinkedinIn className={styles.social} /></a>
                    <a className={styles.link}><FaGooglePlusG className={styles.social} /></a>
                  </div>
              </div>
              <div className={styles.newsletterWrapper}>
                  <div className={styles.menuNews}>
                      <p className={styles.titleNews}>Menus</p>
                      <p className={styles.link}>Home</p>
                      <p className={styles.link}>About Us</p>
                      <p className={styles.link}>Services</p>
                      <p className={styles.link}>Pages</p>
                      <p className={styles.link}>Blog</p>
                      <p className={styles.link}>Contact Us</p>
                  </div>
                  <div className={styles.menu}>
                      <p className={styles.titleNews}>Recent Post</p>
                      <p className={styles.link}>Participate in staff</p>
                      <p className={styles.link}>meetings manage</p>
                      <p className={styles.link}>dedicated to</p>
                      <p className={styles.link}>marketing</p>
                      <p className={styles.link}>Blog</p>
                      <p className={styles.link}>November 25, 2019</p>
                  </div>
                  <div className={styles.mailWrapper}>
                      <p className={styles.titleNews}>Newsletter</p>
                      <input className={styles.inputStyl} type="email" placeholder="Your Email" />
                      <button type="button" className={styles.btn}>Submit</button>
                  </div>
              </div>
          </div>
        </div>
    )
}

export default Contact;
