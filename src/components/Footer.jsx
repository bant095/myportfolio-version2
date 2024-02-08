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
  return (
    <footer className='p-5 lg:px-[100px] px-10 border-t-2 text-gray-400 border-gray-400 mt-40'>
      <div className='my-5'>
        <Logo />
      </div>
      <div className='flex flex-col lg:flex-row lg:justify-between justify-center gap-[50px] lg:gap-[100px] item-center'>
        <div className='w-80'>
          <h2 className='text-xl font-semibold'>About</h2>
          <p className='font-light'>
            I{`'`}m passionate Software Engineer with a strong affinity for
            problem-solving, team building, and developing innovative
            organizational products with my technical expertise.
          </p>
        </div>
        {/* Middle footer */}
        <div className='w-80 '>
          <h2 className='font-semibold text-white'>Newsletter</h2>
          <p className='font-light py-1'>Stay updated with my latest trends</p>
          <div className='flex'>
            <input
              className='text-myback w-80 px-2 border-none outline-none'
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
          <h3 className='font-semibold text-white'>Follow Me</h3>
          <p className='font-light'>Let us be social</p>
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
        <div className='relative'>
          <div className='z-10 absolute lg:right-2 right-0 shadow-lg shadow-blue-500/50 text-white cursor-pointer text-2xl flex justify-center m-13 p-6 text-center items-center bg-hoverColor w-2 h-2 rounded-3xl hover:bg-slate-400 mr-4 transition ease-in-out  font-semibold'>
            <Link to='/home'>
              <FaArrowUp />
            </Link>
          </div>
        </div>
        <p className='text-center'>Copyright © 2024 ABOLAJI ALFRED AYODEJI</p>
        <small className='font-light'>Developed By @FredSync🤩</small>
      </div>
    </footer>
  );
};

export default Footer;
