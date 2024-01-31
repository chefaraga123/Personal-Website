import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const Article = ({ articleId }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/articles/${articleId}.md`)
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.log(error));
  }, [articleId]);

  return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default Article;
