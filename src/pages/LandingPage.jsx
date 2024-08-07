import React, { useCallback } from 'react';
import Portfolio from './portfolio/Portfolio';
import ContactUs from './sections/ContactUs';
import Hero from './sections/Hero';
import MyServices from './sections/MyServices';
import Skills from './sections/skill/Skills';
import Testimonials from './sections/testimonials/Testimonials';
import './landingpage.css';
import ParticlesBackground from '../components/ParticlesBackground';

const LandingPage = () => {
  return (
    <main className='relative overflow-hidden'>
      <ParticlesBackground />
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
