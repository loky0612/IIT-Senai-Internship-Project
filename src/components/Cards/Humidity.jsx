import React from 'react';
import { MdOutlineWaterDrop } from '../../Icons/Icons';
import '../../App.css';

const Humidity = () => {
    return (
        <div className='h-full w-1/3 rounded-3xl bg-white flex flex-col items-center'>
            <div className='w-3/4 mt-5 flex justify-between '>
                <span className=' font-medium text-sm' >Humidity</span>
                <div className='ic text-white h-6 w-6 rounded-lg flex items-center justify-center'><MdOutlineWaterDrop /></div>
            </div>
            <div className='flex justify-center w-3/4 mt-1'>
                <span className=' font-semibold text-lg'>82%<span className=' font-light p-2 text-center text-sm'>bad</span></span>
            </div>
            <div className='flex justify-between w-3/4 mt-2 mb-10'>
                <div className='flex flex-col h-8 w-2/6'>
                    <span className=' font-extralight text-xs'>good</span>
                    <span className='b h-2 mt-1 w-full rounded-2xl'></span>
                </div>
                <div className='flex flex-col h-8 w-2/6 mx-3'>
                    <span className=' font-extralight text-xs'>normal</span>
                    <span className='b h-2 mt-1 w-full rounded-2xl'></span>
                </div>
                <div className='flex flex-col h-8 w-2/6'>
                    <span className=' font-extralight text-xs'>bad</span>
                    <div className='bg-gray-200 h-2 mt-1 w-full rounded-2xl'>
                        <div className='b rounded-2xl h-full w-2/5 rounded-e-none'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Humidity;