import React from 'react';
import styles from './Home.module.css';
import Navigation from '../../components/Navigation/Navigation';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <Navigation />
            <section className={styles.recentUpdates}>
                <h2>Updates</h2>
                <p>23/01/2026: <b>Shipped</b> Updated the books page with a book of the day</p>
                <p>15/05/2025: <b>Article:</b> <a href="/Managerial-Ethics">Managerial Ethics & Ethical Micro-Management</a></p>
                <p>10/05/2025: <b>Article:</b> <a href="/Who_set_the_prices_Who_Who">Who set the prices? Who. Who.</a></p>
                <p>14/04/2025: <b>Article:</b> <a href="/Autonomous_Weapons">The weapons were always autonomous</a> which is about the cybernetic origins of autonomous weapons and their implications for modern warfare</p>
                <p>28/03/2025: <b>Shipped</b> <a href="https://report-generator-front-end.vercel.app/">Report Generator</a> which is a tool for generating post match reports for Footium</p>
                <p>18/03/2025: <b>Article:</b> <a href="/AI_Thinks_Like_The_Market">AI Thinks Like The Market</a> Financial Markets and Large Language Models share failure modes</p>
                <p>08/03/2025: <b>Article:</b> <a href="/Soviet_Collapse">How Gorbachev's reforms collapsed the Soviet Union</a></p>
                <p>07/03/2025: <b>Shipped</b> <a href="https://www.yourpersonalaccountant.today/">Your Personal Accountant</a> to classify transactions from bank statements</p>
                <p>06/03/2025: <b>Notes:</b> 
                    <a href="/notes/Allosteric_Regulation">Allosteric Regulation</a>: the regulation of protein enzymes by other proteins.
                    <a href="/notes/RNA_Transcription"> RNA Transcription</a>: the first step in gene expression.
                    
                </p>
                <p>03/03/2025: <b>Shipped </b> <a href="https://www.footiumchat.com/">Footium Chat</a> so that people can have post-match interviews with their Footium players</p>
                <p>01/03/2025: <b>Notes:</b> <a href="/notes/Proteins">Proteins</a> which is about the structure and function of proteins</p>
                <p>22/02/2025: <b>Notes:</b> <a href="/notes/Genes">Genes</a></p>
                <p>16/02/2025: <b>Notes:</b> <a href="/notes/ContractsforDifference">Contracts for Difference</a> which relates to UK energy policy and an implied mode of subsidy for renewables</p>
                <p>06/02/2025: <b>Article:</b> <a href="/Marketplace-of-Ideas">Marketplace of Ideas</a> which is about the divergent epistemic committments of science and efficient markets</p>
            </section>
        </div>
    );
};

export default Home;
