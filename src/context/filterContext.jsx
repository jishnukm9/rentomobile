import React, { createContext, useState } from 'react'




export const FilterContext = createContext()


export default function FilterProvider({children}) {


    
    const [categoryFilter,setCategoryFilter] = useState(null)
    const [priceFilter,setPriceFilter] = useState([])




  return (
  
    <FilterContext.Provider value={{categoryFilter,
    setCategoryFilter,
    priceFilter,
    setPriceFilter}} >
      {children}
    </FilterContext.Provider>
  )
}
