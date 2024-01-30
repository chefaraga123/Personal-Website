import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={styles.navigationContainer}>
            <Link to="/" className={styles.navLink}>Home</Link>
            <Link to="/about" className={styles.navLink}>About</Link>
            <Link to="/writing" className={styles.navLink}>Writing</Link>
        </div>
    );
};

export default Navigation;
