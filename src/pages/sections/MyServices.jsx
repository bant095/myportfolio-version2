import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';

const MyServices = () => {
  return (
    <section className='h-fit pb-7 text-white'>
      <h1 className='m-10 pt-10 mb-20 mt-20 text-center text-3xl font-bold'>
        MY SERVICES
      </h1>
      <div className='flex flex-col lg:flex-row max-w-screen-lg lg:mx-28 mx-5 items-center text-center justify-center'>
        <div
          className='flex flex-col text-center w-3/5 items-center'
          data-aos='flip-left'
        >
          <div className='text-[40px] pt-5 text-hoverColor'>
            <FaLaptopCode />
          </div>
          <div className='pt-3 text-center'>
            <h3 className='text-1xl font-bold pb-5'>Graphics Design</h3>
            <p className='text-center'>
              I am a creative and detail-oriented graphic designer who is
              dedicated to bringing my clients' visions to life in aspect of
              Brand Identity.
            </p>
          </div>
        </div>
        <div
          className='flex flex-col text-center items-center border-purple-50 border-2  bg-mySecColor h-80 w-4/5 m-5 rounded-lg pb-6'
          data-aos='flip-up'
        >
          <div className='text-[40px] pt-5 text-hoverColor'>
            <FaLaptopCode />
          </div>
          <div className='pt-3 text-center'>
            <h3 className='text-1xl font-bold pb-5'>Development</h3>
            <p className='px-8 text-center'>
              I am passionate about creating innovative and intuitive solutions
              that solve complex problems. My commitment to deliveringyar
              high-quality work and ensures that my clients receive the best
              possible solutions.
            </p>
          </div>
        </div>
        <div
          className='flex flex-col text-center items-center w-3/5'
          data-aos='flip-right'
        >
          <div className='text-[40px] pt-5 text-hoverColor'>
            <FaLaptopCode />
          </div>
          <div className='pt-3 text-center'>
            <h3 className='text-1xl font-bold pb-5'>Web Design</h3>
            <p className='text-center'>
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
