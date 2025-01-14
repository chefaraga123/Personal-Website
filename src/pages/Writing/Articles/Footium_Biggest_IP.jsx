import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import MarkdownComponent from '../../../components/MarkdownComponent/MarkdownComponent';
import styles from './ArticleStyling.module.css'


const Footium_Biggest_IP = () => {
    return (
        <div>
            <Navigation />
            <div className={styles.markdownContainer}>
                <MarkdownComponent filePath={"/articles/Footium_Biggest_IP.md"} />
            </div>
        </div>
    );

};

export default Footium_Biggest_IP;
