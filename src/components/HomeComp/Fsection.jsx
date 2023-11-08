import React from 'react'
import Laptop from '../../assets/laptop.jpg';

const Fsection = () => {
  return (
    <div className='w-full bg-black py-16 px-4'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
      <div className='flex flex-col justify-center items-start'>
        <p className='text-red-700 font-bold '>DATA ANALYTICS DASHBOARD</p>
        <h1 className='md:text-4xl sm:text-3xl text-2xl text-white font-bold py-2'>Manage Data Analytics Centrally</h1>
        <p className='text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          molestiae delectus culpa hic assumenda, voluptate reprehenderit
          dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
          eveniet ex deserunt fuga?
        </p> <br />
        <p className='text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          molestiae delectus culpa hic assumenda, voluptate reprehenderit
          dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
          eveniet ex deserunt fuga?
        </p>
        <button className='bg-red-700 mt-3 px-4 py-2 rounded-lg text-white'>Read more</button>
      </div>
    </div>
  </div>

  )
}

export default Fsection