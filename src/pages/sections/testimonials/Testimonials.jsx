import React, { useEffect, useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import './testimony.css';

const Testimonials = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  //set Interval function
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className='text-center text-white lg:px-[100px] px-10 flex flex-col lg:gap-[40px] gap-[30px]'>
      <h2 className='lg:mt-44 mt-20 text-center text-3xl font-bold'>
        TESTIMONALS
      </h2>
      {/* review body */}
      <div className='test-center'>
        {people.map((person, personIndex) => {
          const { id, name, title, quote } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <aside className={position} key={id}>
              {/* <FaQuoteRight className='icon' /> */}
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <stars />
            </aside>
          );
        })}

        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          {' '}
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
