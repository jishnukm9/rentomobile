import React, { useState } from 'react';
import CarCategoryItem from './CarCategoryItem';

export default function CarCategory() {
 
  const [selectedCategory, setSelectedCategory] = useState(null);


  const categories = [
    "Medium Car", "Small Car", "Large Car", "SUV's", "People carrier", "Premium Car", "Estate"
  ];

  return (
    <div>
      <ul className='flex items-center text-xs lg:text-1xl'>
        {categories.map((category) => (
          <CarCategoryItem
            key={category}
            text={category}
            isSelected={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </ul>
    </div>
  );
}
