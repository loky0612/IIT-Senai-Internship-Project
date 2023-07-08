import React from 'react';
import { IoIosArrowBack, IoIosArrowForward, BsSun } from '../Icons/Icons';

const Degree = () => {
  return (
    <div className='flex flex-col pt-6 items-center'>
      <div className='flex items-center w-3/4 pt-10  justify-between'>
        <IoIosArrowBack className='text-white' />
        <span className='deg text-7xl text-white'>27<span className='font-medium'>&#176;</span></span>
        <IoIosArrowForward className='text-white' />
      </div>
      <div className='flex items-center justify-center mr-5 pr-5 pt-2 w-full text-white'>
        <BsSun className='mr-3'/>
        <span className='t text-xl font-light'>Sunny</span>
      </div>
    </div>

  )
}

export default Degree;