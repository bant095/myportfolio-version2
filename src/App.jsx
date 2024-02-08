import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Blog from './pages/blog/Blog';
import MyServices from './pages/sections/MyServices';
import Portfolio from './pages/portfolio/Portfolio';
import { Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/services' Component={MyServices} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
