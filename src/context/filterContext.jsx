import React, { createContext, useState } from 'react'




export const FilterContext = createContext()


export default function FilterProvider({children}) {


    const [searchResult,setSearchResult] = useState({})




  return (
  
    <FilterContext.Provider value={{searchResult,setSearchResult}} >
      {children}
    </FilterContext.Provider>
  )
}
