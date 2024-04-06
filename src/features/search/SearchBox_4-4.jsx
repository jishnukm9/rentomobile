import React, { useContext, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from '../../ui/TimePicker';

import SearchListItem from '../../ui/SearchListItem';
import { toast } from "react-hot-toast";

import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';


export default function SearchBox() {

const navigate = useNavigate()

const {locationresult,selectedPickUp,setPickUpEnter,getLocationDetails,
locationresultDrop,selectedDrop,getLocationDetailsDrop,
startDate,setStartDate,startTime,changeStartTime,
endDate,endTime,changeEndTime,pickUpEnter,
handleSelectedPickUp,dropOffEnter,handleSelectedDrop,setDropOffEnter,
setPickUpLocationFull,setEndDate,
setDropOffLocationFull} = useContext(SearchContext)














function validateForm(){
  if(!startDate | !endDate | !startTime | !endTime | !selectedPickUp | !selectedDrop){
toast.error("Invalid Search Informations")
  }else{
    navigate('/bookingsearchresult')
  }
 }











  return (
    <div className='relative'>
      
      <div className="border-8 border-yellow-400 rounded-md grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[3fr,3fr,1fr,1fr,1fr]">
  <div className=" border-r-8 border-yellow-400 bg-slate-50">
  <input 
  type="text" 
  className='rounded-md p-5 w-full h-full rounded-md focus:outline-none' 
  placeholder='Pick-Up Location' 
  value={locationresult.find((item)=> item.code === selectedPickUp)?.name}
  onBlur={()=> {setPickUpEnter(false)}}
  onChange={(e) => {getLocationDetails(e)}}
/>

  </div>
  <div className=' border-r-8 border-yellow-400 bg-slate-50'>
  <input type="text" className='roundex-md p-5 w-100p h-100p rounded-md focus:outline-none' placeholder='Drop-Off Location'
 value={locationresultDrop.find((item)=> item.code === selectedDrop)?.name}
  onBlur={()=> {setDropOffEnter(false)}}
  onChange={(e) => {getLocationDetailsDrop(e)}}
   />
  </div>
  <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr,1fr] border-r-8 border-yellow-400 bg-slate-50">
  <div className=" border-r-8 border-yellow-400 bg-slate-50">
 
  <DatePicker dateFormat="dd/MM/yyyy" className='w-[120px]  p-5 focus:outline-none'  selected={startDate} minDate={new Date()}  onChange={(date) => setStartDate(date)} />
  </div>
  <div className="p-5  border-yellow-400 bg-slate-50">
  <TimePicker value={startTime} onchange={changeStartTime} placeholder="Start Time" name="starttime" />

  </div>
  
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] md:grid-cols-2 sm:grid-cols-1 border-r-8 border-yellow-400 bg-slate-50">


  <div className=" border-r-8 border-yellow-400 bg-slate-50">
  <DatePicker dateFormat="dd/MM/yyyy" className='w-[120px] p-5 focus:outline-none'  selected={endDate} minDate={new Date()} onChange={(date) => setEndDate(date)} />
  </div>
  <div className="p-5  bg-slate-50">
  
  <TimePicker placeholder="End Time" name="endtime" value={endTime} onchange={changeEndTime} />

  </div>


  </div>
  <div className=" border-0 border-yellow-400 bg-slate-50">
    <button className='bg-green-600 p-5 w-100p text-white hover:bg-green-700' onClick={()=> validateForm()}>Search</button>
  </div>
</div>


{pickUpEnter && 
  <div className='bg-slate-50 border absolute w-[500px]  rounded-md'>

{locationresult.length == 0 ? <p className=' p-4'>No Result Found !</p>  : <ul className='flex flex-col'>
  {locationresult.map((loc)=>
  (<SearchListItem key={loc.id}  type={loc.type} name={loc.name} code={loc.code}   onSelect={handleSelectedPickUp}    />))}
</ul> }




</div>
 
}

{dropOffEnter && 
  <div className='bg-slate-50 border absolute w-[500px]  rounded-md'>

{locationresultDrop.length == 0 ? <p className=' p-4'>No Result Found !</p>  : <ul className='flex flex-col'>
  {locationresultDrop.map((loc)=>
  (<SearchListItem key={loc.id}  type={loc.type} name={loc.name} code={loc.code}   onSelect={handleSelectedDrop}    />))}
</ul> }
</div>
 
}
</div>
  )
}
