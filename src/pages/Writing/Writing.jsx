import React from 'react';
import styles from './Writing.module.css';
import Navigation from '../../components/Navigation/Navigation';

const Writing = () => {
    return (
        <div className={styles.writingContainer}>
            <Navigation />
            <h1>My Writings</h1>
            <p>Here you'll find my latest articles, essays, and musings on various topics.</p>
            {/* Add more content and structure as needed */}
        </div>
    );
};

export default Writing;
