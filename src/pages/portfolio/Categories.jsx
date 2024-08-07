import React from 'react';
import './index.css';

const Categories = ({ categories, filterItems }) => {
  const handleCategoryChange = (event) => {
    filterItems(event.target.value);
  };

  return (
    <div className='category-select'>
      <select
        className='category-dropdown  row-start-1 lg:w-[25%]  font-medium col-start-1 text-white dark:bg-hoverColor'
        onChange={handleCategoryChange}
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
