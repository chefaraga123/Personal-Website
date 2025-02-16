import React from 'react';
import styles from './Home.module.css';
import Navigation from '../../components/Navigation/Navigation';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <h1>Welcome to My Website</h1>
            <p>I am James, Co-Founder of Footium and have been working at the intersection of Web3 and Gaming since Summer 2020. I like building things for fun.  </p>
            <Navigation />
            <section className={styles.recentUpdates}>
                <h2>Updates</h2>
                <p>16/02/2025: <b>Notes:</b> <a href="/notes/ContractsforDifference">Contracts for Difference</a>, <a href="/notes/EnergyMarketReform">Energy Market Reform</a> which relate to UK energy policy</p>
                <p>06/02/2025: <b>Article:</b> <a href="/Marketplace-of-Ideas">Marketplace of Ideas</a> which is about the divergent epistemic committments of science and efficient markets</p>
            </section>
        </div>
    );
};

export default Home;
