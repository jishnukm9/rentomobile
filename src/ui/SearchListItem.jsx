import React from 'react'

export default function SearchListItem({name,type,code,selectLoc}) {


  
  function handleClick(){
   
    selectLoc([name,code])
   
  }
  return (
    <li className='hover:cursor-pointer hover:bg-blue-100 p-4' onMouseEnter={()=>handleClick()} >

      <p>
        <span className={`${type === 'Airport' ? 'bg-orange-600' : 'bg-blue-600'} px-2 py-1 rounded me-3 text-sm`}>
          {type}
        </span>
        {name}
      </p>
    </li>
  )
}
