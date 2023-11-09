import React from 'react'

const ServHero = props => {
  return (
            <div name='home' className='w-full h-screen bg-black flex flex-col justify-between'>
                <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                    <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                        <h1 className='py-3 text-5xl md:text-6xl font-bold text-white'>{props.heading}{/*IMAGE ANNOTATION SERVICES*/}</h1>
                        <p className='text-xl text-white'>{props.text}{/*We delivers stellar image annotation services that power AI, machine learning, and data operation strategies.*/}</p>
                    </div>
                    <div>
                        <img className='w-full' src={props.img} alt="/" />
                    </div>
                </div>
            </div>
  )
}

export default ServHero