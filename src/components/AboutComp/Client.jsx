import React from 'react'
import bgImg from '../../assets/transistor-logo.svg'
import bgImg1 from '../../assets/reform-logo.svg'
import bgImg2 from '../../assets/tuple-logo.svg'
import bgImg3 from '../../assets/savvycal-logo.svg'
import bgImg4 from '../../assets/statamic-logo.svg'

const Client = () => {
  return (
    <>
    <div className="bg-black py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <p className='text-red-700 text-center font-bold'>Our Clients</p>
    <h2 className="text-center text-lg font-semibold leading-8 text-white">Trusted by the world’s most innovative teams</h2>
    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      <img className='col-span-2 max-h-12 w-full object-contain lg:col-span-1' src={bgImg} alt="Transistor" width="158" height="48" />
      <img className='col-span-2 max-h-12 w-full object-contain lg:col-span-1' src={bgImg1} alt="Reform" width="158" height="48" />
      <img className='col-span-2 max-h-12 w-full object-contain lg:col-span-1' src={bgImg2} alt="Tuple" width="158" height="48" />
      <img className='col-span-2 max-h-12 w-full object-contain lg:col-span-1' src={bgImg3} alt="savvycal" width="158" height="48" />
      <img className='col-span-2 max-h-12 w-full object-contain lg:col-span-1' src={bgImg4} alt="statamic" width="158" height="48" />
    </div>
    </div>
    </div>
    </>
  )
}

export default Client