import React, { useEffect, useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './Writing.module.css';
import Navigation from '../../components/Navigation/Navigation';

const Writing = () => {
    const [articleContent, setArticleContent] = useState('');
    const [articleContent2, setArticleContent2] = useState('');

    useEffect(() => {
        // Construct the URL to the Markdown file based on the articleId
        const articleUrl = `/Personal-Website/articles/test.md`;

        // Fetch the Markdown content
        fetch(articleUrl)
        .then(response => {
            if (!response.ok) {
            throw new Error(`Could not fetch article: ${response.statusText}`);
            }
            return response.text();
        })
        .then(text => {
            // Set the fetched content to state
            setArticleContent(text);
        })
        .catch(error => {
            console.error(error);
            setArticleContent('Error loading article.');
        });
    }); // Dependency array to re-run the effect if articleId changes


    useEffect(() => {
        // Construct the URL to the Markdown file based on the articleId
        const articleUrl = `/Personal-Website/articles/test2.md`;

        // Fetch the Markdown content
        fetch(articleUrl)
        .then(response => {
            if (!response.ok) {
            throw new Error(`Could not fetch article: ${response.statusText}`);
            }
            return response.text();
        })
        .then(text => {
            // Set the fetched content to state
            setArticleContent2(text);
        })
        .catch(error => {
            console.error(error);
            setArticleContent2('Error loading article.');
        });
    }); // Dependency array to re-run the effect if articleId changes


    return (
        <div className={styles.writingContainer}>
            <Navigation />
            <h1>My Writings</h1>
            <p>I like writing about history, philosophy, economics, gaming, politics, systems theory and more</p>
            {/* Add more content and structure as needed */}
            <div className={styles.article}>
                <h2>Test 1</h2>
                <ReactMarkdown>{articleContent}</ReactMarkdown>
            </div>

            <div className={styles.article}>
                <h2>Test 2</h2>
                <ReactMarkdown>{articleContent2}</ReactMarkdown>
            </div>

        </div>
    );
};

export default Writing;
