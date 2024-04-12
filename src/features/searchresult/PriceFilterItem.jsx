import React, { useContext, useState } from 'react'
import { FilterContext } from '../../context/filterContext';

export default function PriceFilterItem({text,val}) {


    const [isChecked, setIsChecked] = useState(true);
    const {priceFilter,setPriceFilter} = useContext(FilterContext)

    function changeCheckBox() {
        setIsChecked((prevVal) => (!prevVal));
        if (isChecked){
            setPriceFilter((prevFilter)=> ([...prevFilter,val]))
        } else{
            setPriceFilter((prevFilter) => {
                let finalVal=prevFilter.filter(item=> { 
                    if(item !== val){
                        return item
                    }})

                return finalVal
            })
        }
    }
  return (
    <div className='py-1'>
      <div className='flex gap-4'><input type="checkbox" onChange={changeCheckBox} />
    <p>{text}</p></div>
    </div>
   
  )
}
