import React, { useEffect } from 'react';
import { FaLaptopCode, FaPenNib } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa6';

import Aos from 'aos';
import 'aos/dist/aos.css';

const MyServices = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <section className='h-fit pb-7  text-white' id='services'>
      <h1 className='m-10 pt-10 lg:mb-20 mt-20 text-center text-3xl font-bold'>
        MY SERVICES
      </h1>
      <div className='flex flex-col b lg:flex-row max-w-screen-lg lg:mx-40  items-center text-center justify-center'>
        <div
          className='flex flex-col text-center w-3/5 mb-5 items-center'
          data-aos='fade-up'
        >
          <div className='text-[40px] pt-5 text-hoverColor'>
            <FaPenNib />
          </div>
          <div className='pt-3 text-center'>
            <h3 className='text-lg font-semibold pb-5'>Graphics Design</h3>
            <p className='text-center text-[14px]'>
              I am a creative and detail-oriented graphic designer who is
              dedicated to bringing my clients' visions to life in aspect of
              Brand Identity.
            </p>
          </div>
        </div>
        <div
          className='flex flex-col text-center items-center border-purple-50 border-2  bg-mySecColor h-80 w-4/5 m-5 rounded-lg pb-6'
          data-aos='fade-up'
        >
          <div className='text-[40px] pt-5 text-hoverColor'>
            <FaCode />
          </div>
          <div className='pt-3 text-center'>
            <h3 className='text-lg font-semibold pb-5'>Development</h3>
            <p className='px-2 text-[14px] text-center'>
              I am passionate about creating innovative and intuitive solutions
              that solve complex problems. My commitment to deliveringyar
              high-quality work and ensures that my clients receive the best
              possible solutions.
            </p>
          </div>
        </div>
        <div
          className='flex flex-col text-center items-center w-3/5'
          data-aos='fade-up'
        >
          <div className='text-[40px] pt-5 text-hoverColor'>
            <FaLaptopCode />
          </div>
          <div className='pt-3 text-center'>
            <h3 className='text-lg font-semibold pb-5'>Web Design</h3>
            <p className='text-center text-[14px]'>
              Crafting captivating Web Designs that elevate brands and delight
              users
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyServices;
