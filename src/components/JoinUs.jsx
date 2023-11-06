import React from 'react'

const JoinUs = () => {
  return (
    <div className='w-full px-4 py-16  text-white text-center'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl text-white font-bold py-2'>Join Our RedBox Community</h1>
        <div className='bg-white rounded-3xl inline-flex'>
            <input className='p-3 rounded-3xl mr-4 text-black bg-white focus:outline-none' type="email" placeholder='Enter your email' />
            <button className='btn rounded-full border-none outline-none text-white'>Join Us</button>
        </div>
        <div className='flex items-center justify-center py-2'>
            <input className='mr-2' type="checkbox" />
            <p>Yes, I agree to receive email communications from RedBox.</p>
        </div>
    </div>
  )
}

export default JoinUs