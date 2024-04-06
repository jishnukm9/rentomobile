import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext';
import { useSearch } from '../features/searchresult/useSearch';
import Navbar from '../ui/Navbar';
import Banner from '../ui/Banner';
import Footer from '../ui/Footer';
import SearchLoading from '../features/searchresult/SearchLoading';
import CarSearchResults from '../features/searchresult/CarSearchResults';
import ModalWindow from '../ui/ModalWindow';

export default function SearchResults() {



const {selectedPickUp,
  selectedDrop,
  startDate,startTime,
  endDate,endTime} = useContext(SearchContext)



const brand = 'Avis'
const pickUpDate = startDate.toISOString().slice(0, 10);
const dropOffDate = endDate.toISOString().slice(0, 10);
const pickUpTime = `${startTime}:00`;
const dropOffTime = `${endTime}:00`;
const pickUpLocation = selectedPickUp;
const dropOffLocation = selectedDrop;
// const pickUpLocation = 'BOM';
// const dropOffLocation = 'MAA';
const countryCode = "IN";

console.log("search query-",pickUpDate, dropOffDate,pickUpTime,dropOffTime ,pickUpLocation,dropOffLocation,brand,countryCode)
const { isLoading, error, cars } = useSearch(pickUpDate, dropOffDate,pickUpTime,dropOffTime ,pickUpLocation,dropOffLocation,brand,countryCode);

 

const resultData = cars

console.log("resilt --",resultData)


  return (
    <div>
<div className='bg-blue-600'>
<Navbar />
</div>



<ModalWindow />
{isLoading ? <SearchLoading /> :  <CarSearchResults resultData={resultData} /> }





     

      <Banner/>
      <Footer/>
    </div>
  )
}
