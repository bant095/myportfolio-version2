import React, { useState } from 'react';
import './index.css';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';

const Project = ({ items }) => {
  const [readMoreStates, setReadMoreStates] = useState({}); // State to track readMore status for each project

  const toggleReadMore = (id) => {
    setReadMoreStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, img, desc, gitIcon, liveIcon } = menuItem;
        const isReadMore = readMoreStates[id];

        return (
          <article className='project-item' key={id}>
            <img src={img} alt='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <div className='flex items-center justify-center gap-4'>
                  <Link to={gitIcon} target='_blank' className='icon-btn'>
                    <FaGithub />
                  </Link>
                  <Link to={liveIcon} target='_blank' className='icon-btn'>
                    <HiArrowTopRightOnSquare />
                  </Link>
                </div>
              </header>
              <p className='item-text'>
                {isReadMore ? desc : `${desc.substring(0, 100)}...`}
                <button
                  className='text-hoverColor'
                  onClick={() => toggleReadMore(id)}
                >
                  {isReadMore ? 'show less' : 'read more'}
                </button>
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Project;
