import React, { createContext, useEffect, useState } from 'react'




export const DetailsContext = createContext()


export default function DetailsProvider({children}) {


    
    const [carDetails, setCarDetails] = useState(() => {
        const savedCarDetails = localStorage.getItem('carDetails');
        return savedCarDetails ? JSON.parse(savedCarDetails) : {};
    });

    // Use useEffect to update localStorage when carDetails changes
    useEffect(() => {
        localStorage.setItem('carDetails', JSON.stringify(carDetails));
    }, [carDetails]);
   


  return (
  
    <DetailsContext.Provider value={{carDetails,setCarDetails}} >
      {children}
    </DetailsContext.Provider>
  )
}