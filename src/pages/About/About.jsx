import React from 'react';
import styles from './About.module.css';
import Navigation from '../../components/Navigation/Navigation';
import ToggleSection from '../../components/ToggleSection/ToggleSection';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <Navigation />

            <h1>About Me</h1>
            <p>I am James, Co-Founder of Footium and have been working at the intersection of Web3 and Gaming since Summer 2020. I like building things for fun.  </p>
            <p>I like writing about history, philosophy, economics, gaming, politics, systems theory and more, checkout some of my writing in the Writing page</p>
            <p>I wrote this website in React myself :)</p>
            <ToggleSection title="Click to Toggle">
                <p>This is the content that gets revealed when the button is clicked!</p>
            </ToggleSection>
        </div>
    );
};

export default About;
