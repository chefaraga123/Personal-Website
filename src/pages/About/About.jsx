import React from 'react';
import styles from './About.module.css';
import Navigation from '../../components/Navigation/Navigation';
import ToggleSection from '../../components/ToggleSection/ToggleSection';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <Navigation />

            <h1>About Me</h1>
            <p>Hello! I'm a passionate individual with a love for web development and design. Welcome to my personal website where I share my projects, ideas, and thoughts.</p>
            <ToggleSection title="Click to Toggle">
                <p>This is the content that gets revealed when the button is clicked!</p>
            </ToggleSection>
        </div>
    );
};

export default About;
