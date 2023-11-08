import React from 'react'
import careerimg1 from '../../assets/Career/career-1.png'
import careerimg2 from '../../assets/Career/career-2.png'
import careerimg3 from '../../assets/Career/career-3.png'
import careerimg4 from '../../assets/Career/career-4.png'

const ExploreJob = () => {
    return (
        <>

            {/*Image Annotation Services */}

            <section className="bg-black">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Image Annotation Services</h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classNamees from Tailwind</p>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={careerimg1} alt="Bonnie Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Accelerating equality for all</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Through our commitment to inclusion and diversity, we’re creating a culture where everyone can thrive and advance.</p>

                            </div>
                        </div>
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={careerimg2} alt="Jese Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Building a more sustainable world</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">We’re making sustainability one of our greatest responsibilities, embedding it into everything we do.</p>

                            </div>
                        </div>
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={careerimg3} alt="Michael Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Driving change for our people, clients and communities</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">See why we’re recognized as a great employer, global leader and corporate citizen.</p>
                            </div>
                        </div>
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={careerimg4} alt="Sofia Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Experienced Professionals</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Take your expertise to the next level as you innovate with the biggest clients to solve their biggest challenges.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ExploreJob