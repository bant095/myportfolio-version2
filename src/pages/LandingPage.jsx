import Footer from '../components/Footer';
import NavBar from '../components/navbar/NavBar';
import Portfolio from './portfolio/Portfolio';
import ContactUs from './sections/ContactUs';
import Hero from './sections/Hero';
import MyServices from './sections/MyServices';
import Skills from './sections/skill/Skills';
import Testimonials from './sections/testimonials/Testimonials';

const LandingPage = () => {
  return (
    <main className='bg-myback font-myFont w-full' id='home'>
      <NavBar />
      <Hero />
      <MyServices />
      <Skills />
      <Portfolio />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default LandingPage;
