import React from 'react';
import styles from './About.module.css';
import Navigation from '../../components/Navigation/Navigation';
import ToggleSection from '../../components/ToggleSection/ToggleSection';
import ReactMarkdown from 'react-markdown';

const About = () => {

    const content_2019 = `
### 2019: 
I started studying Economics and Management at the University of Oxford
                
During my first year of University I felt like my course didn't satiate my curiosity and creativity.

I did enjoy aspects of my course, in particular, business and economic history, and aspects of microeconomics. I enjoyed using tools like matplotlib 
to visualise the economic models that we were presented with, such as the Keynesian IS-LM equilibrium model, I would be able to define various initial conditions
and see how my toy economy would respond to the various perturbations that it would be subject to. 
`

    const content_2020 = `
### 2020
Lockdown happened around the Spring and I went back to my parents' where I would study. University isn't that much work 
so I had plenty of free time in which to spend time learning other things and indulging in hobbies at my own pace. 

I started learning to code in April and started doing hackathons within a few months which served as a forcing function to improve my rate of learning.
This is how I ended up meeting Jordan, one of my co-founders at Footium.
`

    const content_2021 = `
### 2021
We did our pre-seed raised, it was encouraged by Encode Invest who lead our angel-round. At the time I didn't really understand the signficiance of what I was doing. 
Success felt predetermined. 

This was probably the most hectic year of my life (so far!) as I was balancing my degree which was definitely a non-trivial amount of work with Footium
amidst the broader context of the bull market which is a motive force if there ever was one.
`

    const content_2022 = `
### 2022
We finished our seed fundraise in January!
I was never a particularly *shadowy super coder*, and I was fine with the need to focus on the business' operational and commercial needs whilst we built out a tech team 
with the skills that I lacked.

I rotated into a commercial/operational role. This has included learning about:
- Compliance
- Corporate Governance, 
- Financial Management: runway projection and scenario planning
- Investor Relations 
- Hiring Processes
- various other things `

    const content_2023 = `

### 2023
An interesting phenomena to observe up close is managerial diseconomies of scale and the marginal coordination cost to an organisation of an additional hire.

In approximately July, I moved from Oxford to London. I was most fortunate to have been involved with the formation of HomeDAO, a rather elite network of young 
founders. 

Towards the end of the I started obsessively tracking personal metrics, including sleep (Sleep Duration, Wakeup Time, Sleep Quality, Time to Sleep), 
the times I eat, and my workouts.

This was one of the hardest years of my life for various personal reasons and it really highlighted the necessity of structure.
`
    const content_2024 = `
### 2024
The overriding objective of this year was to become more intentional. 
In addition to what I was already tracking I started to track how I spent my time, how long I worked for, how long I travelled for a day, 
how long I spent reading, doing hobbies.

I hit strength PRs, benching 130kg for 2 reps, although granted my 115 for 5 squat does show off how unbalanced my physique is!
I started running regularly and doing cardio 

This will be my greatest year ever, and a phase shift for Footium.

We soft-launched Footium in April which corresponded to two month long soft-launch seasons, S0 & S0.5, and then hard-launched in October. Provisionally that looks 
very encouraging in terms of retention, engagement & monetisation. 

The broader context of the bear market has been a great experience in which to grow as a person and 
test my conviction in the thesis of what we're building with Footium.

`;

    return (
        <div className={styles.homeContainer}>

        <div className={styles.aboutContainer}>
            <Navigation />
            <h1>About Me</h1>
            <ReactMarkdown>{content_2019}</ReactMarkdown>
            <ReactMarkdown>{content_2020}</ReactMarkdown>
            <ReactMarkdown>{content_2021}</ReactMarkdown>
            <ReactMarkdown>{content_2022}</ReactMarkdown>
            <ReactMarkdown>{content_2023}</ReactMarkdown>
            <ReactMarkdown>{content_2024}</ReactMarkdown>

        </div>
        </div>
    );
};

export default About;
