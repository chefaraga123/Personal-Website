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
import ZkGaming from './pages/Writing/Articles/Zks_Gaming';
import ZKIntroduction from './pages/Writing/Articles/ZKs_Introduction';

/*Components*/
import NoteViewer from './components/NoteViewer/NoteViewer';

const App = () => {
  return (
    <Router basename="/Personal-Website">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/writing" element={<Writing />} /> 

        <Route path="/Emergence" element={<Emergence />} />
        <Route path="/Urbanisation-Virtual-Worlds" element={<Urbanisation />} />
        <Route path="/introduction-zks-gaming" element={<ZkGaming />} />
        <Route path="/introduction-zks" element={<ZKIntroduction />} />


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