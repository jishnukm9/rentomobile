import React from 'react'
import { FaCarSide } from 'react-icons/fa6'

export default function CarCategoryItem({text}) {
  return (
    <li className='flex flex-col items-center hover:bg-gray-200 hover:cursor-pointer p-3 text-globaltext'>
    <FaCarSide className='text-2xl' />
        <p>{text}</p>
    </li>
  )
}
