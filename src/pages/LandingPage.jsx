import Footer from '../components/Footer';
import NavBar from '../components/navbar/NavBar';
import Portfolio from './portfolio/Portfolio';
import Hero from './sections/Hero';
import MyServices from './sections/MyServices';
import Skills from './sections/Skills';
import Testimonials from './sections/testimonials/Testimonials';

const LandingPage = () => {
  return (
    <main className='bg-myback font-myFont w-full'>
      <NavBar />
      <Hero />
      <MyServices />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default LandingPage;
