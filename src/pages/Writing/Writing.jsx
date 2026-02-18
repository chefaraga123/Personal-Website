import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styles from './Writing.module.css';
import Navigation from '../../components/Navigation/Navigation';
import ContentsComponent from '../../components/Contents/Contents';
import sections from './sections.json'; // Adjust the path if the JSON file is in a different location

const Writing = () => {
    const [filter, setFilter] = useState('all'); // Default filter

    // Function to handle filter change
    const handleFilterChange = (category) => {
        setFilter(category);
    };

    return (
        <div className={styles.writingContainer}>
            <Helmet>
                <title>My Writings | James' Personal Website</title>
                <meta name="description" content="Collection of articles on Philosophy, Computer Science, and Footium by James" />
                <meta name="keywords" content="writing, articles, philosophy, computer science, footium" />
                <meta property="og:title" content="My Writings | James' Personal Website" />
                <meta property="og:description" content="Collection of articles on Philosophy, Computer Science, and Footium by James" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : 'https://yourwebsite.com/writing'} />
                <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://yourwebsite.com/writing'} />
            </Helmet>
            <Navigation />

            <ContentsComponent sections={[...sections].reverse()} filter={filter} />

            <div className={styles.filterBar}>
                <button
                    className={`${styles.filterButton} ${filter === 'all' ? styles.filterButtonActive : ''}`}
                    onClick={() => handleFilterChange('all')}
                >
                    All
                </button>
                <button
                    className={`${styles.filterButton} ${filter === 'Footium' ? styles.filterButtonActive : ''}`}
                    onClick={() => handleFilterChange('Footium')}
                >
                    Footium
                </button>
                <button
                    className={`${styles.filterButton} ${filter === 'Philosophy' ? styles.filterButtonActive : ''}`}
                    onClick={() => handleFilterChange('Philosophy')}
                >
                    Philosophy
                </button>
                <button
                    className={`${styles.filterButton} ${filter === 'Computer-Science' ? styles.filterButtonActive : ''}`}
                    onClick={() => handleFilterChange('Computer-Science')}
                >
                    Computer Science
                </button>
                <button
                    className={`${styles.filterButton} ${filter === 'Economics' ? styles.filterButtonActive : ''}`}
                    onClick={() => handleFilterChange('Economics')}
                >
                    Economics
                </button>
            </div>

        </div>
    );
};

export default Writing;
