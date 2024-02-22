import React from 'react';
import styles from './About.module.css';
import Navigation from '../../components/Navigation/Navigation';
import ToggleSection from '../../components/ToggleSection/ToggleSection';
import ReactMarkdown from 'react-markdown';

const About = () => {

    const content = `
### 2019: 
I started studying Economics and Management at the University of Oxford
                
During my first year of University I felt like my course didn't lend itself well to satisfying my curiosity and creativity.

I did enjoy aspects of my course, in particular, business and economic history, and aspects of microeconomics. I enjoyed using tools like matplotlib 
to visualise the economic models that we were presented with, such as the Keynesian IS-LM equilibrium model, I would be able to define various initial conditions
and see how my toy economy would respond to the various perturbations that it would be subject to. 

### 2020
ultimately meeting Jordan one of my co-founders at Footium.

I spent so much time on Footium during first and second years of study, I was spending more time on Footium than my degree, and it occupied much more of my headspace 

### 2021


### 2022
We finished our seed fundraise!
I was never a particularly *shadowy super coder*, and I was fine with the need to focus on the business' operational and commercial needs whilst we built out a tech team 
with the skills that I lacked 
I rotated into a commercial/operational role. This has included learning about:
- Compliance
- Corporate Governance, 
- Financial Management: runway projection and scenario planning
- Investor Relations 
- Hiring Processes
- various other things 


### 2023
An interesting phenomena to observe up close is managerial diseconomies of scale and the marginal coordination cost to an organisation of an additional hire.

In approximately July, I moved from Oxford to London. I was most fortunate to have been involved with the formation of HomeDAO, a rather elite network of young 
founders. 

The move to London was motivated by Tania.

Towards the end of the I started obsessively tracking personal metrics, including sleep (Sleep Duration, Wakeup Time, Sleep Quality, Time to Sleep), 
the times I eat, and my workouts.

### 2024
The overriding objective of this year was to become more intentional. 
In addition to what I was already tracking I started to track how I spent my time, how long I worked for, how long I travelled for a day, 
how long I spent reading, doing hobbies.

I've become extremely excited about 

This will be my greatest year ever, and a phase shift for Footium

`;

    return (
        <div className={styles.aboutContainer}>
            <Navigation />
            <h1>About Me</h1>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default About;
