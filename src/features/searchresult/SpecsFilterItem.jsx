import React, { useContext, useEffect, useState } from 'react'
import { FilterContext } from '../../context/filterContext';

export default function SpecsFilterItem({text,val}) {


    const [isChecked, setIsChecked] = useState(false);
    const {doorsFilter,setDoorsFilter }= useContext(FilterContext)


       

    function changeCheckBox() {
        setIsChecked((prevVal) => (!prevVal));
        if (!isChecked){
            setDoorsFilter((prevVal)=> 
            {
return [...prevVal,text]
            })
        } else{
            setDoorsFilter((prevVal)=>{
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
      setIsChecked(doorsFilter.includes(text));
  }, [doorsFilter,text]);
 
  return (
    <div className='py-1'>
      <div className='flex gap-4'><input checked={isChecked} type="checkbox" onChange={changeCheckBox} />
    <p>{text}</p></div>
    </div>
   
  )
}
