import React, {useRef, useEffect, useState} from 'react'
import styles from './Navigation.module.scss';
import { FaSearch, FaBars } from "react-icons/fa";
import {NavLink, useNavigate, Link} from 'react-router-dom';

const Navigation = () => {

    const [isMenuVisible, setIsMenuVisible] = useState(false)

    return(
        <div className={styles.headerWrapper}>
            <div className={styles.navigationWrapper}>
                <div className={styles.logoWrapper}>
                    <Link to="/">
                    <img src="images/logoRd.png" className={styles.logoImg} />
                    </Link>
                </div>
                <nav className={styles.navigationMenu}>
                    <ul className={`${styles.navigation} ${isMenuVisible ? styles.visible : ''}`}>
                        <li className={styles.navigationElement}>
                            <NavLink className={styles.navigationElement} to="/">Home</NavLink>
                        </li>
                        <li className={styles.navigationElement}>
                            <NavLink className={styles.navigationElement} to="/abouts">Abouts</NavLink>
                        </li>
                        <li className={styles.navigationElement}>
                            <NavLink className={styles.navigationElement} to="/services">Services</NavLink>
                        </li>
                        <li className={styles.navigationElement}>
                            <NavLink className={styles.navigationElement} to="/pages">Pages</NavLink>
                        </li>
                        <li className={styles.navigationElement}>
                            <NavLink className={styles.navigationElement} to="/busieness">Blog</NavLink>
                        </li>
                        <li className={styles.navigationElement}>
                            <NavLink className={styles.navigationElement} to="/contacts">Contact Us</NavLink>
                        </li>
                        <FaSearch className={styles.searchlogo} />
                        <button type="button" className={styles.btnSinup}>SINUP NOW</button>
                    </ul>
                    <button onClick={e => setIsMenuVisible(prev => !prev)} className={styles.respBtn}>
                        <FaBars />
                    </button>
                </nav>
            </div>
        </div>
    )
}

export default Navigation;

