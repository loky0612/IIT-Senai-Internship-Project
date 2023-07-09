import React from 'react'
import Humidity from './Cards/Humidity';
import Wind from './Cards/Wind';
import Precipitation from './Cards/Precipitation';
import '../App.css';
import Uv from './Cards/Uv';
import Feelslike from './Cards/Feelslike';
import Changeofrain from './Cards/Changeofrain';

const MoreDetails = () => {
    return (
        <div className='flex justify-center items-center mt-7 h-3/6 w-full'>
            <div className='more h-full rounded-3xl'>
                <div className='welcome flex flex-col '>
                    <span className=' font-semibold'>More details of today's weather</span>
                </div>
                <div className='card flex w-full  mt-7 '>
                    <Humidity />
                    <Wind/>
                    <Precipitation/>
                </div>
                <div className='card flex w-full mt-8'>
                    <Uv/>
                    <Feelslike/>
                    <Changeofrain/>
                </div>
            </div>
        </div>
    )
}

export default MoreDetails;