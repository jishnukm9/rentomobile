import React from 'react'
import FeatureItem from './FeatureItem'

export default function Features() {

    const head1="Flexible rentals"
    const desc1 = "Cancel or change most bookings for free up to 48 hours before pick-up"
    const url1="https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/usps/desktop/usp_calendar@1x.png"
  
    const head2="No hidden fees"
    const desc2 = "Know exactly what you’re paying"
    const url2="https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/usps/desktop/usp_magnifier@1x.png"
  
    const head3="Price Match Guarantee"
    const desc3 = "Found the same deal for less? We’ll match the price."
    const url3="https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/usps/desktop/usp_wallet@1x.png"
    return (
    <div className='grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

    <FeatureItem heading={head1} description={desc1} imgurl={url1}    />
    <FeatureItem heading={head2} description={desc2} imgurl={url2}    />
    <FeatureItem heading={head3} description={desc3} imgurl={url3}    />
    </div>
  )
}
