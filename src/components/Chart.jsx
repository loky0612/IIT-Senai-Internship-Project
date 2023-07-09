import React from 'react';
import '../App.css';
import { MdKeyboardArrowDown, MdKeyboardArrowRight, LiaSun, FiCloud } from '../Icons/Icons';
import '../App.css';
import chart from '../Images/Chart.png';

const Chart = () => {
  return (
    <div className='flex justify-center items-center h-3/6 w-full'>
      <div className='chart h-full flex flex-col items-center bg-white rounded-3xl'>
        <div className='up mt-6 flex justify-between'>
          <span>Upcoming hours</span>
          <div className='flex side'>
            <div className='flex bg-gray-100 items-center rounded-lg p-1'>
              <span className='pl-2 text-xs text-gray-400'>Rain Precipitation</span>
              <span className='px-2'><MdKeyboardArrowDown /></span>
            </div>
            <div className='flex bg-gray-200 items-center ml-4 rounded-lg p-1'>
              <span className='pl-2 text-xs'>Next days</span>
              <span className='px-2'><MdKeyboardArrowRight /></span>
            </div>
          </div>
        </div>
        <div className='details flex mt-6'>
            <div className='flex flex-col'>
              <span className=' text-xs'>Now</span>
              <LiaSun className='mt-1' />
              <span className=' text-xs mt-1'>27<span className='font-medium'>&#176;</span></span>
            </div>
            <div className='flex flex-col ml-20'>
              <span className=' text-xs'>Now</span>
              <LiaSun className='mt-1' />
              <span className=' text-xs mt-1'>28<span className='font-medium'>&#176;</span></span>
            </div>
            <div className='flex flex-col ml-20'>
              <span className=' text-xs'>Now</span>
              <FiCloud className='mt-1' />
              <span className=' text-xs mt-1'>28<span className='font-medium'>&#176;</span></span>
            </div>
            <div className='flex flex-col ml-20'>
              <span className=' text-xs'>Now</span>
              <FiCloud className='mt-1'/>
              <span className=' text-xs mt-1'>29<span className='font-medium'>&#176;</span></span>
            </div>
            <div className='flex flex-col ml-20'>
              <span className=' text-xs'>Now</span>
              <LiaSun className='mt-1'/>
              <span className=' text-xs mt-1'>30<span className='font-medium'>&#176;</span></span>
            </div>
            <div className='flex flex-col ml-20'>
              <span className=' text-xs'>Now</span>
              <FiCloud className='mt-1'/>
              <span className=' text-xs mt-1'>29<span className='font-medium'>&#176;</span></span>
            </div>
            <div className='flex flex-col ml-20'>
              <span className=' text-xs'>Now</span>
              <FiCloud className='mt-1'/>
              <span className=' text-xs mt-1'>29<span className='font-medium'>&#176;</span></span>
            </div>
            <div className='flex flex-col ml-20'>
              <span className=' text-xs'>Now</span>
              <LiaSun className='mt-1'/>
              <span className=' text-xs mt-1'>28<span className='font-medium'>&#176;</span></span>
            </div>
        </div>
        <div className='flex justify-center'>
          <img src={chart} alt='chart' className='chart mt-2'/>
        </div>
      </div>
    </div>

  )
}

export default Chart;