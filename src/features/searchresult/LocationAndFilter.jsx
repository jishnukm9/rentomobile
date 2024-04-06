import React, { useContext, useState } from 'react'
import CarCategory from './CarCategory'
import DropDown from '../../ui/Dropdown'
import ButtonSmall from '../../ui/ButtonSmall'
import { FaMapMarkerAlt } from 'react-icons/fa'
import LocationMap from './LocationMap'
import ModalWindow from '../../ui/ModalWindow'
import { SearchContext } from '../../context/SearchContext'
import { getLocations } from '../../data/search/locations'

export default function LocationAndFilter({count}) {

  const {
    selectedPickUp,selectedDrop} = useContext(SearchContext)

  const [showLocationMapModal,setShowLocationMapModal] = useState(false)

  const pickUpLat = getLocations().find((item) => item.code === selectedPickUp).lat
  const pickUpLng = getLocations().find((item) => item.code === selectedPickUp).lng
  const dropOffLat = getLocations().find((item) => item.code === selectedDrop).lat
  const dropOffLng = getLocations().find((item) => item.code === selectedDrop).lng
  const dropOffLoc = getLocations().find((item) => item.code === selectedDrop).name
  const pickUpLoc = getLocations().find((item) => item.code === selectedPickUp).name


  return (
    <>
    <div  className='max-w-[1125px] grid grid-cols-[3fr,7fr] gap-10 my-5 mx-auto'>
    <div className='flex justify-center items-center h-[170px]  bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0),rgba(255,255,255,0)),url(https://cdn2.rcstatic.com/images/map/background.png)] bg-cover'>
<div className='flex flex-col justify-center items-center' onClick={()=> {
      console.log("clicked")
      setShowLocationMapModal((val)=> (!val))
    }}>
    <FaMapMarkerAlt className='text-3xl mb-2 text-blue-600' />
    <ButtonSmall  text="Show on map" />
    </div>
    </div>
    <div className='flex flex-col justify-between'>
      <div>
    <p className='text-2xl font-bold mb-2 text-globaltext'>{count} cars available</p>
    <DropDown  className="mb-5" />
    </div>
  <CarCategory />

    </div>
  </div>
  {showLocationMapModal && <ModalWindow height="90%" closeModal={setShowLocationMapModal} open={showLocationMapModal}><LocationMap  pickUpLat={pickUpLat}
  dropOffLat={dropOffLat}
  pickUpLng={pickUpLng}
  dropOffLng={dropOffLng}
  pickUpLoc={pickUpLoc}
  dropOffLoc={dropOffLoc}   /></ModalWindow>}
  </>
  )
}
