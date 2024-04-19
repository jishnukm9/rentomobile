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





    const [locDetails, setLocDetails] = useState(() => {
      const savedLocDetails = localStorage.getItem('locDetails');
      return savedLocDetails ? JSON.parse(savedLocDetails) : {};
  });

  // Use useEffect to update localStorage when carDetails changes
  useEffect(() => {
      localStorage.setItem('locDetails', JSON.stringify(locDetails));
  }, [locDetails]);
   


  return (
  
    <DetailsContext.Provider value={{carDetails,setCarDetails,locDetails, setLocDetails}} >
      {children}
    </DetailsContext.Provider>
  )
}