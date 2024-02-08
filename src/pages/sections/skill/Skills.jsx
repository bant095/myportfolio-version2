import React from 'react';
import { FaHtml5, FaReact, FaFigma, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa6';
import './skill.css';
import './skill.js';

const Skills = () => {
  return (
    <section className='text-white'>
      <h1 className=' pt-10 mb-20 mt-20 text-center text-3xl font-bold'>
        MY SKILLS
      </h1>
      {/* flex gap-5 text-[80px] text-center justify-center items-center */}
      <div className='logos flex'>
        <div className='logos-slide'>
          <FaHtml5 />
          <FaCss3Alt />
          <FaReact />
          <FaGitAlt />
          <FaJs />
          <FaFigma />
        </div>
        <div className='logos-slide'>
          <FaHtml5 />
          <FaCss3Alt />
          <FaReact />
          <FaGitAlt />
          <FaJs />
          <FaFigma />
        </div>
      </div>
    </section>
  );
};

export default Skills;
