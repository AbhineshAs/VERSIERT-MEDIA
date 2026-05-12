import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import ClientMarquee from '../components/ClientMarquee';
import WhatWeDo from '../components/WhatWeDo';
import QuoteBuilder from '../components/QuoteBuilder';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Enquiry from '../components/Enquiry';
import Careers from '../components/Careers';
import WhyVersiert from '../components/WhyVersiert';
import BottomCTA from '../components/BottomCTA';


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
      <ClientMarquee />
      <WhatWeDo />
      <QuoteBuilder />
      <Projects limit={4} />
      <Testimonials />
      <Enquiry />
      <Careers />
      <WhyVersiert />
      <BottomCTA />
    </motion.div>
  );
};

export default Home;
