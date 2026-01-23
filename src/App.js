/*Libaries*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

/*Pages*/
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Writing from './pages/Writing/Writing';
import Books from './pages/Books/Books';
import KnowledgeGraph from './pages/KnowledgeGraph/KnowledgeGraph';
import WorldMapPage from './pages/WorldMap/WorldMapPage';
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
import Footium_Biggest_IP from './pages/Writing/Articles/Footium_Biggest_IP';
import Marketplace_of_Ideas from './pages/Writing/Articles/Marketplace_of_Ideas';
import Soviet_Collapse from './pages/Writing/Articles/Soviet_Collapse';
import AI_Thinks_Like_The_Market from './pages/Writing/Articles/AI_Thinks_Like_The_Market';
import Autonomous_Weapons from './pages/Writing/Articles/Autonomous_Weapons';
import WhoSetThePrices from './pages/Writing/Articles/Who_set_the_prices_Who_Who';
import Managerial_Ethics from './pages/Writing/Articles/Managerial_Ethics_Ethical_Micro_Management';
import MDXExample from './pages/Writing/Articles/MDX_Example';
/*Pages: Book Summaries */
import BookSummary from './pages/Books/Book_Summaries/BookSummary';

/*Components*/
import NotePage from './pages/NotePage/NotePage';
import CookieConsent from './components/CookieConsent/CookieConsent';

const App = () => {
  return (
    <div>
      <Helmet>
        <title>James' Personal Website</title>
        <meta name="description" content="Personal website featuring articles on philosophy, computer science, and Footium, along with book summaries and a knowledge graph." />
        <meta name="keywords" content="philosophy, computer science, Footium, book summaries, knowledge graph" />
        <meta property="og:title" content="James' Personal Website" />
        <meta property="og:description" content="Personal website featuring articles on philosophy, computer science, and Footium, along with book summaries and a knowledge graph." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : 'https://yourwebsite.com'} />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://yourwebsite.com'} />
      </Helmet>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writing" element={<Writing />} /> 

          
          <Route path="/Emergence" element={<Emergence />} />
          <Route path="/Urbanisation-Virtual-Worlds" element={<Urbanisation />} />
          <Route path="/introduction-zks-gaming" element={<ZkGaming />} />
          <Route path="/introduction-zks" element={<ZKIntroduction />} />
          <Route path="/Non-custodial-account" element={<Non_Custodial_Accounts />} />
          <Route path="/Reason-For-Footium" element={<Reason_For_Footium />} />
          <Route path="/Recapping-2024" element={<Recapping_2024 />} />
          <Route path="/Footium-Biggest-IP" element={<Footium_Biggest_IP />} />
          <Route path="/Marketplace-of-Ideas" element={<Marketplace_of_Ideas />} />
          <Route path="/Soviet_Collapse" element={<Soviet_Collapse />} />
          <Route path="/AI_Thinks_Like_The_Market" element={<AI_Thinks_Like_The_Market />} />
          <Route path="/Autonomous_Weapons" element={<Autonomous_Weapons />} />
          <Route path="/Who_set_the_prices_Who_Who" element={<WhoSetThePrices />} />
          <Route path="/Managerial-Ethics" element={<Managerial_Ethics />} />
          <Route path="/MDX-Example" element={<MDXExample />} />

          <Route path="/Books" element={<Books />} />

          <Route path="/knowledge-graph" element={<KnowledgeGraph />} />
          <Route path="/world-map" element={<WorldMapPage />} />
                     
          <Route path="/books/:bookId" element={<BookSummary />} />
          
          <Route path="/notes/:noteName" element={<NotePage />} />
        </Routes>
      </Router>
      <CookieConsent />
    </div>
  );
};

export default App;
