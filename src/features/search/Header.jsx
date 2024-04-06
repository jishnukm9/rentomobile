import React from 'react';
import Navbar from '../../ui/Navbar';
import Hero from './Hero';

export default function Header() {
  return (
    <div className="grid grid-rows-[200px,1fr]     min-h-[80vh] h-auto  bg-[linear-gradient(rgba(29,78,216,0.5),rgba(37,99,235,0.5),rgba(0,0,0,0.5)),url(https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/home/background-large.jpg)] bg-cover">
      <Navbar />

      
      <Hero />
      
   

    </div>
  );
}
