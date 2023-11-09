import React from 'react'

const ServSociProf = props => {
    return (
        <section className="bg-black">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl text-white font-extrabold">{props.value1}</dt>
                        <dd className="font-light text-white dark:text-gray-400">{props.text1}</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl text-white font-extrabold">{props.value2}</dt>
                        <dd className="font-light text-white dark:text-gray-400">{props.text2}</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl text-white font-extrabold">{props.value3}</dt>
                        <dd className="font-light text-white dark:text-gray-400">{props.text3}</dd>
                    </div>
                </dl>
            </div>
        </section>
    )
}

export default ServSociProf