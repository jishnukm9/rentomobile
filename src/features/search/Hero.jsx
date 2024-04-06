import React from 'react'
import SearchBox from './SearchBox'

export default function Hero() {
  return (
    <div className='flex items-center justify-center'>
    <div className='transform -translate-y-20 max-w-[1200px] px-10 mx-auto my-0 flex flex-col gap-8'>
        <h1 className='text-5xl text-white font-bold'>Car Rental – Search, Compare & Save</h1>
        <h3 className='text-lg text-white'> Free cancellations on most bookings
60,000+ locations
Customer support in 40+ languages
</h3>
        <SearchBox/>
    </div>
    </div>
   
  )
}
