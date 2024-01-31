import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Writing from './pages/Writing/Writing';
import KnowledgeGraph from './pages/KnowledgeGraph/KnowledgeGraph';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/writing" element={<Writing />} /> 
        <Route path="/knowledge-graph" element={<KnowledgeGraph />} />
      </Routes>
    </Router>
  );
};

export default App;
