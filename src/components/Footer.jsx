import React from 'react';

const Footer = () => {
  return (
    <footer className='p-5 lg:px-[100px] px-10 border-t-2 text-gray-400 border-gray-400 mt-40'>
      <h2 className='pb-3 font-semibold text-white'>
        {/* <i className='fa-solid fa-clone' /> Fred */}
        <span className='font-medium'>Code</span>
      </h2>
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
        <div className='w-80'>
          <h2 className='font-semibold text-white'>Newsletter</h2>
          <p className='font-light'>Stay updated with my latest trends</p>
          <div className='flex'>
            <input
              className='text-myback w-80'
              type='email'
              id='email'
              placeholder='Enter Email Address'
            />
            <span>
              <i className='fa-solid fa-arrow-right p-3 cursor-pointer text-white hover:bg-gray-500 hover:text-white bg-hoverColor' />
            </span>
          </div>
        </div>
        {/* Left footer */}
        <div className='w-80'>
          <h3 className='font-semibold text-white'>Follow Me</h3>
          <p className='font-light'>Let us be social</p>
          {/* socials */}
          <div className='flex flex-row gap-4 text-xl'>
            <div className='hover:text-hoverColor transition duration-300 ease-in-out hover:scale-110'>
              <a href='https://github.com/bant095' target='_blank'>
                <i className='fa-brands fa-github' />
              </a>
            </div>
            <div className='hover:text-hoverColor transition duration-300 ease-in-out hover:scale-110'>
              <a href='abolajiayodeji2@gmail.com' target='_blank'>
                <i className='fa-solid fa-envelope' />
              </a>
            </div>
            <div className='hover:text-hoverColor transition duration-300 ease-in-out hover:scale-110'>
              <a href='https://twitter.com/Abolaji_Alfred' target='_blank'>
                <i className='fa-brands fa-twitter' />
              </a>
            </div>
            <div className='hover:text-hoverColor transition duration-300 ease-in-out hover:scale-110'>
              <a
                href='https://www.linkedin.com/in/abolaji-alfred-ayodeji/'
                target='_blank'
              >
                <i className='fa-brands fa-linkedin-in' />
              </a>
            </div>
            <div className='hover:text-hoverColor transition duration-300 ease-in-out hover:scale-110'>
              <a href='https://hashnode.com/@Alfred08' target='_blank'>
                <i className='fa-brands fa-hashnode' />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* down center */}
      <div className='text-center mt-16'>
        <div className='z-10 absolute left-10 shadow-lg shadow-blue-500/50 text-white cursor-pointer text-2xl flex justify-center m-13 p-6 text-center items-center bg-hoverColor w-2 h-2 rounded-3xl hover:bg-slate-400 mr-4 transition ease-in-out animate-bounce font-semibold'>
          <a href='#home'>
            <i className='fa-solid fa-arrow-up sticky' />
          </a>
        </div>
        <p>Copyright © 2023 ABOLAJI ALFRED AYODEJI</p>
        <small className='font-light'>Developed By @FredCode🤩</small>
      </div>
    </footer>
  );
};

export default Footer;
