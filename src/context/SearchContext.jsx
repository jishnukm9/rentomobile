






import { createContext, useState } from 'react';
import { getLocations } from '../data/search/locations'


export const SearchContext = createContext()

export default function SearchProvider({children}){


    

  const [startDate, setStartDate] = useState(new Date(new Date().setDate(new Date().getDate() + 1)));
  const [endDate, setEndDate] = useState(new Date(new Date().setDate(new Date().getDate() + 2)));
  const [startTime, setStartTime] = useState('12:00');
  const [endTime, setEndTime] = useState('12:00');
  // const [pickUpEnter,setPickUpEnter] = useState(false)
  // const [dropOffEnter,setDropOffEnter] = useState(false)
  // const [locationresult,setlocationresult] = useState([])
  const [selectedPickUp,setSelectedPickUp] = useState('')
  // const [locationresultDrop,setlocationresultDrop] = useState([])
  const [selectedDrop,setSelectedDrop] = useState('')

  const [pickUpLocationFull,setPickUpLocationFull] = useState('')
  const [dropOffLocationFull,setDropOffLocationFull] = useState('')
  const [categoryFilter,setCategoryFilter] = useState(null)

  function changeStartTime(val){
    setStartTime(val)
  }

  function changeEndTime(val){
    setEndTime(val)
  }

  const locationsFull  = getLocations()


 function handleSelectedPickUp(pickUp){
  setSelectedPickUp(pickUp[1])
  setPickUpLocationFull(pickUp[0])

 

 }

 function handleSelectedDrop(drop){
  setSelectedDrop(drop[1])
  setDropOffLocationFull(drop[0])

 }



 return (

    <SearchContext.Provider value={{
        // locationresult,
        selectedPickUp,
        locationsFull ,
        // setPickUpEnter,
        // getLocationDetails,
        // locationresultDrop,
        selectedDrop,
        // getLocationDetailsDrop,
        startDate,
        setStartDate,
        startTime,changeStartTime,
        endDate,
        setEndDate,
        endTime,
        changeEndTime,
        // pickUpEnter,
        handleSelectedPickUp,
        // dropOffEnter,
        handleSelectedDrop,
        // setDropOffEnter,
        // setPickUpLocationFull,
        // setDropOffLocationFull,
        pickUpLocationFull,
        dropOffLocationFull,
        categoryFilter,
        setCategoryFilter
      }}>
        {children}
        </SearchContext.Provider>

 )
}


