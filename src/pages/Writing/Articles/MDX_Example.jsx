import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import MDXComponent from '../../../components/MDXComponent/MDXComponent';
import ArticleHelmet from '../../../components/ArticleHelmet/ArticleHelmet';
import styles from './ArticleStyling.module.css';

const MDXExample = () => {
    return (
        <div>
            <ArticleHelmet
                title="Interactive Articles with MDX"
                description="Learn how to create interactive articles using MDX with embedded React components like charts, callouts, and collapsible sections."
                keywords="MDX, React, interactive articles, data visualization"
                publishedDate="2026-01-23"
                category="Technology"
            />
            <Navigation />
            <div className={styles.markdownContainer}>
                <MDXComponent filePath="/articles/MDX_Example.mdx" />
            </div>
        </div>
    );
};

export default MDXExample;
