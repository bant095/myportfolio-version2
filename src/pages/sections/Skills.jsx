import React from 'react';
import { FaHtml5, FaReact, FaFigma, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa6';

const Skills = () => {
  return (
    <section className='text-white'>
      <h1 className=' pt-10 mb-20 mt-20 text-center text-3xl font-bold'>
        MY SKILLS
      </h1>
      <div className='flex gap-5 text-[80px] text-center justify-center items-center'>
        <FaHtml5 />
        <FaCss3Alt />
        <FaReact />
        <FaGitAlt />
        <FaJs />
        <FaFigma />
      </div>
    </section>
  );
};

export default Skills;
