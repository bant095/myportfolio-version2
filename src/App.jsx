import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Blog from './pages/blog/Blog';
import MyServices from './pages/sections/MyServices';
import Portfolio from './pages/portfolio/Portfolio';
import NavBar from './components/navbar/NavBar';
import Footer from './components/Footer';
import Loading from './components/loading/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoading = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        console.error('Error during loading:', error);
      } finally {
        setIsLoading(false);
      }
    };

    handleLoading();
  }, []);

  const handleSpinner = () => {
    const spinner = document.getElementById('spinner');
    if (spinner) {
      spinner.style.display = isLoading ? 'block' : 'none';
    }
  };

  useEffect(() => {
    handleSpinner();
  }, [isLoading]);

  return (
    <BrowserRouter>
      {isLoading ? (
        <div id='loading-container'>
          {/* loading UI  */}
          <Loading />
        </div>
      ) : (
        <div>
          <NavBar />
          <Routes>
            <Route path='/' index element={<LandingPage />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/services' element={<MyServices />} />
            <Route path='/projects' element={<Portfolio />} />
          </Routes>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
