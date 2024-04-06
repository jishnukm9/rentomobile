import React from 'react'
import { HiMap,HiMiniPhone,HiMiniHome,HiBookOpen  } from "react-icons/hi2";
export default function LocationDetails({locs}) {



 

 



  return (
    <div >
        <p className='text-xl font-bold mb-5 text-globaltext'>Location Info</p>
        <div  className='p-3 border rounded-md mb-3'>

        
       
        <div className='grid grid-cols-2 gap-y-5'>
        <div>
<p className='font-bold text-globaltext flex items-center gap-2'><HiMap /> Pick Up Location</p>
        </div>
        <div>
            <p>{locs?.pickup_location?.location?.name}</p>
        </div>
    
        <div>
<p className='font-bold text-globaltext flex items-center gap-2'><HiMiniHome />Address</p>
        </div>
        <div className='text-globaltext'>
            <p>{locs?.pickup_location?.address?.address_line_1}</p>
            <p>{locs?.pickup_location?.address?.address_line_2}</p>
            <p>{locs?.pickup_location?.address?.city}</p>
        </div>
        <div>
<p className='font-bold text-globaltext flex items-center gap-2'><HiMiniPhone/>Phone</p>
        </div>
        <div>
            <p>{locs?.pickup_location?.location?.telephone}</p>
            
        </div>
        <div>
<p className='font-bold text-globaltext flex items-center gap-2'><HiBookOpen/>Opening Hours</p>
        </div>
        <div>
            <p>{locs?.pickup_location?.location?.hours}</p>
            
        </div>
        </div>
        </div>





        <div className='p-3 border rounded-md'>

        

<div className='grid grid-cols-2 gap-y-5'>
<div>
<p className='font-bold text-globaltext flex items-center gap-2'><HiMap /> Drop Off Location</p>
</div>
<div>
    <p>{locs?.dropoff_location?.location?.name}</p>
</div>

<div>
<p className='font-bold text-globaltext flex items-center gap-2'><HiMiniHome />Address</p>
</div>
<div className='text-globaltext'>
    <p>{locs?.dropoff_location?.address?.address_line_1}</p>
    <p>{locs?.dropoff_location?.address?.address_line_2}</p>
    <p>{locs?.dropoff_location?.address?.city}</p>
</div>
<div>
<p className='font-bold text-globaltext flex items-center gap-2'><HiMiniPhone/>Phone</p>
</div>
<div>
    <p>{locs?.dropoff_location?.location?.telephone}</p>
    
</div>
<div>
<p className='font-bold text-globaltext flex items-center gap-2'><HiBookOpen/>Opening Hours</p>
</div>
<div>
    <p>{locs?.dropoff_location?.location?.hours}</p>
    
</div>
</div>
</div>
    </div>
  )
}
