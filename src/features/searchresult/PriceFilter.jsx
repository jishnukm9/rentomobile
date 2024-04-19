import React from 'react'
import PriceFilterItem from './PriceFilterItem'

export default function PriceFilter() {
  return (
 
    <div className='border-t py-5'>
    <p className='font-bold text-1xl mb-4'>Price</p>
<PriceFilterItem text="₹0 - ₹5,000" val="0-5000" />
<PriceFilterItem text="₹5,000 - ₹10,000" val="5000-10000"  />
<PriceFilterItem text="₹10,000 - ₹15,000" val="10000-15000"  />
<PriceFilterItem text="₹15,000 - ₹20,000" val="15000-5000"  />
<PriceFilterItem text="₹20,000+" val="20000"  />

    </div>


  
  )
}
