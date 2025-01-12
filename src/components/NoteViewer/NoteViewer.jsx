import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './NoteViewer.module.css';

const NoteViewer = ({ noteName }) => {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        fetch(`/notes/${noteName}.md`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                setMarkdownContent(data);
            })
            .catch(error => {
                console.error('Error fetching note:', error);
            });
    }, [noteName]);

    return (
        <div className={styles.noteContainer}>
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
    );
};

export default NoteViewer;
