import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex p-5 justify-between'>
      
        <div>
            <h1 className='text-2xl text-violet-900 font-bold'>SK HOME APPLIANCE</h1>
        </div>
        <div>
            <Link className='px-5 text-white font-bold' to='/Home'>Home</Link>
            <Link className='px-5 text-white font-bold' to='/About'>About</Link>
            <Link className='px-5 text-white font-bold' to='/Services'>Services</Link>
        </div>
    </div>
  )
}