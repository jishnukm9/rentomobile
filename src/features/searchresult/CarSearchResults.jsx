import React, { useContext, useState } from 'react'
import CarDeatils from './CarDetails'
import SearchFilter from './SearchFilter'
import ModifySearch from './ModifySearch'
import LocationAndFilter from './LocationAndFilter'
import { carSearchResultsFormatFunc } from './carSearchResultFormat'
import { SearchContext } from '../../context/SearchContext';
import NoCarsFound from './NoCarsFound'
import ModalWindow from '../../ui/ModalWindow'
import LocationDetails from './LocationDetails'
import Terms from './Terms'
import { getLocations } from '../../data/search/locations'
import LocationMap from './LocationMap'

export default function CarSearchResults({resultData}) {





  
  const [showLocationModal,setShowLocationmodal] = useState(false)
  const [showTermsModal,setShowTermsmodal] = useState(false)


  const [showPickUpMap,setShowPickUpMap] = useState(false)


    const {
        startDate,
        endDate,selectedPickUp} = useContext(SearchContext)
  
    
      
        const pickUpLat = getLocations().find((item) => item.code === selectedPickUp)?.lat
        const pickUpLng = getLocations().find((item) => item.code === selectedPickUp)?.lng
        const pickUpLoc = getLocations().find((item) => item.code === selectedPickUp)?.name

        function calculateDaysBetweenDates(date1, date2) {
            const ONE_DAY = 1000 * 60 * 60 * 24;
            const differenceMs = Math.abs(date2 - date1);
            return Math.round(differenceMs / ONE_DAY);
          }
          
       
         


    const {data:result,pickUp,locDetails,terms} = carSearchResultsFormatFunc(resultData)

    const carCount = result?.length

    // console.log("loc details-",locDetails)
    // console.log("result-",result)
  return (
    <div className='my-5 '>


{!resultData ? <NoCarsFound /> :



<>
<ModifySearch />
 <LocationAndFilter count={carCount} />

 <div  className='max-w-[1125px] grid lg:grid-cols-[3fr,7fr] gap-10 my-5 mx-auto'>
  
    <SearchFilter />

    <div className='p-0 lg:p-0'>

   { result?.map((element,index) => 
   
  
   <CarDeatils showPickMapFunc={setShowPickUpMap} key={index} data={element} days={calculateDaysBetweenDates( endDate,startDate)} pickUp={pickUp} locDetails={locDetails} terms={terms} showLocFunc={setShowLocationmodal} showTermsFunc={setShowTermsmodal}   />
 
)}

</div>
</div>


{showLocationModal && <ModalWindow closeModal={setShowLocationmodal} open={showLocationModal}><LocationDetails locs={locDetails}/></ModalWindow>}
{showTermsModal && <ModalWindow  closeModal={setShowTermsmodal} open={showTermsModal}><Terms terms={terms} /></ModalWindow>}
{showPickUpMap && <ModalWindow height="90%" closeModal={setShowPickUpMap} open={showPickUpMap}><LocationMap  pickUpLat={pickUpLat}
  pickUpLng={pickUpLng}
  pickUpLoc={pickUpLoc}
  /></ModalWindow>}


</>



}

 
</div>


  
  )
}
