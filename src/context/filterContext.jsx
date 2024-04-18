import React, { createContext, useState } from 'react'




export const FilterContext = createContext()


export default function FilterProvider({children}) {


    
    const [categoryFilter,setCategoryFilter] = useState(null)
    const [priceFilter,setPriceFilter] = useState([])
    const [acFilter,setAcFilter] = useState(null)
    const [doorsFilter,setDoorsFilter] = useState([])
    const [transmissionFilter,setTransmissionFilter] = useState([])
    const [clearFilter,setClearFilter] = useState(null)


  return (
  
    <FilterContext.Provider value={{categoryFilter,
    setCategoryFilter,
    priceFilter,
    acFilter,
    setAcFilter,
    setPriceFilter,
    doorsFilter,
    setDoorsFilter,
    transmissionFilter,
    setTransmissionFilter,
    clearFilter,
    setClearFilter}} >
      {children}
    </FilterContext.Provider>
  )
}
