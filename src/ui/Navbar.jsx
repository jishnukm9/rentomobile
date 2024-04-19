import React from 'react'
import Logo from './Logo'
import { HiUserCircle } from "react-icons/hi";

export default function Navbar() {
  return (
    <div>
    <div className="max-w-[1200px] px-10 py-8 mx-auto my-0 flex justify-between">
        <Logo/>
        <p  className='text-white'>
          <HiUserCircle className='text-3xl' />
        </p>
    </div>
    </div>
  )
}
