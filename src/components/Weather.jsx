import React from 'react'
import Options from './Options';
import newyork from '../Images/newyork.png';
import '../App.css'
import Country from './Country';
import Degree from './Degree';


const Weather = () => {
  return (
    <div className='box w-5/6 h-5/6 flex'>
      <div className='min w-1/4 h-full rounded-3xl flex flex-col'>
        <Options />
        <Country/>
        <Degree/>
        <div className='w-full'>
          <img className='i newyork w-full ' src={newyork} alt='newyork' />
        </div>
      </div>
      <div className='main w-3/4 h-full bg-blue-50 rounded-3xl'>
        
      </div>
    </div>
  )
}

export default Weather;