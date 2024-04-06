import React from 'react'
import { FaCarSide } from "react-icons/fa6";
import CarCategoryItem from './CarCategoryItem';


export default function CarCategory() {
  return (
    <div>
        

        <ul className='flex items-center '>
            <CarCategoryItem text="Medium car" />
            <CarCategoryItem text="Small Car" />
            <CarCategoryItem text="Large Car" />
            <CarCategoryItem text="SUV'S" />
            <CarCategoryItem text="People carrier" />
            <CarCategoryItem text="Premium car" />
            <CarCategoryItem text="Estate" />
          
        </ul>
    </div>
  )
}
