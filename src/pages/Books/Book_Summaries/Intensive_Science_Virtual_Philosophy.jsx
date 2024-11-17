import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import MarkdownComponent from '../../../components/MarkdownComponent/MarkdownComponent';
import styles from './ArticleStyling.module.css'

const Intensive_Science = () => {
    return (
        <div>
            <Navigation />
            <div className={styles.markdownContainer}>
                <MarkdownComponent filePath={"/book_summaries/Intensive_Science_Virtual_Philosophy.md"} />
            </div>
        </div>
    );

};

export default Intensive_Science;
