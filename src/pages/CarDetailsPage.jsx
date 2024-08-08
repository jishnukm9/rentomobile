import React, { useContext, useState } from 'react'
import { DetailsContext } from '../context/DetailsContext'
import { FilterContext } from '../context/filterContext'
import { SearchContext } from '../context/SearchContext'
import { getLocations } from '../data/search/locations'
import CarDeatilsCheckout from '../features/checkout/CarDetailsCheckout'
import LocationAndFilter from '../features/searchresult/LocationAndFilter'
import ModifySearch from '../features/searchresult/ModifySearch'
import SearchFilter from '../features/searchresult/SearchFilter'
import Banner from '../ui/Banner'
import ButtonSmall from '../ui/ButtonSmall'
import Footer from '../ui/Footer'
import Navbar from '../ui/Navbar'
import { useNavigate } from 'react-router-dom';
import LocationDetails from '../features/searchresult/LocationDetails'
import ModalWindow from '../ui/ModalWindow'
export default function CarDetailsPage() {


  const navigate = useNavigate();
    const {carDetails,setCarDetails,locDetails, setLocDetails} = useContext(DetailsContext)


const [showLocationModal,setShowLocationmodal] = useState(false)
const [showTermsModal,setShowTermsmodal] = useState(false)


const [showPickUpMap,setShowPickUpMap] = useState(false)



const {pickUpLocationFull,
  dropOffLocationFull,startDate,startTime,endDate,endTime,selectedPickUp,selectedDrop} = useContext(SearchContext)

const pickUpLoc = getLocations().find((item) => item.code === selectedPickUp)?.name
const dropOffLoc = getLocations().find((item) => item.code === selectedDrop)?.name
// const pickUpLng = getLocations().find((item) => item.code === selectedPickUp)?.lng
function calculateDaysBetweenDates(date1, date2) {
    const ONE_DAY = 1000 * 60 * 60 * 24;
    const differenceMs = Math.abs(date2 - date1);
    return Math.round(differenceMs / ONE_DAY);
  }


  let startDateFinal =  startDate.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
    let endDateFinal =  endDate.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
   

    function checkoutFunc(){
      navigate('/checkout')
    }

  return (
   
      
      <div>
    <div className='bg-blue-600 mb-5'>
<Navbar />
</div>

<div className='px-3 lg:px-0'>
<ModifySearch/>
</div>


<div className='px-3 lg:px-0'>
<div className='max-w-[1125px] my-5 mx-auto'>
<a className='text-blue-600 border-b-2 border-blue-400 cursor-pointer' onClick={()=> {navigate(-1)}} >Back to Search results</a>
   <h2 className='text-3xl font-bold mb-3 mt-3'>Your Deal</h2>
</div>
</div>



<div className='px-3 lg:px-0'>
<div  className='max-w-[1125px] grid lg:grid-cols-[7fr,3fr] gap-10 my-5 mx-auto'>
   
  
   

  
<div className='p-0 lg:p-0'>


   <hr className='mb-3 ' />
  
<CarDeatilsCheckout showPickMapFunc={setShowPickUpMap} data={carDetails} days={calculateDaysBetweenDates( endDate,startDate)} pickUp={pickUpLoc} locDetails={locDetails} showLocFunc={setShowLocationmodal}    />

<div onClick={checkoutFunc} className='mt-5 float-right'>
<ButtonSmall   text="Continue to Book" />
</div>

</div>
<div>

 

   <div className='p-5 mb-5 border  rounded-md'>
   <h2 className='text-xl font-bold mb-5'>Pick Up and Drop Off</h2>

   
   <div className='flex gap-3 mb-5'>
   <div className='mt-1'>
<div className='circle border-4 border-stone-600  rounded-xl bg-white w-[2px] h-[2px]'></div>
   </div>
   <div>
   <h2 className='text-xs  mb-3'>{startDateFinal} {startTime} </h2>
 
 <h2 className='text-xs font-bold mb-3'>{pickUpLoc}</h2>
   </div>
     </div>

     <div className='flex gap-3'>
   <div>
   <div className='mt-1'>
<div className='circle border-4 border-stone-600  rounded-xl bg-white w-[2px] h-[2px]'></div>
   </div>
   </div>
   <div>
   <h2 className='text-xs  mb-3'>{endDateFinal} {endTime} </h2>
 
   <h2 className='text-xs font-bold mb-3'>{dropOffLoc}</h2>
     </div>
     </div>

     
   </div>



   <div className='p-5 border  rounded-md'>
   <h2 className='text-xl font-bold mb-5'>Car price breakdown</h2>

   <div className='flex justify-between items-center  mb-3'>
<p className='text-xs '>Car hire charge</p> <p className='text-xs '>{carDetails.price}  {carDetails.currency}</p>
   </div>
   <hr className='mb-3' />
   <div className='flex justify-between items-center'>
   <p className='text-base '>Price for {calculateDaysBetweenDates( endDate,startDate)} days:</p> <p className='text-base '>{carDetails.price} {carDetails.currency}</p>
   </div>

   </div>
   </div>
  
</div>

</div>









<div className='mt-5'>
<Banner/>
<Footer/>
</div>
{showLocationModal && <ModalWindow closeModal={setShowLocationmodal} open={showLocationModal}><LocationDetails locs={locDetails}/></ModalWindow>}
    </div>
  )
}
