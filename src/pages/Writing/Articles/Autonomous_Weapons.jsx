import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import MarkdownComponent from '../../../components/MarkdownComponent/MarkdownComponent';
import ArticleHelmet from '../../../components/ArticleHelmet/ArticleHelmet';
import styles from './ArticleStyling.module.css'

const Autonomous_Weapons = () => {
    return (
        <div>
            <ArticleHelmet 
                title="The weapons were always autonomous"
                description="An exploration of the cybernetic origins of autonomous weapons and their implications for modern warfare"
                keywords="autonomous weapons, cybernetics, Norbert Wiener, military technology, warfare"
                publishedDate="2025-04-14"
                category="Technology"
            />
            <Navigation />
            <div className={styles.markdownContainer}>
                <MarkdownComponent filePath={"/articles/Autonomous_Weapons.md"} />
            </div>
        </div>
    );
};

export default Autonomous_Weapons; 