import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black text-white text-left py-16'>
            <div className='max-w-[1240px] mx-auto px-4 flex justify-between flex-col lg:flex-row gap-5'>
                <div className='lg:w-full'>
                    <h3 className='font-bold text-xl border-b-4 border-[#c72c2c] inline-block mt-4'>Our Info</h3>
                    <ul>
                        <p>With our innovative and insightful technology, we strive to enhance our users every day experiences by providing big picture insights and solutions for organisations of all sizes.</p>
                    </ul>
                </div>
                    <div className='md:w-full'>
                        <div className="flex lg:justify-center">

                        <h3 className='font-bold text-xl border-b-4 border-[#c72c2c] mt-4'>Quick Links</h3>
                        </div>
                        <ul className='lg:text-center'>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                     
                    </div>
                    <div className="md:w-full">
                    <h3 className='font-bold text-xl border-b-4 border-[#c72c2c] inline-block mt-4'>Our Services</h3>
                        <ul>
                            <li><a href="#">Image Annotation</a></li>
                            <li><a href="#">Video Annotation</a></li>
                            <li><a href="#">Text Annotation</a></li>
                            <li><a href="#">Audio Transcription</a></li>
                            <li><a href="#">Sentiment Analysis</a></li>
                            <li><a href="#">Content Moderation</a></li>
                            <li><a href="#">Product Categorization</a></li>
                            <li><a href="#">Image Segmentation</a></li>
                            <li><a href="#">Lidar Annotation</a></li>
                        </ul>
                    </div>
                    <div className='md:w-full'>
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
    )
}

export default Footer