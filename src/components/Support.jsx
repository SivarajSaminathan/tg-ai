import React from 'react'

import { CubeIcon, } from '@heroicons/react/outline'
import { SupportIcon, ServerIcon} from '@heroicons/react/solid'

import supportImg from '../assets/support.jpg'

const Support = () => {
  return (
<div name='support' className='w-full mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
              <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
              <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
              <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <CubeIcon className='w-16 p-4 bg-red-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>SENTIMENTAL ANALYSIS</h3>
                      <p className='text-gray-600 text-xl'>Sentiment analysis can process vast amount of text to understand how humans speak, identify words and grammar, extracting human interactions at a faster pace.</p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <SupportIcon className='w-16 p-4 bg-red-700 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>CHAT BOTS</h3>
                      <p className='text-gray-600 text-xl'>Understand user attitude, requirements, and emotions using AI techniques such as computational linguistics and natural language processing.</p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <ServerIcon className='w-16 p-4 bg-red-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>OPTICAL CHARACTER RECOGNITION</h3>
                      <p className='text-gray-600 text-xl'>Enable quick and easy verification of codes, optical character and object with Digital Image processing that ensures reliable identification.</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  )
}

export default Support