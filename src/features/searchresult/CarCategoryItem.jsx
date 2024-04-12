import React, { useContext, useState } from 'react';
import { FaCarSide } from 'react-icons/fa'; // Adjust according to your icons package
import { FilterContext } from '../../context/filterContext';

export default function CarCategoryItem({ text,isSelected,onClick }) {
  const { setCategoryFilter } = useContext(FilterContext);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setCategoryFilter(text);
    setIsClicked(true);
    onClick()
  };

  return (
    <li
      className={`flex flex-col items-center hover:bg-gray-200 hover:cursor-pointer p-3  ${isSelected ? 'text-blue  border-b-2 border-blue-500' : 'text-globaltext'}`}
      onClick={handleClick}
      role="button" 
      
    >
      <FaCarSide className='text-2xl' />
      <p>{text}</p>
    </li>
  );
}
