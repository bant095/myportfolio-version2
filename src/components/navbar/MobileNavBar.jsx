import React from 'react';
import NavbarUI from './NavbarUI';
import NavBarButton from './NavBarButton';
import { IoMdClose } from 'react-icons/io';

const MobileNavBar = ({ mobileNav, setMobileNav }) => {
  return (
    <div>
      {mobileNav ? (
        <div className='bg-myback fixed h-full w-full top-0 left-0 z-10'></div>
      ) : (
        ''
      )}
      <div
        className={
          mobileNav
            ? 'fixed top-0 left-0 w-[100%] h-full z-10 duration-500'
            : 'fixed top-0 left-[-100%] h-full bg-myback duration-500 z-10'
        }
      >
        <button
          onClick={() => setMobileNav(!mobileNav)}
          className='bg-white text-myback p-2 rounded mt-3 font-bold text-xl ml-[340px]'
        >
          <IoMdClose />
        </button>
        <nav className='flex flex-col text-[20px] justify-center items-center pt-10 gap-10'>
          <NavbarUI />
          <NavBarButton />
        </nav>
      </div>
    </div>
  );
};

export default MobileNavBar;
