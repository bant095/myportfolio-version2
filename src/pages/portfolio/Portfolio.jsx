import React, { useState } from 'react';
import items from './data';
import Categories from './Categories';
import Project from './Project';
import './index.css';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log(allCategories);

const Portfolio = () => {
  const [projectItems, setProjectItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  // fiter items
  const filterItems = (category) => {
    if (category === 'all') {
      setProjectItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setProjectItems(newItems);
  };

  return (
    <main>
      <h1 className='lg:mt-40 mt-10 text-center text-3xl font-bold text-white'>
        PROJECTS
      </h1>
      <section>
        <Categories categories={categories} filterItems={filterItems} />
        <Project items={projectItems} />
      </section>
    </main>
  );
};

export default Portfolio;
