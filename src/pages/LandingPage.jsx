import React, { useCallback } from 'react';
import Portfolio from './portfolio/Portfolio';
import ContactUs from './sections/ContactUs';
import Hero from './sections/Hero';
import MyServices from './sections/MyServices';
import Skills from './sections/skill/Skills';
import Testimonials from './sections/testimonials/Testimonials';

const LandingPage = () => {
  return (
    <main className='relative overflow-hidden'>
      <Hero />
      <MyServices />
      <Skills />
      <Portfolio />
      <Testimonials />
      <ContactUs />
    </main>
  );
};

export default LandingPage;
