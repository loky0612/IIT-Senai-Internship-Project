import React from 'react';
import { LiaSun } from '../../Icons/Icons';

const Uv = () => {
    return (
        <div className='h-full w-1/3 rounded-3xl bg-white flex flex-col items-center'>
            <div className='w-3/4 mt-5 flex justify-between '>
                <span className=' font-medium text-sm' >UV index</span>
                <div className='ic text-white h-6 w-6 rounded-lg flex items-center justify-center'><LiaSun /></div>
            </div>
            <div className='flex justify-center w-3/4 mt-1'>
                <span className=' font-semibold text-lg'>4 <span className='text-sm font-light'>medium</span></span>
            </div>
            <div className='flex w-3/4 justify-between mt-2 mb-10'>
                <div className='flex flex-col h-8 w-8'>
                    <span className=' font-extralight text-xs'>0-2</span>
                    <span className='b h-2 mt-1 w-8 rounded-2xl'></span>
                </div>
                <div className='flex flex-col h-8 w-8'>
                    <span className=' font-extralight text-xs'>3-5</span>
                    <span className=' bg-gray-200 h-2 mt-1 w-8 rounded-2xl'></span>
                </div>
                <div className='flex flex-col h-8 w-8'>
                    <span className=' font-extralight text-xs'>6-7</span>
                    <span className=' bg-gray-200 h-2 mt-1 w-8 rounded-2xl'></span>
                </div>
                <div className='flex flex-col h-8 w-8 '>
                    <span className=' font-extralight text-xs'>8-10</span>
                    <span className='bg-gray-200 h-2 mt-1 w-8 rounded-2xl'></span>
                </div>
                <div className='flex flex-col h-8 w-8'>
                    <span className=' font-extralight text-xs'>11+</span>
                    <span className='bg-gray-200 h-2 mt-1 w-8 rounded-2xl'></span>
                </div>
            </div>
        </div>
    )
}

export default Uv