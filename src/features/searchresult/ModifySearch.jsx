import React, { useContext, useState } from 'react'
import ButtonSmall from '../../ui/ButtonSmall'
import { SearchContext } from '../../context/SearchContext';
import SearchBox from '../search/SearchBox';
import { HiXMark } from "react-icons/hi2";
import { getLocations } from '../../data/search/locations';

export default function ModifySearch() {


  const {pickUpLocationFull,
    dropOffLocationFull,startDate,startTime,endDate,endTime,selectedPickUp,selectedDrop} = useContext(SearchContext)

    
    let startDateFinal =  startDate.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
    let endDateFinal =  endDate.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
   


    const [edit,setEdit] = useState(false)

const locations= getLocations()

  return (
    <div className='max-w-[1125px] border-2 border-yellow-500 rounded-md p-3  my-0 mx-auto'>
    
    
    {edit ?
    
    <div>
      <div className='flex justify-between items-center mb-5'>
    <p >Edit Search</p>
    <HiXMark className='hover:cursor-pointer' onClick={()=>setEdit((val)=>(!val))} />
    </div>
    <SearchBox/> 
    </div>
    
    : 
    <div className=' flex justify-between items-center'>
    <div className='flex justify-between items-center gap-2'>
    <div><p className='font-bold mb-1 text-globaltext'>
      {/* {pickUpLocationFull} */}
      {locations.find((item)=> item.code === selectedPickUp)?.name }</p>
    <p className='text-xs'>{startDateFinal} {startTime}</p>
    </div>
    <div> <p>&gt;</p> </div>
    <div><p className='font-bold mb-1 text-globaltext'>
      {/* {dropOffLocationFull} */}
      {locations.find((item)=> item.code === selectedDrop)?.name }
      </p>
    <p className='text-xs'>{endDateFinal} {endTime}</p></div>
    </div>

<div onClick={()=>setEdit((val)=>(!val))}>
    <ButtonSmall  text="Edit" />
    </div>
    </div>
    }
    
    
  </div>
  )
}
