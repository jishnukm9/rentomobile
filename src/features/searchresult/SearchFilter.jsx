import React from 'react'
import PriceFilter from './PriceFilter'

export default function SearchFilter() {
  return (
    
    <div className='my-2 p-3 rounded-md border'>

<div className="flex justify-between py-5">
  <p className='font-bold text-xl'>Filter</p>
  <a className='text-sm text-blue-600 hover:cursor-pointer'>Clear All Filters</a>
</div>
<PriceFilter />
<PriceFilter />
<PriceFilter />
<PriceFilter />

    </div>
   
  )
}
