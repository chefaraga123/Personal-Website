import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import MarkdownComponent from '../../../components/MarkdownComponent/MarkdownComponent';
import ArticleHelmet from '../../../components/ArticleHelmet/ArticleHelmet';
import styles from './ArticleStyling.module.css'

const Crypto_Gaming_Thoughts = () => {
    return (
        <div>
            <ArticleHelmet
                title="Crypto gaming — Part 1: An Incremental Innovation?"
                description="Examining whether crypto gaming represents a genuine innovation or an incremental improvement on existing gaming models"
                keywords="crypto gaming, blockchain gaming, NFTs, web3, gaming"
                publishedDate="2022-04-28"
                category="Technology"
            />
            <Navigation />
            <div className={styles.markdownContainer}>
                <MarkdownComponent filePath={"/articles/Crypto_Gaming_Thoughts.md"} />
            </div>
        </div>
    );
};

export default Crypto_Gaming_Thoughts;
