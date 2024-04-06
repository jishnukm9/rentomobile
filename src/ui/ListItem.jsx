import React, { useState } from 'react'

import { MdKeyboardArrowDown,MdKeyboardControlKey } from "react-icons/md";
export default function ListItem({heading,description}) {

    const [clicked,setClicked] = useState(false)
  return (
    <>
    <div className='mb-2 flex justify-between'>
    <h3 className=''>{heading}</h3>
    {clicked ? <MdKeyboardControlKey className='text-2xl hover:cursor-pointer' onClick={()=>{setClicked(!clicked)}}/> : <MdKeyboardArrowDown className='text-2xl hover:cursor-pointer' onClick={()=>{setClicked(!clicked)}}/> }


</div>
{clicked && <div className='transition-all ease-in-out delay-75'>{description}</div>}

{/* <div className='transition-all ease-in-out delay-75' style={{display:`${clicked ? 'block' : 'none'}`}}>{description}</div> */}
</>
  )
}
