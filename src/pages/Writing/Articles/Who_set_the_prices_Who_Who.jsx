import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import MarkdownComponent from '../../../components/MarkdownComponent/MarkdownComponent';
import ArticleHelmet from '../../../components/ArticleHelmet/ArticleHelmet';
import styles from './ArticleStyling.module.css'

const WhoSetThePrices = () => {
    return (
        <div>
            <ArticleHelmet 
                title="Who set the prices? Who. Who."
                description="The 3G Auctions were the great success of applied economics"
                keywords="3G Auctions, Simultaneous Multiple Round Ascending Auction, SMRA, auction theory, applied information economics"
                publishedDate="2025-05-05"
                category="Economics"
            />
            <Navigation />
            <div className={styles.markdownContainer}>
                <MarkdownComponent filePath={"/articles/Who_set_the_prices_Who_Who.md"} />
            </div>
        </div>
    );

};

export default WhoSetThePrices;
