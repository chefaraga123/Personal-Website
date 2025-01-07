import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import MarkdownComponent from '../../../components/MarkdownComponent/MarkdownComponent';
import styles from './ArticleStyling.module.css'

const Religion_Rereading = () => {
    return (
        <div>
            <Navigation />
            <div className={styles.markdownContainer}>
                <MarkdownComponent filePath={"/book_summaries/Religion_Rereading_What_Is_Bound_Together.md"} />
            </div>
        </div>
    );

};

export default Religion_Rereading;
