/*Libaries*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/*Pages*/
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Writing from './pages/Writing/Writing';
import Books from './pages/Books/Books';
import KnowledgeGraph from './pages/KnowledgeGraph/KnowledgeGraph';

/*Pages: Articles */
import Emergence from './pages/Writing/Articles/Emergence';
import Urbanisation from './pages/Writing/Articles/Urbanisation_Virtual_Worlds';

/*Components*/
import NoteViewer from './components/NoteViewer/NoteViewer';

const App = () => {
  return (
    <Router basename="/Personal-Website">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/writing" element={<Writing />} /> 
        <Route path="/writing/Emergence" element={<Emergence />} />
        <Route path="/writing/Urbanisation-Virtual-Worlds" element={<Urbanisation />} />


        <Route path="/Books" element={<Books />} />
        <Route path="/knowledge-graph" element={<KnowledgeGraph />} />
        <Route path="/notes/:noteId" render={({ match }) => (
          <NoteViewer noteId={match.params.noteId} />
        )} />
        
      </Routes>
    </Router>
  );
};

export default App;