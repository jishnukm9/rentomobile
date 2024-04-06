import React, { useState } from 'react'
import ListItem from './ListItem'


export default function Accordian() {



    
  return (
    <div className='border rounded-md p-5'>

        <h1 className='text-lg font-bold mb-5  border-b-2 pb-3'>
        Frequently Asked Questions
        </h1>

        <ul>
            <li className='border-b-2 pb-3'>
<ListItem   heading="Can I book a one-way car rental?"    description="Yes. One-way car rental deals are quite common, as they give people even more freedom to explore and enjoy their rental. However, rental companies will often charge a One Way Fee (or ‘drop charge’) to cover the cost of returning the car to its original location. As the world’s biggest online car rental service, we can help you find a one-way rental car with a low Fee – or no Fee at all."       />
            </li>
            <li className='border-b-2 py-3'>
<ListItem heading="How old do I need to be to rent a car?"  description="With many rental companies, you must be at least 21 years of age to rent a car, and any driver under 25 may have to pay a Young Driver Fee. Similarly, people aged 70+ may find some companies will charge a Senior Driver Fee, or may not rent to them at all.
So car rental for the under-25s or over-70s can be more expensive – which is one more reason to book with Rentalcars.com, as we work with all the big brands. Just check each car’s terms and conditions to see if your age would make any difference."   />

            </li>
            <li className='border-b-2 py-3'>
<ListItem  heading="Do I need rental car insurance – and what is ‘CDW’ anyway?"  description="Before you buy any car rental insurance, you should find out what coverage is provided by your credit card company, your homeowner’s / renter’s policy, and your own car insurance. This will help you decide what cover you need to buy while booking and picking up your car.
CDW means ‘Collision Damage Waiver’; a type of cover that limits your liability for damage to certain parts of a rental car."   />

            </li>
            <li className=' pt-3'>
<ListItem heading="How do I find the cheapest car rental deals?"  description="As the world’s biggest online car rental service, we specialize in finding the cheapest car rental deals from major brands such as Hertz, Avis, Alamo, and Budget. Daily, weekly, or monthly car rentals… just fill in our search form to compare deals from different companies – and find out how much you can save when you rent a car from us."   />

            </li>
        </ul>
        
        



    </div>
  )
}
