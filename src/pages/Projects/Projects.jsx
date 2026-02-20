import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import styles from './Projects.module.css';

const projects = [
    {
        title: 'Languages',
        description: 'Tracking my German and Danish language learning journey — flashcard progress, timelines, and strategies.',
        url: 'https://languages.jamesoleary.xyz',
        tags: ['Language Learning'],
    },
    {
        title: 'Tracker',
        description: 'Personal habit tracking — wakeup times and gym attendance visualised over time.',
        url: 'https://tracker.jamesoleary.xyz',
        tags: ['Data', 'Habits'],
    },
    {
        title: 'Report Generator',
        description: 'A tool for generating post-match reports for Footium.',
        url: 'https://report-generator-front-end.vercel.app/',
        tags: ['Footium', 'Tool'],
    },
    {
        title: 'Your Personal Accountant',
        description: 'Classify transactions from bank statements automatically.',
        url: 'https://www.yourpersonalaccountant.today/',
        tags: ['Finance', 'AI'],
    },
    {
        title: 'Footium Chat',
        description: 'Post-match interviews with your Footium players.',
        url: 'https://www.footiumchat.com/',
        tags: ['Footium', 'AI'],
    },
    {
        title: 'LifeFlow',
        description: 'AI-assisted flowchart tool for personal goal setting — break down ambitions into structured, actionable steps.',
        url: 'https://flowcharts.jamesoleary.xyz',
        tags: ['Productivity', 'AI', 'Tool'],
    },
];

const Projects = () => {
    return (
        <div className={styles.container}>
            <Navigation />
            <h1 className={styles.heading}>Projects</h1>
            <p className={styles.subheading}>A directory of mini-apps and experiments.</p>
            <div className={styles.grid}>
                {projects.map((project, i) => (
                    <a
                        key={i}
                        href={project.url}
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={styles.cardTitle}>{project.title}</h2>
                        <p className={styles.cardDescription}>{project.description}</p>
                        {project.tags && (
                            <div className={styles.tags}>
                                {project.tags.map((tag, j) => (
                                    <span key={j} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        )}
                    </a>
                ))}
                {projects.length === 0 && (
                    <p className={styles.empty}>Nothing here yet.</p>
                )}
            </div>
        </div>
    );
};

export default Projects;
