import React from 'react'

export default function Footer() {

  const year = new Date().getFullYear()
 
  return (
    <div>
<div className='bg-grey-500'>
  <div className='max-w-[1200px] mx-auto my-0 px-10 py-5'>
 <h3 className='mb-2'>Rentomobile.com is a limited company registered in India,Kerala whose registered address is at Calicut,Kerala. </h3>
  
  <h3 className='mb-5'>Rentomobile.com is the world leader in online travel & related services.</h3>

  <p className='mb-5 text-center'>Copyright © {year} Rentomobile.com. All rights reserved</p>
  </div>

</div>
      
    </div>
  )
}
