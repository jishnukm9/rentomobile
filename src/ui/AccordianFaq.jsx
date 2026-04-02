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
<ListItem   heading="Can I book a one-way two wheeler rental?"    description="Yes. One-way two wheeler rental deals are quite common, as they give people even more freedom to explore and enjoy their rental. However, rental companies will often charge a One Way Fee (or ‘drop charge’) to cover the cost of returning the two wheeler to its original location. As the world’s biggest online two wheeler rental service, we can help you find a one-way rental two wheeler with a low Fee – or no Fee at all."       />
            </li>
            <li className='border-b-2 py-3'>
<ListItem heading="How old do I need to be to rent a two wheeler?"  description="With many rental companies, you must be at least 21 years of age to rent a two wheeler, and any driver under 25 may have to pay a Young Driver Fee. Similarly, people aged 70+ may find some companies will charge a Senior Driver Fee, or may not rent to them at all.
So two wheeler rental for the under-25s or over-70s can be more expensive – which is one more reason to book with Rentaltwo wheelers.com, as we work with all the big brands. Just check each two wheeler’s terms and conditions to see if your age would make any difference."   />

            </li>
            <li className='border-b-2 py-3'>
<ListItem  heading="Do I need rental two wheeler insurance – and what is ‘CDW’ anyway?"  description="Before you buy any two wheeler rental insurance, you should find out what coverage is provided by your credit two wheelerd company, your homeowner’s / renter’s policy, and your own two wheeler insurance. This will help you decide what cover you need to buy while booking and picking up your two wheeler.
CDW means ‘Collision Damage Waiver’; a type of cover that limits your liability for damage to certain parts of a rental two wheeler."   />

            </li>
            <li className=' pt-3'>
<ListItem heading="How do I find the cheapest two wheeler rental deals?"  description="As the world’s biggest online two wheeler rental service, we specialize in finding the cheapest two wheeler rental deals from major brands such as Hertz, Avis, Alamo, and Budget. Daily, weekly, or monthly two wheeler rentals… just fill in our search form to compare deals from different companies – and find out how much you can save when you rent a two wheeler from us."   />

            </li>
        </ul>
        
        



    </div>
  )
}
