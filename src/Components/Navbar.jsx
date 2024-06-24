import React from 'react'
import logo from '../assets/brand_logo.png'

function Navbar() {
  return (
    <div className='  h-[72px] max-w-[1280px] nav m-0 mx-auto flex justify-between items-center'>
      
        <div className='pl-4 pt-2'><img src={logo} alt="" /></div>
      
      <div className='flex gap-[24px] capitalize tracking-tight font-regular text-2xl'>
        <h5>menu</h5>
        <h5>location</h5>
        <h5>about</h5>
        <h5>contact</h5>
      </div>

      <div className=''>
        <button className='bg-red-600 px-5 py-2 font-semibold text-slate-100'>LOGIN</button>
      </div>

    </div>
  )
}

export default Navbar
