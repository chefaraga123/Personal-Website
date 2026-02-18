import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import MarkdownComponent from '../../../components/MarkdownComponent/MarkdownComponent';
import ArticleHelmet from '../../../components/ArticleHelmet/ArticleHelmet';
import styles from './ArticleStyling.module.css'

const Early_Modern_Monetary_Standards = () => {
    return (
        <div>
            <ArticleHelmet
                title="The Evolution of Monetary Standards in the Early Modern Period"
                description="An exploration of how monetary standards evolved during the early modern period and their economic implications"
                keywords="monetary standards, early modern history, economics, currency, gold standard"
                publishedDate="2022-04-26"
                category="Economics"
            />
            <Navigation />
            <div className={styles.markdownContainer}>
                <MarkdownComponent filePath={"/articles/Early_Modern_Monetary_Standards.md"} />
            </div>
        </div>
    );
};

export default Early_Modern_Monetary_Standards;
