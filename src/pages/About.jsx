import { Link, Route } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar';
import { Button } from '@mui/material';
import ButtonMain from '../components/ButtonMain';
import Footer from '../components/Footer';

const About = () => {
  return (
    <section className='bg-myback'>
      <NavBar />
      <div className='flex lg:flex-row flex-col items-center pt-40 justify-center px-20'>
        <div className='bg-mySecColor object-cover border-8 left-10 shadow-lg shadow-blue-500/30 w-2/3'>
          <img
            src='https://ik.imagekit.io/gru3qfrss/ABolaji-img.png'
            alt='abolaji-img'
          />
        </div>
        <div className='pl-14 flex flex-col justify-center'>
          <h3 className='pt-5 text-3xl font-bold text-hoverColor'>ABOUT ME</h3>
          <h1 className='pb-6 font-light text-white pt-2'>Frontend Engineer</h1>
          <p>
            I{`'`}m passionate Software Engineer with a strong affinity for
            problem-solving, team building, and developing innovative
            organizational products with my technical expertise. I have a
            profound love for learning, and I am driven by making a positive
            impact while valuing constructive feedback.
          </p>
          <br />
          <p>
            My journey in the tech industry began with BookMyEvent, where I
            contributed to the development of an Online Booking System aimed at
            simplifying reservation management for businesses. As part of a
            ten-member team, I played a key role in crafting the frontend of the
            project.
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
          <p>
            I{`'`}ve dedicated significant time to enriching online ecommerce
            platforms for VIVBAG, Sneakers Store, and FreshPicks Farms.
            Additionally, I had the rewarding opportunity to work on an
            investment platform at Ardilla Investment, empowering individuals to
            achieve their financial goals through smart savings and investments.
          </p>
          <br />
          <p>
            As an avid seeker of knowledge and personal growth, I am
            continuously investing time in learning and developing solutions for
            real-life challenges. Beyond my professional pursuits, my personal
            interests span across various domains, including business and
            technology, farming, music, soccer/football, and research.
          </p>
          <br />
          <p>
            Thank you for visiting my page, and I look forward to exploring
            exciting opportunities where I can apply my skills and passions to
            make a meaningful impact to your project.
          </p>

          <Link
            to='https://api.whatsapp.com/send/?phone=2348104244450'
            className='w-40 my-4'
            target='_blank'
          >
            <ButtonMain text='Reach Me'></ButtonMain>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
