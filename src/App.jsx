import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SmoothScroll from './components/SmoothScroll';
import WhoWeArePage from './pages/WhoWeArePage';
import WhatWeDoPage from './pages/WhatWeDoPage';
import OurWorkPage from './pages/OurWorkPage';
import EnquiryPage from './pages/EnquiryPage';
import CareersPage from './pages/CareersPage';
import ThanksPage from './pages/ThanksPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeArePage />} />
        <Route path="/what-we-do" element={<WhatWeDoPage />} />
        <Route path="/our-work" element={<OurWorkPage />} />
        <Route path="/enquiry" element={<EnquiryPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/thanks" element={<ThanksPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <SmoothScroll>
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    </Router>
  );
}

export default App;
