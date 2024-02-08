import React from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';

const NavbarUI = () => {
  return (
    <ul className='flex flex-col lg:flex-row items-center gap-8 md:text-sm lg:text-base'>
      <li>
        <Link
          to='/home'
          className=' hover:text-hoverColor transition duration-300 ease-in-out hover:scale-110'
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          to='/services'
          className=' hover:text-hoverColor transition duration-300 ease-in-out hover:scale-110'
        >
          My Services
        </Link>
      </li>

      <li>
        <Link
          to='/projects'
          className=' hover:text-hoverColor transition duration-300 ease-in-out hover:scale-110'
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
          to='/contact'
          className=' hover:text-hoverColor transition duration-300 ease-in-out hover:scale-110'
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavbarUI;
