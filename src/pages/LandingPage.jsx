import Footer from '../components/Footer';
import NavBar from '../components/navbar/NavBar';
import Hero from './sections/Hero';
const LandingPage = () => {
  return (
    <main className='bg-myback'>
      <NavBar />
      <Hero />
      <Footer />
    </main>
  );
};

export default LandingPage;
