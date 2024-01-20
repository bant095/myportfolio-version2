import { Button } from '@mui/material';
import React from 'react';

const Hero = () => {
  return (
    <section className='lg:px-20 px-2 lg:mt-[200px] mt-[100px] gap-7 justify-center flex flex-col-reverse lg:flex-row lg:justify-between items-center'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-2xl'>Hello! I'm</h3>
          <h1 className='text-4xl font-extrabold'>ABOLAJI ALFRED</h1>
          <p className='text-3xl leading-8'>
            I am Frontend Engineer and Designer
          </p>
        </div>

        <Button text='Reach Me'></Button>
      </div>
      {/*hero-section-right*/}
      <div className='flex gap-7 shadow-lg justify-center items-center'>
        <div className='border-8 shadow-lg shadow-blue-500/30'>
          <img
            src='https://ik.imagekit.io/gru3qfrss/ABolaji-img.png?'
            alt='abolaji-image'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
