import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import MarkdownComponent from '../../../components/MarkdownComponent/MarkdownComponent';
import styles from './ArticleStyling.module.css'

const ZkGaming = () => {
    return (
        <div>
            <Navigation />
            <div className={styles.markdownContainer}>
                <MarkdownComponent filePath={"/Personal-Website/articles/Introduction_Zks_Gaming.md"} />
            </div>
        </div>
    );

};

export default ZkGaming;
