import React from 'react'
import bgImg from '../assets/cyber-bg.png'

const AHero = () => {
  return (
    <div name='home' className='w-full h-screen bg-black flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <h1 className='py-3 text-5xl md:text-7xl font-bold text-white'>About Us</h1>
                <p className='text-2xl'>This is our Tech brand</p>
            </div>
            <div>
                <img className='w-full' src={bgImg} alt="/" />
            </div>
            
        </div>
    </div>
  )
}

export default AHero