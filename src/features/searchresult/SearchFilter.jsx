import React, { useContext } from 'react'
import { FilterContext } from '../../context/filterContext'
import PriceFilter from './PriceFilter'
import SpecsFilter from './SpecsFilter'
import TransmissionFilter from './TransmissionFilter'

export default function SearchFilter({clearCategory}) {

  const {setClearFilter,setCategoryFilter,setPriceFilter,setAcFilter,setTransmissionFilter,setDoorsFilter}= useContext(FilterContext)

function handleClearFilter(){
  // setClearFilter(true)
  setCategoryFilter(null)
  setPriceFilter([])
  // setAcFilter(null)
  setTransmissionFilter([])
  setDoorsFilter([])
  clearCategory(null)
}


  return (
    
    <div className='my-2 p-3 rounded-md border'>

<div className="flex justify-between py-5">
  <p className='font-bold text-xl'>Filter</p>
  <a className='text-sm text-blue-600 p-0 hover:cursor-pointer hover:underline' onClick={handleClearFilter}>Clear All Filters</a>
</div>
<PriceFilter />
<SpecsFilter/>
<TransmissionFilter />


    </div>
   
  )
}
