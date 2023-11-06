import React from 'react'
import { CheckIcon } from '@heroicons/react/solid';

const AFSection = () => {
    return (
<div name='pricing' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-2xl uppercase'>Services</h2>
          <h3 className='text-3xl font-bold text-white py-8'>DATA ANNOTATION SOLUTIONS FOR ENTERPRISE AI</h3>
          <p className='text-xl'>
          End-to-end data labeling platform with purpose-built applications and experts-in-the-loop to deliver high-quality at scale
          </p>
        </div>

        <div className='grid md:grid-cols-2'>

          <div className='bg-slate-900 text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <div>
              <p className='text-6xl font-bold py-4 flex text-red-700'>Use Case</p>
            </div>
            <p className='text-2xl py-8 text-white'>DATA LABELLING</p>
            <div className='text-2xl text-white'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-red-700'  />Autonomus Vehicles</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-red-700'  />Agri-Tech</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-red-700'  />Medical-Tech</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-red-700'  />Logi-Tech</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-red-700'  />Retail-Tech</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-red-700'  />Human Attributionred</p>
            </div>
          </div>
          <div className='bg-slate-900 text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <div>
              <p className='text-6xl font-bold py-4 flex text-red-700'>Annotation</p>
            </div>
            <p className='text-2xl py-8 text-white'>SOLUTION SERVICE</p>
            <div className='text-2xl text-white'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-red-700'  />Image Annotation</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-red-700'  />Video Annotation</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-red-700'  />Text Annotation</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-red-700'  />Data Annotation</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-red-700'  />Lidar Annotation</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-red-700'  />Audio Transcription</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default AFSection