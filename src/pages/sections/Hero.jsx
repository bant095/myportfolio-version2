import React, { useEffect } from 'react';
import Button from '../../components/ButtonMain';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  // AOS
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <section className='text-white lg:px-20 px-2  font-myFont gap-7 justify-center flex flex-col-reverse lg:flex-row lg:justify-between items-center'>
      <div className='flex flex-col lg:mt-[150px] mt-[100px] gap-8 '>
        <div className='flex flex-col gap-2' data-aos='fade-up-right'>
          <h3 className='text-2xl'>Hello! I'm</h3>
          <h1 className='text-4xl font-extrabold'>ABOLAJI ALFRED</h1>
          <p className='text-3xl leading-8'>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "I'm a Frontend Engineer", // initially rendered starting point
                1000,
                "I'm a Product Designer",
                500,
              ]}
              speed={50}
              style={{ fontSize: '1em' }}
              repeat={Infinity}
            />
          </p>
        </div>
        {/* button */}
        {/* <div>
          <Button text='Reach Me'></Button>
        </div> */}
        {/* socials */}
        <div className='flex gap-5'>
          <Link
            to='https://www.linkedin.com/in/abolaji-alfred-ayodeji/'
            target='_blank'
            className='text-[40px] hover:text-hoverColor'
          >
            <FaLinkedin />
          </Link>
          <Link
            to='https://twitter.com/Abolaji_Alfred'
            target='_blank'
            className='text-[40px] hover:text-hoverColor'
          >
            <FaTwitter />
          </Link>
          <Link
            to='https://github.com/bant095'
            target='_blank '
            className='text-[40px] hover:text-hoverColor'
          >
            <FaGithub />
          </Link>
          <Link
            to='https://api.whatsapp.com/send/?phone=2348104244450'
            target='_blank '
            className='text-[40px] hover:text-hoverColor'
          >
            <FaWhatsapp />
          </Link>
        </div>
      </div>

      {/*hero-section-right*/}

      <div
        className='border-8 w-80 mt-[100px] shadow-lg shadow-blue-500/30'
        data-aos='fade-down'
      >
        <img
          src='https://ik.imagekit.io/gru3qfrss/ABolaji-img.png?'
          alt='abolaji-image'
        />
      </div>
    </section>
  );
};

export default Hero;
