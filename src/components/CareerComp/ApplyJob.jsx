import React from 'react'


const ApplyJob = () => {
    return (
        <>
            <div name='applyjob' className='w-full mt-0'>
                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-10 gap-y-16 px-4 pt-12 sm:pt-50 text-black'>
                    <div className='bg-gray-900 dark:bg-gray-900 rounded-xl shadow-2xl'>
                        <div className='p-8 text-white'>
                            <h5 className='font-bold'>INDIA | BENGALURU</h5>
                            <h3 className='font-bold text-2xl my-6'>Personal Insurance Business Analyst</h3>
                            <p className='text-xl font-medium'>Business & Technology Integration</p><br />
                            <p className='text-xl font-normal'>Business Area: Technology</p><br />
                            <p className='font-extralight'>Posted Within last 24hours</p>
                            <div className='text-center'>
                                <button className='bg-red-700 mt-3 px-4 py-2 rounded-lg text-white'><a href="/contact">Apply Now</a></button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-900 dark:bg-gray-900 rounded-xl shadow-2xl'>
                        <div className='p-8 text-white'>
                            <h5 className='font-bold'>INDIA | BENGALURU</h5>
                            <h3 className='font-bold text-2xl my-6'>ESRI ArcGIS Software Product Development Lead</h3>
                            <p className='text-xl font-medium'>Software Engineering</p><br />
                            <p className='text-xl font-normal'>Business Area: Technology</p><br />
                            <p className='font-extralight'>Posted Within last 24hours</p>
                            <div className='text-center'>
                                <button className='bg-red-700 mt-3 px-4 py-2 rounded-lg text-white'><a href="/contact">Apply Now</a></button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-900 dark:bg-gray-900 rounded-xl shadow-2xl'>
                        <div className='p-8 text-white'>
                        <h5 className='font-bold'>INDIA | BENGALURU</h5>
                            <h3 className='font-bold text-2xl my-6'>Oracle Engineered Systems Database Administrator</h3>
                            <p className='text-xl font-medium'>Software Engineering</p><br />
                            <p className='text-xl font-normal'>Business Area: Technology</p><br />
                            <p className='font-extralight'>Posted Within last 24hours</p>
                            <div className='text-center'>
                                <button className='bg-red-700 mt-3 px-4 py-2 rounded-lg text-white'><a href="/contact">Apply Now</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApplyJob