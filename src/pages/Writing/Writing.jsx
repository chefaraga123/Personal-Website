import React, { useEffect, useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './Writing.module.css';
import Navigation from '../../components/Navigation/Navigation';
import Article from '../../components/Article/Article';

const Writing = () => {
    const [articleContent, setArticleContent] = useState('');

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

    return (
        <div className={styles.writingContainer}>
            <Navigation />
            <h1>My Writings</h1>
            <p>Here you'll find my latest articles, essays, and musings on various topics.</p>
            {/* Add more content and structure as needed */}
            <ReactMarkdown>{articleContent}</ReactMarkdown> {/* Render the Markdown content */}

        </div>
    );
};

export default Writing;
