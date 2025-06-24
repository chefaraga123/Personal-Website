import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import MarkdownComponent from '../../../components/MarkdownComponent/MarkdownComponent';
import styles from './ArticleStyling.module.css'

const Managerial_Ethics_Ethical_Micro_Management = () => {
    return (
        <div>
            <Navigation />
            <div className={styles.markdownContainer}>
                <MarkdownComponent filePath={"/articles/Managerial_Ethics_Ethical_Micro_Management.md"} />
            </div>
        </div>
    );
};

export default Managerial_Ethics_Ethical_Micro_Management;
