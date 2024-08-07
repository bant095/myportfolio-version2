import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const NavbarUI = () => {
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <ul className='flex flex-col lg:flex-row items-center gap-8 md:text-sm lg:text-base'>
      <li>
        <Link
          to='/'
          onClick={handleHomeClick}
          className='hover:text-hoverColor transition duration-300 ease-in-out hover:scale-110'
          smooth
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          to='#services'
          className=' hover:text-hoverColor transition duration-300 ease-in-out hover:scale-110'
          smooth
        >
          My Services
        </Link>
      </li>

      <li>
        <Link
          to='#projects'
          className=' hover:text-hoverColor transition duration-300 ease-in-out hover:scale-110'
          smooth
        >
          Projects
        </Link>
      </li>

      <li>
        <Link
          to='/about'
          className=' hover:text-hoverColor transition duration-300 ease-in-out hover:scale-110'
        >
          About
        </Link>
      </li>

      <li>
        <Link
          to='/blog'
          className=' hover:text-hoverColor transition duration-300 ease-in-out hover:scale-110'
        >
          Blog
        </Link>
      </li>

      <li>
        <Link
          to='#contact'
          className=' hover:text-hoverColor transition duration-300 ease-in-out hover:scale-110'
          smooth
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavbarUI;
