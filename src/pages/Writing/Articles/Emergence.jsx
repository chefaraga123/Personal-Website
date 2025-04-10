import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import MarkdownComponent from '../../../components/MarkdownComponent/MarkdownComponent';
import ArticleHelmet from '../../../components/ArticleHelmet/ArticleHelmet';
import styles from './ArticleStyling.module.css'


const Emergence = () => {
    return (
        <div>
            <ArticleHelmet 
                title="The Definitive Introduction to Emergence"
                description="A comprehensive exploration of emergence theory, its applications, and implications in philosophy and science."
                keywords="emergence, philosophy, complexity, systems theory"
                publishedDate="2024-02-07"
                category="Philosophy"
            />
            <Navigation />
            <div className={styles.markdownContainer}>
                <MarkdownComponent filePath={"/articles/Emergence.md"} />
            </div>
        </div>
    );

};

export default Emergence;
