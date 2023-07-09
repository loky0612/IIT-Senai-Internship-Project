import React from 'react';
import { IoUmbrellaOutline } from '../../Icons/Icons';

const Changeofrain = () => {
    return (
        <div className='h-full w-1/3 rounded-3xl bg-white flex flex-col items-center'>
            <div className='w-3/4 mt-5 flex justify-between '>
                <span className=' font-medium text-sm' >Change of rain</span>
                <div className='ic text-white h-6 w-6 rounded-lg flex items-center justify-center'><IoUmbrellaOutline /></div>
            </div>
            <div className='flex justify-center w-3/4 mt-1'>
                <span className=' font-semibold text-lg'>42%</span>
            </div>
            <div className='flex justify-between w-3/4 mt-2 mb-10'>
                <div className='flex flex-col h-8 w-full'>
                    <div className='flex justify-between w-full'>
                        <span className=' font-extralight text-xs'>0%</span>
                        <span className=' font-extralight text-xs'>25%</span>
                        <span className=' font-extralight text-xs'>50%</span>
                        <span className=' font-extralight text-xs'>75%</span>
                        <span className=' font-extralight text-xs'>100%</span>
                    </div>
                    <div className='bg-gray-200 h-2 mt-1 w-full rounded-2xl'>
                        <div className='b rounded-2xl h-full w-2/5 rounded-e-none'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Changeofrain;