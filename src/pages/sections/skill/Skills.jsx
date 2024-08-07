import React from 'react';
import Marquee from 'react-fast-marquee';
import {
  FaHtml5,
  FaReact,
  FaFigma,
  FaCss3Alt,
  FaGitAlt,
  FaBootstrap,
  FaNodeJs,
} from 'react-icons/fa';
import { FaJs } from 'react-icons/fa6';
import { SiNextdotjs, SiRedux, SiTailwindcss } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
import './skill.css';
// import './skill.js';

const Skills = () => {
  return (
    <section className='text-white'>
      <h1 className=' pt-10 mb-10 mt-10 text-center text-3xl font-bold'>
        MY SKILLS
      </h1>
      {/* flex gap-5 text-[80px] text-center justify-center items-center */}
      <Marquee className='logos flex'>
        <div className='logos-slide'>
          <FaHtml5 />
          <FaCss3Alt />
          <FaReact />
          <SiNextdotjs />
          <SiRedux />
          <FaGitAlt />
          <FaJs />
          <FaFigma />
          <SiTailwindcss />
          <FaBootstrap />
          <FaNodeJs />
          <DiMongodb />
        </div>
        <div className='logos-slide'>
          <FaHtml5 />
          <FaCss3Alt />
          <FaReact />
          <SiNextdotjs />
          <SiRedux />
          <FaGitAlt />
          <FaJs />
          <FaFigma />
          <SiTailwindcss />
          <FaBootstrap />
          <FaNodeJs />
          <DiMongodb />
        </div>
      </Marquee>

      <div className='soft-skill'>
        <h3>My Soft Skills:</h3>
        <Marquee className='soft-skill-text'>
          <p>Effective communication </p>
          <p>Problem-solving </p>
          <p>Teamwork and collaboration </p>
          <p>Leadership </p>
          <p>Empathy </p>
          <p>Critical thinking</p>
          <p>Active listening</p>
          <p>Creativity</p>
          <p>Attention to detail</p>
          <p>Adaptability</p>
          <p>Time management</p>
          <p>Presentation skills</p>
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
