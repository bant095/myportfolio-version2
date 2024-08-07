import React, { useState, useEffect } from 'react';
import './loading.css';
import LogoImage from '../../assets/FREDSync.png';

const Loading = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Adjust timeout as needed
  }, []);

  return (
    <div
      className={isVisible ? 'loading-container visible' : 'loading-container'}
    >
      <img src={LogoImage} alt='Fred Loading' className='ping-animation' />
    </div>
  );
};

export default Loading;
