import React from 'react';
import profile from '../Images/profile.png';

const Header = () => {
    return (
        <div className='header w-full h-1/6 flex justify-between items-center'>
            <div className='welcome flex flex-col px-12'>
                <span className=' font-semibold'>Welcome back Isabella !</span>
                <span className=' text-sm'>Check out today's weather information</span>
            </div>
            <div className='scroll flex px-12 items-center'>
                <div className='w-1 h-1 ml-1 bg-black rounded-full'></div>
                <div className='w-1 h-1 ml-1 bg-black rounded-full'></div>
                <div className='w-1 h-1 ml-1 bg-black rounded-full'></div>
                <img className='rounded-xl m-5 w-9 h-9' src={profile} alt='profile'/>
            </div>
        </div>
    )
}

export default Header;