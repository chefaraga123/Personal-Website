import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './NoteViewer.module.css';

const NoteViewer = ({ noteName }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        fetch(`/notes/${noteName}.md`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                const lines = data.split('\n');
                const titleLine = lines.find(l => l.startsWith('# '));
                if (titleLine) {
                    setTitle(titleLine.replace(/^# /, '').trim());
                    setBody(lines.filter(l => l !== titleLine).join('\n').trimStart());
                } else {
                    setTitle(noteName.replace(/_/g, ' '));
                    setBody(data);
                }
            })
            .catch(error => {
                console.error('Error fetching note:', error);
            });
    }, [noteName]);

    return (
        <div className={styles.noteWrapper}>
            <h1 className={styles.noteTitle}>{title}</h1>
            <div className={styles.noteContainer}>
                <ReactMarkdown>{body}</ReactMarkdown>
            </div>
        </div>
    );
};

export default NoteViewer;
