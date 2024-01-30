import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={styles.navigationContainer}>
            <Link to="/about" className={styles.navLink}>About</Link>
        </div>
    );
};

export default Navigation;
