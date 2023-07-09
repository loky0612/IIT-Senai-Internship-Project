import React from 'react'
import { LiaCloudRainSolid } from '../../Icons/Icons';
const Precipitation = () => {
    return (
        <div className='h-full w-1/3 rounded-3xl bg-white flex flex-col items-center'>
            <div className='w-3/4 mt-5 flex justify-between '>
                <span className=' font-medium text-sm' >Precipitation</span>
                <div className='ic text-white h-6 w-6 rounded-lg flex items-center justify-center'><LiaCloudRainSolid /></div>
            </div>
            <div className='flex justify-center w-3/4 mt-1'>
                <span className=' font-semibold text-lg'>1.4 cm</span>
            </div>
            <div className='flex w-3/4 justify-between mt-2 mb-10'>
                <div className='flex flex-col h-8 w-4'>
                    <span className=' font-extralight text-xs'>0</span>
                    <span className='b h-2 mt-1 w-4 rounded-2xl'></span>
                </div>
                <div className='flex flex-col h-8 w-4'>
                    <span className=' font-extralight text-xs'>10</span>
                    <div className='bg-gray-200 h-2 mt-1 w-full rounded-2xl'>
                        <div className='b rounded-2xl h-full w-3/5 rounded-e-none'></div>
                    </div>
                </div>
                <div className='flex flex-col h-8 w-4'>
                    <span className=' font-extralight text-xs'>20</span>
                    <span className=' bg-gray-200 h-2 mt-1 w-4 rounded-2xl'></span>
                </div>
                <div className='flex flex-col h-8 w-4 '>
                    <span className=' font-extralight text-xs'>30</span>
                    <span className='bg-gray-200 h-2 mt-1 w-4 rounded-2xl'></span>
                </div>
                <div className='flex flex-col h-8 w-4'>
                    <span className=' font-extralight text-xs'>40</span>
                    <span className='bg-gray-200 h-2 mt-1 w-4 rounded-2xl'></span>
                </div>
                <div className='flex flex-col h-8 w-4 '>
                    <span className=' font-extralight text-xs'>50</span>
                    <span className='bg-gray-200 h-2 mt-1 w-4 rounded-2xl'></span>
                </div>
                <div className='flex flex-col h-8 w-4 '>
                    <span className=' font-extralight text-xs'>60</span>
                    <span className='bg-gray-200 h-2 mt-1 w-4 rounded-2xl'></span>
                </div>
                <div className='flex flex-col h-8 w-4 '>
                    <span className=' font-extralight text-xs'>70</span>
                    <span className='bg-gray-200 h-2 mt-1 w-4 rounded-2xl'></span>
                </div>
                <div className='flex flex-col h-8 w-4'>
                    <span className=' font-extralight text-xs'>80</span>
                    <span className='bg-gray-200 h-2 mt-1 w-4 rounded-2xl'></span>
                </div>
                <div className='flex flex-col h-8 w-4 '>
                    <span className=' font-extralight text-xs'>90</span>
                    <span className='bg-gray-200 h-2 mt-1 w-4 rounded-2xl'></span>
                </div>
            </div>
        </div>
    )
}

export default Precipitation