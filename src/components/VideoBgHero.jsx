import React from 'react'
import videoBg from '../assets/videoBg2.mp4'
import Typed from 'react-typed';

const VideoBgHero = () => {
    return (
        <div className='main'>
            <div className="overlay"></div>
            <video src={videoBg} autoPlay loop muted />
            <div className="content">
                <div className='max-w-[800px] mt-[-10px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                    <p className='text-[#c72c2c] font-bold p-2'>
                        Ultimate Data Labeling Platform
                    </p>
                    <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-6'>
                        Deliver delightful service experience powered by AI
                    </h1>
                    <div className='flex justify-center items-center'>
                        <Typed
                            className='md:text-3xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                            strings={['Autonomous Vehicles AI', 'Agri-Tech Annotation AI', 'Logistics Annotation AI', 'Medical Data Annotation']}
                            typeSpeed={120}
                            backSpeed={140}
                            loop
                        />
                    </div>
                    <button className='bg-[#c72c2c] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
                </div>
            </div>
        </div>
    )
}


export default VideoBgHero