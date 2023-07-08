import React from 'react'
import '../App.css';
import { TfiLocationArrow, BsSunrise, BsSunset } from '../Icons/Icons';

const Country = () => {
  return (
    <div className='country h-10 w-5/6 mt-7 pt-5 ml-6 flex flex-col'>
      <div className='w-full h-1/2 items-center'>
        <div className='flex justify-between'>
          <div className='text-white flex'>
            <TfiLocationArrow className='mt-1 rotate-90 h-4 w-4' />
            <span className='ml-2 text-base'>New York, USA</span>
          </div>
          <div className='text-white flex h-full items-center'>
            <BsSunrise className='mt-1  h-4 w-4' />
            <span className='ml-2 text-sm pt-1'>07:19</span>
          </div>
        </div>
      </div>
      <div className='w-full h-1/2 pt-3 items-center'>
        <div className='flex items-center justify-between'>
          <div className='text-white flex'>
            <span className='ml-2 text-sm font-thin'>Today 08 July</span>
          </div>
          <div className='text-white flex h-full items-center'>
            <BsSunset className='mt-1  h-4 w-4' />
            <span className='ml-2 text-sm pt-1'>19:32</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Country