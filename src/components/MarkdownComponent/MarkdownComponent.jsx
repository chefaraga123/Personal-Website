import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownComponent({ filePath }) {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    async function fetchMarkdownFile() {
      try {
        const response = await fetch(filePath);
        const markdownText = await response.text();
        setMarkdownContent(markdownText);
      } catch (error) {
        console.error('Error fetching Markdown file:', error);
      }
    }

    fetchMarkdownFile();
  }, [filePath]);

  return (
    <div>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
}

export default MarkdownComponent;
