import React from 'react'
import {Outlet} from 'react-router-dom';
import styles from './Layout.module.scss';
import Navigation from '../Navigation/Navigation';

const Layout = () => {
    return(
        <div className={styles.layoutWrapper}>
            <Navigation />
            <Outlet />
        </div>
    )
}

export default Layout;