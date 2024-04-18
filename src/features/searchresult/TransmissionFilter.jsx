import React from 'react'
import TransmissionFilterItem from './TransmissionFilterItem'

export default function SpecsFilter() {
  return (
 
    <div className='border-t py-5'>
    <p className='font-bold text-1xl mb-4'>Transmission Type</p>
<TransmissionFilterItem text="Automatic" val="Automatic"  />
<TransmissionFilterItem text="Manual" val="Manual" />

    </div>


  
  )
}
