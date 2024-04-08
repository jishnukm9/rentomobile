import React, { useContext } from 'react'
import { FaCarSide } from 'react-icons/fa6'
import { SearchContext } from '../../context/SearchContext'

export default function CarCategoryItem({text}) {


  const {setCategoryFilter} = useContext(SearchContext)

  return (
    <li className='flex flex-col items-center hover:bg-gray-200 hover:cursor-pointer p-3 text-globaltext' onClick={(e)=> {setCategoryFilter(text)}}>
    <FaCarSide className='text-2xl' />
        <p>{text}</p>
    </li>
  )
}
