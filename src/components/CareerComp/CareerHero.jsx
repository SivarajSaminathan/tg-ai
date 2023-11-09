import React from 'react'
import careerimg from '../../assets/Career/career.png'

const CareerHero = () => {
    return (
    <>
            <section className="bg-black">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <img className="w-full dark:hidden" src={careerimg} alt="dashboard image" />
                        <img className="w-full hidden dark:block" src={careerimg} alt="dashboard image" />
                            <div className="mt-4 md:mt-0">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">Get ready to start your TechyGeeks journey</h2>
                                <p className="mb-6 font-light text-gray-300 md:text-lg dark:text-gray-400">Find answers to frequently asked questions, learn about our hiring process and get tips on how to apply and prepare for your role doing incredible things and creating long-lasting value.</p>
                                <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-red-700 dark:focus:ring-gray-800">Get Started
                                </a>
                            </div>
                        </div>
                    </section>
                </>
                )
}

                export default CareerHero