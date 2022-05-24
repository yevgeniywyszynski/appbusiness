import React from 'react'
import {Outlet} from 'react-router-dom';
import styles from './Layout.module.scss';
import Navigation from '../Navigation/Navigation';
import Contact from '../Contact/Contact';

const Layout = () => {
    return(
        <div className={styles.layoutWrapper}>
            <Navigation />
            <Outlet />
            <Contact />
        </div>
    )
}

export default Layout;