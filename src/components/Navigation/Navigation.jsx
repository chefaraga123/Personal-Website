import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={styles.navigationContainer}>
            <NavLink
                to="/"
                className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                end
            >
                Home
            </NavLink>
            <NavLink
                to="/writing"
                className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
            >
                Writing
            </NavLink>
            <NavLink
                to="/books"
                className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
            >
                Books
            </NavLink>
            <NavLink
                to="/knowledge-graph"
                className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
            >
                Knowledge Graph
            </NavLink>
            <NavLink
                to="/languages"
                className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
            >
                Languages
            </NavLink>
            <a
                href="https://tracker.jamesoleary.xyz"
                className={styles.navLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                Tracker
            </a>
        </div>
    );
};

export default Navigation;
