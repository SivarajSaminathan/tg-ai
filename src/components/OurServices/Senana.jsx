import React from 'react'
import bgImg from '../../assets/SegAnna/Senanaly-Hero.jpg'
import bgImg2 from '../../assets/SegAnna/senanno-2.jpg'
import bgImg3 from '../../assets/SegAnna/senanno-3.jpg'
import bgImg4 from '../../assets/SegAnna/seg-4.png'
import bgImg10 from '../../assets/SegAnna/seg-4.png'
import bgImg11 from '../../assets/SegAnna/seg-1.png'
import bgImg12 from '../../assets/SegAnna/seg-2.png'
import bgImg13 from '../../assets/SegAnna/seg-3.png'
import ServPara from '../ServiceComp/ServPara'
import ServHero from '../ServiceComp/ServHero'
import ServPrImg from '../ServiceComp/ServPrImg'
import Client from '../AboutComp/Client'
import ServSociProf from '../ServiceComp/ServSociProf'
import { ServIcon } from '../ServiceComp/ServIcon'
import { ArchiveIcon } from '@heroicons/react/outline'
import { CoinsIcon, DiameterIcon, Globe2Icon, HeartPulseIcon, ShoppingCartIcon } from 'lucide-react'
import ServBtn from '../ServiceComp/ServBtn'


export const Senana = () => {
    return (
        <>

            {/*Image Annotation Hero Section */}
        
            <ServHero img={bgImg} heading='SENTIMENT ANALYSIS SERVICES' text='We delivers stellar sentiment analysis services that power Artificial Intelligence, Machine Learning, and data operation strategies.'/>

            {/*Types Image Annotation Para Section */}

            <ServPara heading='IMPORTANCE OF SENTIMENT ANALYSIS SERVICES ' text='Sentiment analysis empowers companies to rapidly identify online chatter about their brands and subsequently categorize it as positive, negative, or neutral. This empowers brands to better measure marketing and PR campaigns, improve customer service, and identify successful product & service features to further expand upon.' />

            {/*Para & Image Section */}

            <ServPrImg img2={bgImg2} img3={bgImg3} heading='WHAT IS SENTIMENT ANALYSIS?' text1='So much of interpersonal communication goes beyond the words a person uses. Sentiment analysis comes naturally to us humans, as we learn to identify and navigate non-verbal cues, tones of voice, and general demeanors that effectively convey feelings of happiness, sadness, anger, and apathy. Online, these non-verbal cues manifest as emojis, punctuation, and images such as GIFs.' text2='Computers, by comparison, must be taught to understand the spectrum of human sentiment. Positive sentiment and negative sentiment can be subtle and need not have high polarity.' />

            {/*Image Annotation Services */}

            <section className="bg-black">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">SENTIMENT ANALYSIS SERVICES CHALLENGES</h2>
                        <p className="font-light text-gray-300 lg:mb-16 sm:text-xl dark:text-gray-400">Sentiment analysis is a challenging workflow and there are many nuances that need to be understood while undertaking these tasks.</p>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        <div className="items-center bg-gray-900 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={bgImg11} alt="Bonnie Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-red-700 dark:text-white">
                                    <a href="#">SARCASM DETECTION</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-gray-300 dark:text-gray-400">People often convey negative sentiments using positive words and phrases, leading to inaccurate sentiment analysis and therefore necessitating high-quality language comprehension and contextual analysis to accurately identify and prevent.</p>

                            </div>
                        </div>
                        <div className="items-center bg-gray-900 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={bgImg12} alt="Jese Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-red-700 dark:text-white">
                                    <a href="#">TEXT AMBIGUITY</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-gray-300 dark:text-gray-400">All text is subject to interpretation. For a text-processing application to be successful, it must be able to identify text ambiguity and effectively attach sentiment to it.</p>

                            </div>
                        </div>
                        <div className="items-center bg-gray-900 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={bgImg13} alt="Michael Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-red-700 dark:text-white">
                                    <a href="#">EMOTICON V/S EMOJI</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-gray-300 dark:text-gray-400">Emojis and emoticons can be used across a breadth of circumstances to convey sentiment. The ability to understand context and emoji/emoticon application is crucial to the success of sentiment analysis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Icons & Features Services */}

            <ServIcon 

            heading={'What Industries Need Image Annotation Services?'} 

            svgIcons1={ <ArchiveIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading1={'Autonomous Technology & Transportation'} 
            para1={'Image annotation services can help in the deployment of autonomous technology through labeling of images of a car’s environment.'} 
                        
            svgIcons2={ <HeartPulseIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading2={'Medical AI'} 
            para2={'Medical image annotation includes the labeling of medical imaging data to diagnose diseases and spot abnormalities.'}
                       
            svgIcons3={ <ShoppingCartIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading3={'Commerce'} 
            para3={'With image annotation in commerce, experts categorize e-commerce content by multiple attributes to improve search relevance and customer experience for online shopper'} 

            svgIcons4={ <DiameterIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading4={'Geospatial Technology'} 
            para4={'Image annotation tasks include extracting intelligence from satellite, aerial, and drone imagery to power applications in energy, agriculture, logistics, security and mapping.'}
                        
            svgIcons5={ <CoinsIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading5={'Finance & Insurance Tech'} 
            para5={'Image annotation experts extract and organize relevant material from vast sets of unstructured visual data to enable the automation of manual processes and streamlining of operations.'}

            svgIcons6={ <Globe2Icon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading6={'Government'} 
            para6={'Image annotation experts in the public sector offer a solution for sensitive data that requires processing at the federal, state, and local levels.'} 
                        
            />
                        
            {/*Socila Proofs*/}

            <ServSociProf value1='1M+' text1='Image Annotation'  value2='95%' text2='Accuracy' value3='100+' text3='Organizations' />

            {/*Client Section*/}

            <Client />

            {/*Features Sections*/}

            <section className="bg-black flex justify-center flex-col items-center w-full pl-16">
            <h2 className="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-white dark:text-white md:text-4xl">SENTIMENT ANALYSIS CASE STUDIES</h2>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={bgImg4} alt="" />
                </div>&nbsp;
                <div className="mr-auto place-self-center lg:col-span-5">
                    <h1 className="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl text-white dark:text-white">SENTIMENT ANALYSIS FOR A LARGE PRIVATE EQUITY FIRM</h1>
                        
                    <p className="max-w-xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        Client Profile: Large private equity firm
                        <br />
                        Client data type: Images of private equity firm reports
                        <br />    
                        Challenge: Building a training and validation dataset that precisely identifies and separates invaluable information from noise. As projects like this scale, so too does annotation complexity.
                        <br />
                        Volume: Over 10 million NLP data points
                        <br />
                        Outcome: The resulting pattern recognition was infused with true subject-matter expertise, and could effectively identify sentiment in the face of challenging discourse.</p>
                </div>
            </div>

            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-5">
                    <h1 className="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl text-white dark:text-white">SENTIMENT ANALYSIS FOR SPEECH RECOGNITION</h1>
                    <p className="max-w-xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Client Profile: Top speech recognition company
                        <br />
                        Client data type: Feedback and reviews from customers
                        <br />
                        Challenge: Annotating and identifying entities, sentiments, intents, and relationships in vast amounts of unstructured textual data like emails, reviews, customer interactions, and social media posts.
                        <br />
                        Outcome: Data was assembled to narrow the scope, context, and subject understanding to create a highly curated pipeline, with over 95% accuracy.</p>
                </div>&nbsp;
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={bgImg10} alt="" />
                </div>
            </div>

           

        </section>

            <ServBtn 
            
            headingf='GETTING STARTED WITH SENTIMENT ANALYSIS' 
            
            textf='The need for speed in high-quality sentiment analysis has never been greater. We combines the best predictive and automated transcription technology with world-class data annotation and subject matter experts to deliver the data you need to get to production, fast.' 
            
            btn='Talk To An Expect' 

            />

        </>
    )
}


