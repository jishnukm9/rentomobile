import React, { useContext, useState } from 'react'
import { HiUser,HiShoppingBag  } from "react-icons/hi2";
import { HiOutlineAdjustments } from "react-icons/hi";
import { FaShoppingBasket , FaCar } from "react-icons/fa";
import { Navigate, useNavigate } from 'react-router-dom';
import { DetailsContext } from '../../context/DetailsContext';



export default function CarDeatils({data,days,pickUp,locDetails,terms,showLocFunc,showTermsFunc,showPickMapFunc}) {

  const navigate = useNavigate()
  
  const {setCarDetails,setLocDetails} = useContext(DetailsContext)
  // console.log(useContext(DetailsContext))
function funcViewDetails(){


  setCarDetails(data)
setLocDetails(locDetails)



  navigate('/cardetails')
}

  
  
  return (
    <div
    
   className='my-2 border rounded-md'>

     <div className='grid lg:grid-cols-[1fr,2fr,1fr] p-3 '>
       <div  className='flex justify-center items-center p-3'>

      <div>
         <img  src={data.image} alt="" />
         </div>
       </div>

     

       <div className='p-3'>

      <p className='mb-4 text-xl font-bold text-globaltext'>{data.name}
<span className='ps-2 text-sm'>or similar</span></p>
<div className='grid grid-cols-2 gap-3 mb-4'>
  <div className='flex gap-2 items-center'><HiUser className='text-xl text-gray-600' /><span className='text-sm'> {data.seats} seats</span></div>
  <div className='flex gap-2 items-center'><HiOutlineAdjustments className='text-xl text-gray-600' /> <span className='text-sm'>  {data.transmission} </span></div>
  <div className='flex gap-2 items-center'><HiShoppingBag className='text-xl text-gray-600' /><span className='text-sm'>{data.largeLuggage} Large Bag</span> </div>
  <div className='flex gap-2 items-center'><FaShoppingBasket  className='text-xl text-gray-600'  /><span className='text-sm'>{data.smallLuggage} Small Bag</span> </div>
  <div className='flex gap-2 items-center text-green-600'><FaCar  className='text-xl text-green-600 '  /><span className='text-sm'>Unlimited Mileage</span>  </div>
</div>
<p className='text-sm text-blue-600 mb-1 font-bold hover:cursor-pointer' onClick={()=> showPickMapFunc((val)=>(!val))}>{pickUp}</p>
<p className='text-xs'>Car Rental Center</p>
       </div>
       <div className='flex flex-col p-3 '>

<div className='mt-auto'>
         <div className='text-right mb-2'>
         <p className='text-xs mb-1'>{days == 0 ? 'Price for 1 day:' : `Price for ${days} days:`}</p>
         <p className='text-2xl font-bold text-globaltext'>{data.price} {data.currency}</p>
         
         </div>
         <button className='w-100p bg-green-600 hover:bg-green-700 px-3 py-2 text-white rounded-md' onClick={funcViewDetails}>View Deal</button>
         </div>
       </div>

     </div>


<hr className='my-2' />

<div className='p-3'>
<div className='flex justify-between items-center'>
  <div className='flex gap-2'>
  <div className='border'><img className='w-[60px]'  src="https://cdn2.rcstatic.com/images/supplier_logos/avis_logo_lrg.gif" alt="" /></div>
  <div className='bg-blue-600 text-white px-2  rounded flex justify-center items-center'>
    <p>{data.rating}</p>
  </div>
  <div>
    <p className='text-sm font-bold'>Good</p>
    <p className='text-xs'>Recomended</p>
  </div>
  
  </div>

  <div className='flex gap-4'>
    <a href="http://" className='text-blue-600' onClick={(e)=> {
e.preventDefault()

showLocFunc((val)=> {
  console.log(val)
  return (!val)
} )
    }}>Location info</a>
    {/* <a href="http://" className='text-blue-600'  onClick={(e)=> {
e.preventDefault()
showTermsFunc((val)=> (!val) )
    }}>Terms and Conditions</a> */}
  </div>
  
</div>
</div>

   </div>
  )
}
