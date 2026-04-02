import React, { useContext } from 'react'
import Logo from './Logo'
import { HiUserCircle } from "react-icons/hi";
import { SearchContext } from '../context/SearchContext';

export default function Navbar() {
  const { cities, selectedCity, handleCityChange } = useContext(SearchContext);

  return (
    <div>
    <div className="max-w-[1200px] px-10 py-8 mx-auto my-0 flex justify-between items-center">
        <Logo/>
        <div className="flex items-center gap-4">
          <select
            value={selectedCity}
            onChange={(e) => handleCityChange(e.target.value)}
            className="bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-md px-4 py-2 font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            {cities.map((city) => (
              <option key={city.id} value={city.id} className="text-black bg-white">
                {city.name}
              </option>
            ))}
          </select>
          <p className='text-white'>
            <HiUserCircle className='text-3xl' />
          </p>
        </div>
    </div>
    </div>
  )
}
