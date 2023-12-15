import React from 'react'
import bgImg1 from '../../assets/Team/team1.jpg'
import bgImg2 from '../../assets/Team/team2.jpg'
import bgImg3 from '../../assets/Team/team3.jpg'
import bgImg4 from '../../assets/Team/team4.jpg'
import bgImg5 from '../../assets/Team/team5.jpg'
import bgImg6 from '../../assets/Team/team6.jpg'

const Team = () => {
    return (
        <>
            <div className="bg-black py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our leadership</h2>
                        <p className="mt-6 text-lg leading-8 text-white">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        <li>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={bgImg1} alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-white">Leslie Alexander</h3>
                                        <p className="text-sm font-semibold leading-6 text-red-700">Co-Founder / CEO</p>
                                    </div>
                            </div>
                        </li>

                        <li>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={bgImg2} alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-white">Michael Foster</h3>
                                        <p className="text-sm font-semibold leading-6 text-red-700">Co-Founder / CTO</p>
                                    </div>
                            </div>
                        </li>

                        <li>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={bgImg3} alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-white">Dries Vincent</h3>
                                        <p className="text-sm font-semibold leading-6 text-red-700">Business Relations</p>
                                    </div>
                            </div>
                        </li>

                        <li>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={bgImg4} alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-white">Lindsay Walton</h3>
                                        <p className="text-sm font-semibold leading-6 text-red-700">Front-end Developer</p>
                                    </div>
                            </div>
                        </li>

                        <li>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={bgImg5} alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-white">Courtney Henry</h3>
                                        <p className="text-sm font-semibold leading-6 text-red-700">Designer</p>
                                    </div>
                            </div>
                        </li>

                        <li>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={bgImg6} alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-white">Tom Cook</h3>
                                        <p className="text-sm font-semibold leading-6 text-red-700">Director of Product</p>
                                    </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>

        </>
    )
}

export default Team