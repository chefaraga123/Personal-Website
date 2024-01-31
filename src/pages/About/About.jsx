import React from 'react';
import styles from './About.module.css';
import Navigation from '../../components/Navigation/Navigation';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <Navigation />

            <h1>About Me</h1>
            <p>Hello! I'm a passionate individual with a love for web development and design. Welcome to my personal website where I share my projects, ideas, and thoughts.</p>
        </div>
    );
};

export default About;
