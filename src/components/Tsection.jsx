import React from 'react'
import terminal from '../assets/terminal.jpg'

const Tsection = () => {
  return (
    <div className='w-full text-white bg-black'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 md:flex gap-4'>
        <div>
          <h1 className='md:text-4xl sm:text-3xl text-2xl text-white font-bold py-2'>Superpowers for DEFI developers.</h1>
          <p className='text-white py-4 text-xl'>
            Checkout the <span className="red">documentation</span>, the <span className="red">quick start</span>  or a guide below to
            integrate your project with thousands of tokens and billions of
            liquidity.
          </p>
        </div>
        <div className={`flex justify-center rounded-3xl w-full`}>
            <img className='w-full max-w-md shadow-2xl rounded-3xl shadow-red-500/50' src={terminal} alt="ai-img" width={"100%"} height={"100%"} />
        </div>
      </div>
    </div>
  )
}

export default Tsection