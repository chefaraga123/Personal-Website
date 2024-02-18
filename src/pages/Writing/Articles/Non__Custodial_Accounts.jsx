import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import MarkdownComponent from '../../../components/MarkdownComponent/MarkdownComponent';
import styles from './ArticleStyling.module.css'


const Non_Custodial_Accounts = () => {
    return (
        <div>
            <Navigation />
            <div className={styles.markdownContainer}>
                <MarkdownComponent filePath={"/Personal-Website/articles/Non_Custodial_Accounts.md"} />
            </div>
        </div>
    );

};

export default Non_Custodial_Accounts;
