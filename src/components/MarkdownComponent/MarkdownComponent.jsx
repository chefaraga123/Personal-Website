import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';

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
      <ReactMarkdown 
        children={markdownContent}
        remarkPlugins={[remarkMath]}
      />
    </div>
  );
}

export default MarkdownComponent;
