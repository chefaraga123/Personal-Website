import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import MarkdownComponent from '../../../components/MarkdownComponent/MarkdownComponent';
import ArticleHelmet from '../../../components/ArticleHelmet/ArticleHelmet';
import styles from './ArticleStyling.module.css'


const Marketplace_of_Ideas = () => {
    return (
        <div>
            <ArticleHelmet 
                title="What Is the Marketplace of Ideas?"
                description="An exploration of the marketplace of ideas concept, its history, implications for free speech, and criticisms in modern discourse."
                keywords="marketplace of ideas, philosophy, free speech, discourse, democracy, public debate"
                publishedDate="2025-02-06"
                category="Philosophy"
                imageUrl="/articles/Diagrams/Idea_Article_1.jpeg"
            />
            <Navigation />
            <div className={styles.markdownContainer}>
                <img className={styles.centeredImage} src={"/articles/Diagrams/Idea_Article_1.jpeg"} alt="Header Image" />
                <MarkdownComponent filePath={"/articles/What_Is_the_Marketplace_of_Ideas.md"} />
            </div>
        </div>
    );

};

export default Marketplace_of_Ideas;
