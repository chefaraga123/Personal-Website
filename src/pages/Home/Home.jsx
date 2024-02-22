import React from 'react';
import styles from './Home.module.css';
import Navigation from '../../components/Navigation/Navigation';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <h1>Welcome to My Website</h1>
            <p>I am James, Co-Founder of Footium and have been working at the intersection of Web3 and Gaming since Summer 2020. I like building things for fun.  </p>
            <Navigation />
        </div>
    );
};

export default Home;
