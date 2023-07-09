import React from 'react';
import { CiTempHigh } from '../../Icons/Icons';

const Feelslike = () => {
    return (
        <div className='h-full w-1/3 rounded-3xl mx-5 bg-white flex flex-col items-center'>
            <div className='w-3/4 mt-5 flex justify-between '>
                <span className=' font-medium text-sm' >Feels Like</span>
                <div className='ic text-white h-6 w-6 rounded-lg flex items-center justify-center'><CiTempHigh /></div>
            </div>
            <div className='flex justify-center w-3/4 mt-1'>
                <span className=' font-semibold text-lg'>30<span className='font-light'>&#176;</span></span>
            </div>
            <div className='flex justify-between w-3/4 mt-2 mb-10'>
                <div className='flex flex-col h-8 w-full'>
                    <div className='flex justify-between w-full'>
                        <span className=' font-extralight text-xs'>0<span className='font-light'>&#176;</span></span>
                        <span className=' font-extralight text-xs'>25<span className='font-light'>&#176;</span></span>
                        <span className=' font-extralight text-xs'>50<span className='font-light'>&#176;</span></span>
                    </div>
                    <div className='bg-gray-200 h-2 mt-1 w-full rounded-2xl'>
                        <div className='b rounded-2xl h-full w-3/5 rounded-e-none'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feelslike;