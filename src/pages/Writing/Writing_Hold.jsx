import React, { useEffect, useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './Writing.module.css';
import Navigation from '../../components/Navigation/Navigation';
import Article from '../../components/Article/Article';

const Writing = () => {
    const [articles, setArticles] = useState([[]]);

    useEffect(() => {
        // Construct the URL to the Markdown file based on the articleId
        const article1 = `/Personal-Website/articles/test.md`;
        const article2 = `/Personal-Website/articles/test2.md`;

        const articleFileNames = [article1, article2]; // Add more filenames as needed


        // Fetch all articles
        Promise.all(articleFileNames.map(fileName =>
            fetch(`/Personal-Website/articles/${fileName}.md`)
            .then(response => {
                if (!response.ok) {
                throw new Error(`Could not fetch article: ${fileName}, status: ${response.status}`);
                }
                return response.text();
            })
            .catch(error => {
                console.error('Error fetching article:', fileName, error);
                return 'Error loading article content.';
            })
        )).then(contents => {
            console.log(contents); // Check the fetched Markdown text
            // Create an array of objects containing filenames and content
            const articlesData = contents.map((content, index) => ({
            id: articleFileNames[index],
            content: content
            }));
            setArticles(articlesData);
        });
        }, []);
    
    return (
        <div className={styles.writingContainer}>
            <Navigation />
            <h1>My Writings</h1>
            <p>Here you'll find my latest articles, essays, and musings on various topics.</p>

            {articles.map((article, index) => (
                <div key={index}>
                    <h2>{article.id?.replace(/-/g, ' ') || 'Default'}</h2>
                    <ReactMarkdown>{article.content}</ReactMarkdown> {/* Render the Markdown content */}
                </div>
            ))}
        </div>
    );
};

export default Writing;
