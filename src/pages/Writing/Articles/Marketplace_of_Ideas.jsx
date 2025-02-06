import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import MarkdownComponent from '../../../components/MarkdownComponent/MarkdownComponent';
import styles from './ArticleStyling.module.css'


const Footium_Biggest_IP = () => {
    return (
        <div>
            <Navigation />
            <div className={styles.markdownContainer}>
                <img className={styles.centeredImage} src={"/articles/Diagrams/Idea_Article_1.jpeg"} alt="Header Image" />
                <MarkdownComponent filePath={"/articles/What_Is_the_Marketplace_of_Ideas.md"} />
            </div>
        </div>
    );

};

export default Footium_Biggest_IP;
