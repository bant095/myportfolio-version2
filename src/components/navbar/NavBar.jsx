import React, { useState } from 'react';
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import NavbarUI from './NavbarUI';
import NavBarButton from './NavBarButton';
import { MdOutlineMenu } from 'react-icons/md';
import MobileNavBar from './MobileNavBar';

const NavBar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <nav className='bg-myback text-white flex justify-between items-center shadow-lg w-[100%] md:block lg:fixed z-10 lg:px-10 px-2  h-20 border-b-2 border-b-slate-700'>
      <div className=' flex flex-row justify-between  align-center items-center py-3 px-10'>
        <Link to='/'>
          <Logo />
        </Link>

        <div className='hidden lg:flex'>
          <NavbarUI />
        </div>

        <div className='hidden lg:flex '>
          <NavBarButton />
        </div>
      </div>
      {/* handbugger */}
      <button onClick={() => setMobileNav(!mobileNav)} className='lg:hidden'>
        <div className='bg-white text-myback p-2 rounded mr-5 font-bold text-xl'>
          <MdOutlineMenu />
        </div>
        <MobileNavBar mobileNav={mobileNav} setMobileNav={setMobileNav} />
      </button>
    </nav>
  );
};

export default NavBar;
