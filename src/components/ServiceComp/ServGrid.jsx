import React from 'react'

const ServGrid = props => {
  return (
    
    <section className="bg-black">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">{props.heading}{/*Image Annotation Services*/}</h2>
                        <p className="font-light text-white lg:mb-16 sm:text-xl dark:text-gray-400">{props.text}{/*Explore the whole collection of open-source web components and elements built with the utility classNamees from Tailwind*/}</p>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        <div className="items-center bg-gray-900 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={props.img12} alt="Bonnie Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">{props.heading1}</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-white dark:text-gray-400">{props.text1}</p>

                            </div>
                        </div>
                        <div className="items-center bg-gray-900 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={props.img11} alt="Jese Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">{props.heading2}</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-white dark:text-gray-400">{props.text2}</p>

                            </div>
                        </div>
                        <div className="items-center bg-gray-900 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={props.img13} alt="Michael Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">{props.heading3}</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-white dark:text-gray-400">{props.text3}</p>
                            </div>
                        </div>
                        <div className="items-center bg-gray-900 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={props.img14} alt="Michael Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">{props.heading4}</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-white dark:text-gray-400">{props.text4}</p>
                            </div>
                        </div>
                        <div className="items-center bg-gray-900 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={props.img15} alt="Michael Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">{props.heading5}</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-white dark:text-gray-400">{props.text5}</p>
                            </div>
                        </div>
                        <div className="items-center bg-gray-900 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={props.img16} alt="Sofia Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">{props.heading6}</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-white dark:text-gray-400">{props.text6}</p>
                            </div>
                        </div>
                        <div className="items-center bg-gray-900 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={props.img17} alt="Michael Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">{props.heading7}</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-white dark:text-gray-400">{props.text7}</p>
                            </div>
                        </div>
                        <div className="items-center bg-gray-900 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={props.img18} alt="Sofia Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">{props.heading8}</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-white dark:text-gray-400">{props.text8}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


  )
}


export default ServGrid