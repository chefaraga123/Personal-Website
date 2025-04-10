import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import MarkdownComponent from '../../../components/MarkdownComponent/MarkdownComponent';
import ArticleHelmet from '../../../components/ArticleHelmet/ArticleHelmet';
import styles from './ArticleStyling.module.css'

const Urbanisation = () => {
    return (
        <div>
            <ArticleHelmet 
                title="The Urbanisation of Virtual Worlds"
                description="Exploring how virtual worlds develop urban characteristics and what this means for digital communities and economies."
                keywords="virtual worlds, urbanisation, digital communities, Footium, gaming"
                publishedDate="2024-01-23"
                category="Footium"
            />
            <Navigation />
            <div className={styles.markdownContainer}>
                <MarkdownComponent filePath={"/articles/Urbanisation_Of_Virtual_worlds.md"} />
            </div>
        </div>
    );

};

export default Urbanisation;
