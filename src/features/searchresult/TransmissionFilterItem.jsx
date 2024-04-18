import React, { useContext, useEffect, useState } from 'react'
import { FilterContext } from '../../context/filterContext';

export default function PriceFilterItem({text,val}) {


    const [isChecked, setIsChecked] = useState(false);
    const {transmissionFilter,setTransmissionFilter} = useContext(FilterContext)

    function changeCheckBox() {
        setIsChecked((prevVal) => (!prevVal));
        if (!isChecked){
            setTransmissionFilter((prevVal)=> 
            {
return [...prevVal,text]
            })
        } else{
            setTransmissionFilter((prevVal)=>{
                let transmList = prevVal.filter((item)=> {
                    if(item !== text){
                        return item
                    }
                })
                return transmList
            })
         
        }
    }

    useEffect(() => {
        setIsChecked(transmissionFilter.includes(text));
    }, [transmissionFilter, text]);
  return (
    <div className='py-1'>
      <div className='flex gap-4'><input checked={isChecked}  type="checkbox" onChange={changeCheckBox} />
    <p>{text}</p></div>
    </div>
   
  )
}
