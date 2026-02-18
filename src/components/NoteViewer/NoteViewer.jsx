import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import styles from './NoteViewer.module.css';

const NoteViewer = ({ noteName }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [prevNote, setPrevNote] = useState(null);
    const [nextNote, setNextNote] = useState(null);

    useEffect(() => {
        fetch(`/notes/${noteName}.md`)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
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
            .catch(error => console.error('Error fetching note:', error));
    }, [noteName]);

    useEffect(() => {
        fetch('/obsidianGraph.json')
            .then(r => r.json())
            .then(({ nodes }) => {
                const idx = nodes.findIndex(n => n.url === `notes/${noteName}.md`);
                if (idx === -1) return;
                setPrevNote(idx > 0 ? nodes[idx - 1] : null);
                setNextNote(idx < nodes.length - 1 ? nodes[idx + 1] : null);
            })
            .catch(error => console.error('Error fetching graph:', error));
    }, [noteName]);

    const noteUrl = (url) => `/notes/${url.replace('notes/', '').replace('.md', '')}`;

    // Convert Obsidian [[wikilinks]] and [[Note|Alias]] to markdown links
    const parseWikilinks = (text) =>
        text.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, alias) => {
            const display = alias || target;
            const path = target.trim().replace(/ /g, '_');
            return `[${display}](/notes/${path})`;
        });

    return (
        <div className={styles.noteWrapper}>
            <h1 className={styles.noteTitle}>{title}</h1>
            <div className={styles.noteContainer}>
                <ReactMarkdown
                    components={{
                        a: ({ href, children }) =>
                            href?.startsWith('/') ? (
                                <Link to={href}>{children}</Link>
                            ) : (
                                <a href={href} target="_blank" rel="noreferrer">{children}</a>
                            ),
                    }}
                >
                    {parseWikilinks(body)}
                </ReactMarkdown>
            </div>
            <div className={styles.noteNav}>
                <div className={styles.noteNavPrev}>
                    {prevNote && (
                        <Link to={noteUrl(prevNote.url)}>
                            <span className={styles.noteNavLabel}>← Previous</span>
                            <span className={styles.noteNavTitle}>{prevNote.label}</span>
                        </Link>
                    )}
                </div>
                <div className={styles.noteNavNext}>
                    {nextNote && (
                        <Link to={noteUrl(nextNote.url)}>
                            <span className={styles.noteNavLabel}>Next →</span>
                            <span className={styles.noteNavTitle}>{nextNote.label}</span>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NoteViewer;
