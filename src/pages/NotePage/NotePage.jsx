import React from 'react';
import { useParams } from 'react-router-dom';
import NoteViewer from '../../components/NoteViewer/NoteViewer'; // Import the NoteViewer component
import Navigation from '../../components/Navigation/Navigation';
import styles from './NotePage.module.css';

const NotePage = () => {
    const { noteName } = useParams(); // Get the note name from the URL

    return (
        <div>
            <Navigation />
            <NoteViewer noteName={noteName} /> {/* Pass the noteName to NoteViewer */}
        </div>
    );
};

export default NotePage; 