import React from 'react'
import SpecsFilterItem from './SpecsFilterItem'

export default function SpecsFilter() {
  return (
 
    <div className='border-t py-5'>
    <p className='font-bold text-1xl mb-4'>Car Specs</p>
<SpecsFilterItem text="Air Conditioning" val={true} />
<SpecsFilterItem text="4+ Doors" val={true} />

    </div>


  
  )
}
