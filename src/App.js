/*Libaries*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/*Pages*/
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Writing from './pages/Writing/Writing';
import Books from './pages/Books/Books';
import KnowledgeGraph from './pages/KnowledgeGraph/KnowledgeGraph';
import Trackers from './pages/Trackers/Trackers';
import Languages from './pages/Languages/Languages';

/*Pages: Articles */
import Emergence from './pages/Writing/Articles/Emergence';
import Urbanisation from './pages/Writing/Articles/Urbanisation_Virtual_Worlds';
import ZkGaming from './pages/Writing/Articles/Zks_Gaming';
import ZKIntroduction from './pages/Writing/Articles/ZKs_Introduction';
import Non_Custodial_Accounts from './pages/Writing/Articles/Non__Custodial_Accounts';
import Reason_For_Footium from './pages/Writing/Articles/Reason_For_Footium';
import Recapping_2024 from './pages/Writing/Articles/Recapping_2024';

/*Pages: Book Summaries */
import Intensive_Science from './pages/Books/Book_Summaries/Intensive_Science_Virtual_Philosophy'

/*Components*/
import NoteViewer from './components/NoteViewer/NoteViewer';

const App = () => {
  return (
      <Router basename="/">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/writing" element={<Writing />} /> 
            <Route path="/languages" element={<Languages />} />

            <Route path="/Emergence" element={<Emergence />} />
            <Route path="/Urbanisation-Virtual-Worlds" element={<Urbanisation />} />
            <Route path="/introduction-zks-gaming" element={<ZkGaming />} />
            <Route path="/introduction-zks" element={<ZKIntroduction />} />
            <Route path="/Non-custodial-account" element={<Non_Custodial_Accounts />} />
            <Route path="/Reason-For-Footium" element={<Reason_For_Footium />} />
            <Route path="/Recapping-2024" element={<Recapping_2024 />} />


            <Route path="/Books" element={<Books />} />


            <Route path="/knowledge-graph" element={<KnowledgeGraph />} />
            
            <Route path="/notes/:noteId" render={({ match }) => (
              <NoteViewer noteId={match.params.noteId} />
            )} />
            
            <Route path="/books/intensive-science-virtual-philosophy" element={<Intensive_Science />}/>

            
            <Route path="/Trackers" element={<Trackers />} />
          </Routes>
     </Router>
  );
};

export default App;