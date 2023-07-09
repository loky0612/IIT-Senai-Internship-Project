import React from 'react';
import { BiWind } from '../../Icons/Icons';
import '../../App.css';
import speed from '../../Images/speed.png';

const Wind = () => {
    return (
        <div className='h-full w-1/3 rounded-3xl mx-5 bg-white flex flex-col items-center'>
            <div className='w-3/4 mt-5 flex justify-between '>
                <span className=' font-medium text-sm' >Wind</span>
                <div className='ic text-white h-6 w-6 rounded-lg flex items-center justify-center'><BiWind /></div>
            </div>
            <div className='pb-10'>
                <img src={speed} width={140} height={140} alt=''/>
            </div>
        </div>
    )
}

export default Wind;