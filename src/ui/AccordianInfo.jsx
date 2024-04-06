import React, { useState } from 'react'
import ListItem from './ListItem'


export default function Accordian() {



    
  return (
    <div className='border rounded-md p-5'>

        <h1 className='text-lg font-bold mb-5  border-b-2 pb-3'>
        Additional Informations
        </h1>

        <ul>
            <li className='border-b-2 pb-3'>
<ListItem   heading="What are the requirements to rent a car from RentoMobile?"    description="To rent a car from RentoMobile, you must be at least 21 years old, have a valid driver’s license, and possess a major credit card in your name. Additional documentation may be required for international renters"       />
            </li>
            <li className='border-b-2 py-3'>
<ListItem heading="How do I modify or cancel my existing reservation?"  description="You can modify or cancel your reservation by logging into your account on the RentOMobile website or by contacting our customer service team. Please note that any changes to your reservation may result in different rental rates."   />

            </li>
            <li className='border-b-2 py-3'>
<ListItem  heading="Can I add an additional driver to my rental agreement?"  description="Yes, additional drivers can be added to your rental agreement as long as they meet the same rental qualifications as the primary renter. There may be an additional daily fee for each additional driver"   />

            </li>
            <li className=' pt-3'>
<ListItem heading="What should I do if I have an accident or encounter issues with my rental car?"  description="In the event of an accident, please contact local authorities and file a police report. Then, call RentOMobile’s 24/7 roadside assistance. We will guide you through the process and arrange for a replacement vehicle if necessary"   />

            </li>
        </ul>
        
        



    </div>
  )
}
