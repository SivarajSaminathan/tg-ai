import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black text-white text-left py-16'>
            <div className='max-w-[1240px] mx-auto px-4 flex justify-between flex-col lg:flex-row gap-5'>
                <div className='lg:w-1/4'>
                    <h3 className='font-bold text-xl border-b-4 border-[#c72c2c] inline-block mt-4'>Our Info</h3>
                    <ul>
                        <p>With our innovative and insightful technology, we strive to enhance our users every day experiences by providing big picture insights and solutions for organisations of all sizes.</p>
                    </ul>
                </div>
                <div className="w-1/2 flex flex-col md:flex-row">
                    <div className='lg:w-1/2'>
                        <h3 className='font-bold text-xl border-b-4 border-[#c72c2c] inline-block mt-4'>Quick Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="#">Our Service</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className='lg:w-1/2'>
                        <h3 className='font-bold text-xl border-b-4 border-[#c72c2c] inline-block mt-4'>Contact Info</h3>
                        <ul>
                            <li>187/1, First floor, Lawspet Main Road, Opposite To New Paris Mahal, Karuvadikuppam, Puducherry - 605008.</li>
                            <br />
                            <li>info@techygeeksit.com</li>
                            <br />
                            <li>+91 93421 49218</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer