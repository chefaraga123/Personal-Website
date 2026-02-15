import React from 'react';
import styles from './Languages.module.css';

import Navigation from '../../components/Navigation/Navigation';


const Home = () => {
    return (
        <div className={styles.page}>
            <Navigation />
            <section className={styles.intro}>
                <h1>My Language Learning Journey</h1>
                <p>
                    I have been learning German for a couple of years and have recently started learning Danish.
                </p>
                <p>
                    Here I shall record my language learning journey and the various strategies I've used to improve.
                </p>
            </section>

            <section className={styles.languages}>
                <h2>Languages I'm Learning</h2>
                <div className={styles.languageGrid}>
                    <div className={styles.languageCard}>
                        <h3>German</h3>
                        <p>Proficiency: Intermediate</p>
                        <p>Focus: Speaking fluency</p>
                    </div>
                    <div className={styles.languageCard}>
                        <h3>Danish</h3>
                        <p>Proficiency: Beginner</p>
                        <p>Focus: Vocabulary building</p>
                    </div>
                </div>
            </section>

            <section className={styles.progress}>
                <h2>Flashcard Progress</h2>
                <div className={styles.progressContainer}>
                    <div className={styles.progressBar} style={{ width: '50%' }}></div>
                </div>
                <p>250 flashcards completed out of 500!</p>
            </section>

            <section className={styles.timeline}>
                <h2>Timeline of My Journey</h2>
                <ul className={styles.timelineList}>
                    <li className={styles.timelineItem}>
                        <span className={styles.timelineDate}>2020</span>
                        <p>Started learning German using Duolingo, listening to German music, watching German TV.</p>
                    </li>

                    <li className={styles.timelineItem}>
                        <span className={styles.timelineDate}>2024</span>
                        <p>Began learning Danish to be able to connect with my gf better.</p>
                    </li>
                </ul>
            </section>


        </div>  
    );
};

export default Home;
