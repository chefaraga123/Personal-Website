import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import MarkdownComponent from '../../../components/MarkdownComponent/MarkdownComponent';
import ArticleHelmet from '../../../components/ArticleHelmet/ArticleHelmet';
import styles from './ArticleStyling.module.css'

const ZKIntroduction = () => {
    return (
        <div>
            <ArticleHelmet 
                title="An Introduction to ZKs"
                description="A comprehensive introduction to Zero-Knowledge Proofs (ZKs), their applications, and importance in modern cryptography."
                keywords="zero-knowledge proofs, ZK, cryptography, blockchain, privacy, computer science"
                publishedDate="2024-02-15"
                category="Computer-Science"
            />
            <Navigation />
            <div className={styles.markdownContainer}>
                <MarkdownComponent filePath={"/articles/Introduction_Zks.md"} />
            </div>
        </div>
    );

};

export default ZKIntroduction;
