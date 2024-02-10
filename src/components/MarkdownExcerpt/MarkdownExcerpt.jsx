import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './MarkdownExcerpt.module.css'; // Import CSS module

const MarkdownExcerpt = ({ actualurl, url, excerptLength = 300 }) => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch Markdown content');
        }
        const markdown = await response.text();
        setMarkdownContent(markdown);
      } catch (error) {
        console.error('Error fetching Markdown content:', error);
      }
    };

    fetchMarkdown();
  }, [url]);

  // Function to get excerpt from Markdown content
  const getExcerpt = (content) => {
    return content.slice(0, excerptLength);
  };

  return (
    <a href={actualurl} className={styles.anchorContainer}>
        <div className={styles.excerptContainer}>
          {/* Render excerpt of Markdown content */}
            <ReactMarkdown>{getExcerpt(markdownContent)}</ReactMarkdown>
          {/* Add "Read More" link to direct to the full article */}
        </div>
    </a>
  );
};

export default MarkdownExcerpt;
