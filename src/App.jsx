import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Blog from './pages/blog/Blog';
import MyServices from './pages/sections/MyServices';
import Portfolio from './pages/portfolio/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <LandingPage />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/services' element={<MyServices />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
