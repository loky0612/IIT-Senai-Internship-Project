import React from 'react';
import { MdAddBox } from '../Icons/Icons';
import '../App.css';


const Options = () => {
    return (
        <div className='opt ml-7 mt-6 h-9 w-4/5 flex items-center justify-between'>
            <div className='add'>
                <MdAddBox className='t text-3xl text-white' />
            </div>
            <div className='scroll pt-1 pl-3 ml-6 flex'>
                <div className='bg-white w-5 h-2 rounded-lg'></div>
                <div className='w-2 h-2 ml-1 bg-gray-300 rounded-full'></div>
                <div className='w-2 h-2 ml-1 bg-gray-300 rounded-full'></div>
            </div>
            <div className='flex ml-3'>
                <div>
                    <span className='text-white font-semibold text-sm'><span className="font-light">&#176;</span>C</span>
                </div>
                <div className='switch ml-2 mt-1'>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider"></span>
                    </label>
                </div>
                <div className='ml-2'>
                    <span className='text-white font-semibold text-sm '><span className="font-light">&#176;</span>F</span>
                </div>
            </div>
        </div>
    );
};

export default Options;
