import React from 'react'
import shoe from '../assets/shoe_image.png'
import amazon from '../assets/amazon.png'
import flipkart from '../assets/flipkart.png'
import '../index.css'

function Home() {
  return (
    <div className='flex align items-center   max-w-[1280px] m-0 mx-auto home'>
      <div>

        <div className='text-[90px] font-bold overflow-hidden max-w-[640px] w-[500px]  tracking-tighter leading-[5rem] pt-[6rem]'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
        </div>
        <div className='max-w-[640px] w-[400px] text-zinc-600 mt-9'>
          <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
        </div>
        <div className='flex gap-10 mt-9'>
           <button className='bg-red-600 px-5 py-2 font-semibold text-slate-100'>
            SHOP NOW
            </button>
           <button className='border-2 border-zinc-600 px-5 py-2 font-semibold text-zinc-600'>
            CATEGORY
           </button>
        </div>

        <p className='w-[41%] text-zinc-600 mt-7 text-md '>Also Available on</p>

        <div className='flex gap-4 mt-2'>
          <img src={amazon} alt="" />
          <img src={flipkart} alt="" />
        </div>

      </div>

      <div className='w-[640px] mt-[12rem] ml-[6rem]'>
        <img src={shoe} alt="" />
      </div>
    </div>
  )
}

export default Home
