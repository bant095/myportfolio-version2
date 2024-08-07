import { Link, Route } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar';
import { Button } from '@mui/material';
import ButtonMain from '../components/ButtonMain';
import Footer from '../components/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {
  // AOS
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <section className='bg-myback'>
      <div className='flex lg:flex-row font-myFont flex-col items-start lg:pt-40 pt-10 justify-center lg:px-20 px-5'>
        <div
          data-aos='fade-down'
          className='bg-mySecColor object-cover border-8  shadow-md shadow-blue-500/30  w-2/3'
        >
          <img
            src='https://ik.imagekit.io/gru3qfrss/ABolaji-img.png'
            alt='abolaji-img'
          />
        </div>
        <div className='lg:pl-14 flex flex-col justify-center'>
          <h3 className='pt-5 text-3xl font-bold text-hoverColor'>ABOUT ME</h3>
          <h1 className='pb-6 font-light text-white pt-2'>Frontend Engineer</h1>
          <p data-aos='fade-up-right'>
            I{`'`}m passionate Software Engineer with a strong affinity for
            problem-solving, team building, and developing innovative
            organizational products with my technical expertise. I have a
            profound love for learning, and I am driven by making a positive
            impact while valuing constructive feedback.
          </p>
          <br />
          <p data-aos='fade-up-right'>
            I started my venture in the tech field with PadiPay, a peer-to-peer
            lending platform facilitating connections between borrowers and
            lenders. My involvement in the project included developing
            distinctive features such as calculation functionalities.
            Additionally, I played a role in designing over half of the project,
            crafting elements like the product landing page and dashboard.
            Utilizing ReactJs and Node Js, I also integrated backend endpoints
            to enhance user verifications within the platform.
          </p>
          <br />
          <p>
            Specializing in Frontend Design and Web development, I thrive in
            collaborative environments, effectively working with fellow team
            members through pull requests repository. My ability to bring ideas
            to life through captivating web designs has been honed through my
            extensive experience in Frontend Development.
          </p>
          <br />
          <p data-aos='fade-up-right'>
            I{`'`}ve dedicated significant time to enriching online ecommerce
            platforms for VIVBAG, Sneakers Store, and FreshPicks Farms.
            Additionally, I had the rewarding opportunity to work on an
            investment platform at Ardilla Investment, empowering individuals to
            achieve their financial goals through smart savings and investments.
          </p>
          <br />
          <p data-aos='fade-up-right'>
            As an avid seeker of knowledge and personal growth, I am
            continuously investing time in learning and developing solutions for
            real-life challenges. Beyond my professional pursuits, my personal
            interests span across various domains, including business and
            technology, farming, music, soccer/football, and research.
          </p>
          <br />
          <p data-aos='fade-up-right'>
            Thank you for visiting my page, and I look forward to exploring
            exciting opportunities where I can apply my skills and passions to
            make a meaningful impact to your project.
          </p>

          <Link
            to='https://api.whatsapp.com/send/?phone=2348104244450'
            className='w-40 my-4'
            target='_blank'
            data-aos='fade-up-right'
          >
            <ButtonMain text='Reach Me'></ButtonMain>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
