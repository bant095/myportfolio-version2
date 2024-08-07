import React from 'react';
import Logo from './Logo';
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaArrowUp,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className='p-5 lg:px-[80px] pl-8 overflow-hidden border-t-2 text-gray-400 border-gray-400 mt-20'>
      <div className='my-5'>
        <Logo />
      </div>
      <div className='flex flex-col lg:flex-row lg:justify-between justify-center gap-[50px] lg:gap-[100px] item-center'>
        <div className='w-80'>
          <h2 className='text-xl font-semibold text-[20px] '>About</h2>
          <p className='font-light text-[16px]'>
            I{`'`}m passionate Software Engineer with a strong affinity for
            problem-solving, team building, and developing innovative
            organizational products with my technical expertise.
          </p>
        </div>
        {/* Middle footer */}
        <div className='w-80 '>
          <h2 className='font-semibold  text-[20px]'>Newsletter</h2>
          <p className='font-light py-1 text-[16px]'>
            Stay updated with my latest trends
          </p>
          <div className='flex'>
            <input
              className='text-myback lg:w-80 w-52 px-2 border-none outline-none'
              type='email'
              id='email'
              placeholder='Enter Email Address'
            />
            <button className='p-3 cursor-pointer text-white hover:bg-gray-500 hover:text-white bg-hoverColor'>
              <FaArrowRight />
            </button>
          </div>
        </div>
        {/* Left footer */}
        <div className='w-80'>
          <h3 className='font-semibold  text-[20px]'>Follow Me</h3>
          <p className='font-light text-[16px]'>Let us be social</p>
          {/* socials */}
          <div className='flex flex-row pt-2 gap-4 text-xl'>
            <Link
              to='https://www.linkedin.com/in/abolaji-alfred-ayodeji/'
              target='_blank'
              className='text-[20px] hover:text-blue-200'
            >
              <FaLinkedin />
            </Link>
            <Link
              to='https://twitter.com/Abolaji_Alfred'
              target='_blank'
              className='text-[20px] hover:text-blue-200'
            >
              <FaTwitter />
            </Link>
            <Link
              to='https://github.com/bant095'
              target='_blank '
              className='text-[20px] hover:text-blue-200'
            >
              <FaGithub />
            </Link>
            <Link
              to='https://api.whatsapp.com/send/?phone=2348104244450'
              target='_blank '
              className='text-[20px] hover:text-blue-200'
            >
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>
      {/* down center */}
      <div className='text-center mt-16  '>
        <div className='flex relative'>
          <button
            className='z-10 bg-hoverColor rounded-3xl p-3 transition ease-in-out hover:bg-slate-400 absolute lg:right-2 right-0 shadow-lg shadow-blue-500/50 text-white cursor-pointer text-2xl  '
            onClick={handleScrollToTop}
          >
            <FaArrowUp />
          </button>
        </div>

        <p className='text-center'>
          &copy; {new Date().getFullYear()} ABOLAJI ALFRED A.
        </p>
        <small className='font-light'>Developed By @FredSync🤩</small>
      </div>
    </footer>
  );
};

export default Footer;
