import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id='about'>
      <div className='flex lg:flex-row flex-col items-center mt-40 justify-center m-20'>
        <div className='bg-mySecColor object-cover border-8 left-10 shadow-lg shadow-blue-500/30 w-2/3'>
          <img src='/images/ABolaji-img.png' alt='abolaji-img' />
        </div>
        <div className='pl-14 flex flex-col justify-center'>
          <h3 className='pt-5 text-3xl font-bold text-hoverColor'>ABOUT ME</h3>
          <h1 className='pb-6 font-light'>Frontend Engineer</h1>
          <p className='pb-6'>
            I{`'`}m passionate Software Engineer with a strong affinity for
            problem-solving, team building, and developing innovative
            organizational products with my technical expertise. I have a
            profound love for learning, and I am driven by making a positive
            impact while valuing constructive feedback.
          </p>
          <p>
            My journey in the tech industry began with BookMyEvent, where I
            contributed to the development of an Online Booking System aimed at
            simplifying reservation management for businesses. As part of a
            ten-member team, I played a key role in crafting the frontend of the
            project.
          </p>
          <p>
            Specializing in Frontend Design and Web development, I thrive in
            collaborative environments, effectively working with fellow team
            members through pull requests repository. My ability to bring ideas
            to life through captivating web designs has been honed through my
            extensive experience in Frontend Development.
          </p>
          <p>
            I{`'`}ve dedicated significant time to enriching online ecommerce
            platforms for VIVBAG, Sneakers Store, and FreshPicks Farms.
            Additionally, I had the rewarding opportunity to work on an
            investment platform at Ardilla Investment, empowering individuals to
            achieve their financial goals through smart savings and investments.
          </p>
          <p>
            As an avid seeker of knowledge and personal growth, I am
            continuously investing time in learning and developing solutions for
            real-life challenges. Beyond my professional pursuits, my personal
            interests span across various domains, including business and
            technology, farming, music, soccer/football, and research.
          </p>
          <p>
            Thank you for visiting my page, and I look forward to exploring
            exciting opportunities where I can apply my skills and passions to
            make a meaningful impact to your project.
          </p>
          <div className='text-1xl left-10 shadow-lg shadow-blue-500/30 animate-pulse w-36 text-center bg-hoverColor py-3 px-4 cursor-pointer rounded-md hover:bg-slate-400 mr-4 transition duration-300 ease-in-out hover:scale-110 font-semibold'>
            <Link href='https://api.whatsapp.com/send/?phone=2348104244450'>
              Reach Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
