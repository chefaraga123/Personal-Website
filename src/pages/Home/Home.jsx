import React from 'react';
import styles from './Home.module.css';
import Navigation from '../../components/Navigation/Navigation';

const Tag = ({ label }) => <span className={styles.tag}>{label}</span>;

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <Navigation />
            <section className={styles.recentUpdates}>
                <h2>Updates</h2>
                <p><span>16/02/2026: <a href="https://languages.jamesoleary.xyz">Languages</a> producing a spaced repetition tool</span><Tag label="Shipped" /></p>
                <p><span>12/02/2026: <a href="https://tracker.jamesoleary.xyz">Tracker</a> for tracking habits and metrics</span><Tag label="Shipped" /></p>
                <p><span>23/01/2026: Updated the books page with a book of the day</span><Tag label="Shipped" /></p>
                <p><span>15/05/2025: <a href="/Managerial-Ethics">Managerial Ethics & Ethical Micro-Management</a></span><Tag label="Article" /></p>
                <p><span>10/05/2025: <a href="/Who_set_the_prices_Who_Who">Who set the prices? Who. Who.</a></span><Tag label="Article" /></p>
                <p><span>14/04/2025: <a href="/Autonomous_Weapons">The weapons were always autonomous</a> which is about the cybernetic origins of autonomous weapons and their implications for modern warfare</span><Tag label="Article" /></p>
                <p><span>28/03/2025: <a href="https://report-generator-front-end.vercel.app/">Report Generator</a> which is a tool for generating post match reports for Footium</span><Tag label="Shipped" /></p>
                <p><span>18/03/2025: <a href="/AI_Thinks_Like_The_Market">AI Thinks Like The Market</a> Financial Markets and Large Language Models share failure modes</span><Tag label="Article" /></p>
                <p><span>08/03/2025: <a href="/Soviet_Collapse">How Gorbachev's reforms collapsed the Soviet Union</a></span><Tag label="Article" /></p>
                <p><span>07/03/2025: <a href="https://www.yourpersonalaccountant.today/">Your Personal Accountant</a> to classify transactions from bank statements</span><Tag label="Shipped" /></p>
                <p><span>06/03/2025: <a href="/notes/Allosteric_Regulation">Allosteric Regulation</a>: the regulation of protein enzymes by other proteins. <a href="/notes/RNA_Transcription">RNA Transcription</a>: the first step in gene expression.</span><Tag label="Notes" /></p>
                <p><span>03/03/2025: <a href="https://www.footiumchat.com/">Footium Chat</a> so that people can have post-match interviews with their Footium players</span><Tag label="Shipped" /></p>
                <p><span>01/03/2025: <a href="/notes/Proteins">Proteins</a> which is about the structure and function of proteins</span><Tag label="Notes" /></p>
                <p><span>22/02/2025: <a href="/notes/Genes">Genes</a></span><Tag label="Notes" /></p>
                <p><span>16/02/2025: <a href="/notes/ContractsforDifference">Contracts for Difference</a> which relates to UK energy policy and an implied mode of subsidy for renewables</span><Tag label="Notes" /></p>
                <p><span>06/02/2025: <a href="/Marketplace-of-Ideas">Marketplace of Ideas</a> which is about the divergent epistemic committments of science and efficient markets</span><Tag label="Article" /></p>
            </section>
        </div>
    );
};

export default Home;
