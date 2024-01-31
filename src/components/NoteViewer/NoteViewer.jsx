import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const NoteViewer = ({ noteId }) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(`/notes/${noteId}.md`)
      .then(response => response.text())
      .then(text => setMarkdown(text))
      .catch(error => console.error('Error loading the note:', error));
  }, [noteId]);

  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default NoteViewer;
