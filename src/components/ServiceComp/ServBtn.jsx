import React from 'react'

const ServBtn = props => {
    return (

        <section className="bg-black flex justify-center flex-col items-center w-full pl-16">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 className="mb-4 text-3xl tracking-tight font-bold text-white dark:text-white">{props.headingf}</h2>
                <p className="font-light text-white lg:mb-16 sm:text-xl dark:text-gray-400">{props.textf}</p>
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-red-700 dark:focus:ring-gray-800">{props.btn}</a>
            </div>
        </div>
        </section>

    )
}


export default ServBtn