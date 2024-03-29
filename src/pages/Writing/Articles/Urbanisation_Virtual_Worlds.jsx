import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import MarkdownComponent from '../../../components/MarkdownComponent/MarkdownComponent';
import styles from './ArticleStyling.module.css'

const Urbanisation = () => {
    return (
        <div>
            <Navigation />
            <div className={styles.markdownContainer}>
                <MarkdownComponent filePath={"/Personal-Website/articles/Urbanisation_Of_Virtual_worlds.md"} />
            </div>
        </div>
    );

};

export default Urbanisation;
