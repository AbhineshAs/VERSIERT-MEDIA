import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import WhatWeDo from '../components/WhatWeDo';
import Projects from '../components/Projects';
import QuoteBuilder from '../components/QuoteBuilder';
import Enquiry from '../components/Enquiry';
import Careers from '../components/Careers';
import WhyVersiert from '../components/WhyVersiert';


const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <QuoteBuilder />
      <Projects />
      <Enquiry />
      <Careers />
    </motion.div>
  );
};

export default Home;
