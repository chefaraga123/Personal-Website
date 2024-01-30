import React from 'react';
import styles from './Home.module.css';
import Navigation from '../../components/Navigation/Navigation';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <h1>Welcome to My Website</h1>
            <p>This is the Home page. Feel free to add more text here.</p>
            <Navigation />
        </div>
    );
};

export default Home;
