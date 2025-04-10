import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import MarkdownComponent from '../../../components/MarkdownComponent/MarkdownComponent';
import ArticleHelmet from '../../../components/ArticleHelmet/ArticleHelmet';
import styles from './ArticleStyling.module.css'


const AI_Thinks_Like_The_Market = () => {
    return (
        <div>
            <ArticleHelmet 
                title="Markets Think Like AI"
                description="An analysis of how financial markets and Large Language Models share similar epistemological frameworks as inductive reasoning systems for prediction."
                keywords="artificial intelligence, market dynamics, philosophy, efficient markets hypothesis, LLMs, inductive reasoning"
                publishedDate="2025-03-15"
                category="Philosophy"
            />
            <Navigation />
            <div className={styles.markdownContainer}>
                <MarkdownComponent filePath={"/articles/AI_Thinks_Like_The_Market.md"} />
            </div>
        </div>
    );

};

export default AI_Thinks_Like_The_Market;
