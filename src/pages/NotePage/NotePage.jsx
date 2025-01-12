import React from 'react';
import { useParams } from 'react-router-dom';
import NoteViewer from '../../components/NoteViewer/NoteViewer'; // Import the NoteViewer component

const NotePage = () => {
    const { noteName } = useParams(); // Get the note name from the URL

    return (
        <div>
            <h1>{noteName.replace(/%20/g, ' ')}</h1> {/* Replace %20 with spaces for display */}
            <NoteViewer noteName={noteName} /> {/* Pass the noteName to NoteViewer */}
        </div>
    );
};

export default NotePage; 