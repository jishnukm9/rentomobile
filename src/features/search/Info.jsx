import React from 'react'
import LogoList from '../../ui/LogoList'
import Features from '../../ui/Features'
import FeatureItemBig from '../../ui/FeatureItemBig'
import AccordianFaq from '../../ui/AccordianFaq'
import AccordianInfo from '../../ui/AccordianInfo'

export default function Info() {
  return (
    <div className='max-w-[1200px] mx-auto py-10 px-10'>

        <h2 className='text-2xl font-bold mb-10'>Connecting you to the biggest brands in car rental</h2>
<div className='mb-20'><LogoList/></div>
        <div className='mb-20'>
        <Features />
        </div>

        <div className='grid grid-cols-1 gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-10'>
        <FeatureItemBig heading="Clean cars. Flexible bookings. Socially distant rental counters." description="We’re working with our partners to keep you safe and in the driving seat" imgurl="https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/covid-banner/desktop/thumbnail_covid@1x.png"    />
        <FeatureItemBig heading="Exclusive offers and deals!" description="Get exclusive offers and deals for booking only at Rentomobile" imgurl="https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/email-subscription/desktop/email_signup@1x.png"    />
        </div>

        <div className='grid grid-cols-1 gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-2'>
          <AccordianFaq />
          <AccordianInfo />
        </div>
        

    </div>
  )
}
