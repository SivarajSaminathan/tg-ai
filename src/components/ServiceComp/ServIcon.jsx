export const ServIcon = (props) => {
    return (
    <section className="bg-black">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen mb-8">
                <h1 className='text-center text-4xl font-bold text-white'>{props.heading}</h1>
            </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-red-700 lg:h-12 lg:w-12 dark:bg-primary-900">
                {props.svgIcons1}
            </div>
            <h3 className="mb-2 text-xl font-bold text-white dark:text-white">{props.heading1}</h3>
            <p className="text-white dark:text-gray-400">{props.para1}</p>
            </div>
            <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-red-700 lg:h-12 lg:w-12 dark:bg-primary-900">
            {props.svgIcons2}
            </div>
            <h3 className="mb-2 text-xl font-bold text-white dark:text-white">{props.heading2}</h3>
            <p className="text-white dark:text-gray-400">{props.para2}</p>
            </div>
            <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-red-700 lg:h-12 lg:w-12 dark:bg-primary-900">
                {props.svgIcons3}
            </div>
            <h3 className="mb-2 text-xl font-bold text-white dark:text-white">{props.heading3}</h3>
            <p className="text-white dark:text-gray-400">{props.para3}</p>
            </div>
            <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-red-700 lg:h-12 lg:w-12 dark:bg-primary-900">
                {props.svgIcons4}
            </div>
            <h3 className="mb-2 text-xl font-bold text-white dark:text-white">{props.heading4}</h3>
            <p className="text-white dark:text-gray-400">{props.para4}</p>
            </div>
            <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-red-700 lg:h-12 lg:w-12 dark:bg-primary-900">
                {props.svgIcons5}
            </div>
            <h3 className="mb-2 text-xl font-bold text-white dark:text-white">{props.heading5}</h3>
            <p className="text-white dark:text-gray-400">{props.para5}</p>
            </div>
            <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-red-700 lg:h-12 lg:w-12 dark:bg-primary-900">
                {props.svgIcons6}
            </div>
            <h3 className="mb-2 text-xl font-bold text-white dark:text-white">{props.heading6}</h3>
            <p className="text-white dark:text-gray-400">{props.para6}</p>
            </div>

        </div>
        </div>

    </section>

    )
}
