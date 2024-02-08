import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Blog from './pages/blog/Blog';
import MyServices from './pages/sections/MyServices';
import Portfolio from './pages/portfolio/Portfolio';
import { HashLink as Link } from 'react-router-hash-link';

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById('spinner');
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = 'none';
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Link to='#home'></Link>
        <Link to='#services' smooth></Link>
        <Link path='#projects' smooth></Link>
      </BrowserRouter>
    )
  );
}

export default App;
