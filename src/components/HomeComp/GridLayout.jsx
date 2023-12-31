import React from 'react'

import BoraBora from '../../assets/borabora.jpg';
import BoraBora2 from '../../assets/borabora2.jpg';
import Maldives from '../../assets/maldives.jpg';
import Maldives2 from '../../assets/maldives2.jpg';
import KeyWest from '../../assets/keywest.jpg';

const GridLayout = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <p className='text-red-700 font-bold '>DATA ANALYTICS DASHBOARD</p>
        <h1 className='md:text-4xl sm:text-3xl text-2xl text-white font-bold py-2'>Manage Data Analytics Centrally</h1>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={BoraBora} alt="/" />
            <img className='w-full h-full object-cover' src={BoraBora2} alt="/" />
            <img className='w-full h-full object-cover' src={Maldives} alt="/" />
            <img className='w-full h-full object-cover' src={KeyWest} alt="/" />
            <img className='w-full h-full object-cover' src={Maldives2} alt="/" />
        </div>
    </div>
  )
} 

export default GridLayout