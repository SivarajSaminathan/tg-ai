import React from 'react'

const ASSection = () => {
  return (
    <div name='ASSection' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Trusted by developers across the world</h2>
                <p className='text-3xl py-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque asperiores earum placeat veritatis dignissimos itaque.</p>
            </div>

            <div className='grid md:grid-cols-3 gap-10 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-red-700'>721</p>
                    <p className='text-gray-400 mt-2'>Completed Projects</p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-red-700'>48</p>
                    <p className='text-gray-400 mt-2'>Expert Employees</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-red-700'>51</p>
                    <p className='text-gray-400 mt-2'>Awards Won</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ASSection