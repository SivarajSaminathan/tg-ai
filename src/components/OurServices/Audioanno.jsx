import React from 'react'
import bgImg from '../../assets/AudAnno/Aud-Hero.gif'
import bgImg2 from '../../assets/AudAnno/Audanno-2.jpg'
import bgImg3 from '../../assets/AudAnno/Audanno-3.jpg'
import bgImg4 from '../../assets/AudAnno/Auds-1.jpg'
import bgImg10 from '../../assets/AudAnno/Auds-2.jpg'
import bgImg11 from '../../assets/AudAnno/Aud-1.jpg'
import bgImg12 from '../../assets/AudAnno/Aud-2.jpg'
import bgImg13 from '../../assets/AudAnno/Aud-3.jpg'
import bgImg14 from '../../assets/AudAnno/Aud-4.jpg'
import ServHero from '../ServiceComp/ServHero'
import ServPara from '../ServiceComp/ServPara'
import ServPrImg from '../ServiceComp/ServPrImg'
import Client from '../AboutComp/Client'
import ServSociProf from '../ServiceComp/ServSociProf'
import { ServIcon } from '../ServiceComp/ServIcon'
import { ArchiveIcon } from '@heroicons/react/outline'
import { CoinsIcon, DiameterIcon, Globe2Icon, HeartPulseIcon, ShoppingCartIcon } from 'lucide-react'
import ServBtn from '../ServiceComp/ServBtn'

const Audioanno = (props) => {
    return (
        <>
            {/*Image Annotation Hero Section*/}


            <ServHero img={bgImg} heading='AUDIO TRANSCRIPTION SERVICES' text='We delivers stellar audio transcription services that power artificial intelligence, machine learning, and data operation strategies.' />


            {/*Types Image Annotation Para Section */}

            <ServPara heading=' TYPES OF AUDIO TRANSCRIPTION' text='iMerit’s experts convert audio material into text and organize the information into formats that machines and computers can understand. The text data can then be labeled to cater to a client’s project needs, and tasks including Named Entity Recognition (NER) and Entity Classification, Sentiment and Topic Analysis, and Intent And Conversation Analysis are performed. iMerit’s team works with the client to calibrate their quality and throughput requirements and builds custom processes to support client needs.' />

            {/*Para & Image Section */}

            <ServPrImg img2={bgImg2} img3={bgImg3} heading='WHAT IS AUDIO TRANSCRIPTION?' text1='Audio transcription is the process of making sound and speech recognizable to applications such as chatbots and virtual assistant devices, using Machine Learning and Artificial Intelligence models. Audio transcription models form the backbone of many applications that aim to mimic or augment human interaction.' text2='iMerit’s audio transcription specialists transform datasets in English and other languages into text that can be personalized to the point where an end-user may believe that they are communicating with a human on the other end.' />

            {/*Image Annotation Services */}

            <section className="bg-black">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">AUDIO TRANSCRIPTION SOLUTION{/*Image Annotation Services*/}</h2>
                        <p className="font-light text-white lg:mb-16 sm:text-xl dark:text-white">iMerit’s expert team can transcribe audio to text, and then perform nuanced annotations upon the text datasets, providing highly-accurate transcriptions with a rapid turnaround time.{/*Explore the whole collection of open-source web components and elements built with the utility classNamees from Tailwind*/}</p>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        <div className="items-center bg-gray-900 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={bgImg11} alt="Bonnie Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">TEXT TRANSCRIPTION</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-white dark:text-gray-400">We can transcribe audio recordings of varying quality while handling confounding factors such as background noise that make for less than high quality audio. An We expert-in-the-loop annotator will listen to a conversation and scribe it.</p>

                            </div>
                        </div>
                        <div className="items-center bg-gray-900 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={bgImg12} alt="Jese Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">INTENT AND CONVERSATION ANALYSIS</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-white dark:text-gray-400">iMerit’s experts bring the building blocks of NLU together to drive the development of next-generation chatbots, digital assistants, and conversational AI products in retail, tech media, finance, and healthcare.</p>

                            </div>
                        </div>
                        <div className="items-center bg-gray-900 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={bgImg13} alt="Michael Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">NAMED ENTITY RECOGNITION (NER) & ENTITY CLASSIFICATION</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-white dark:text-gray-400">By identifying, classifying, and linking relevant text strings, We powers innovations in digital document analysis, conversational AI development, and knowledge base curation.</p>
                            </div>
                        </div>
                        <div className="items-center bg-gray-900 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={bgImg14} alt="Michael Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">SENTIMENT & TOPIC ANALYSIS</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-white dark:text-gray-400">iMerit’s audio transcription analysts identify trends and cultivate the clients’ brands using advanced sentiment and topic analysis solutions. Language specialists and domain experts interpret nuances in product reviews, financial news, and social media.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Icons & Features Services */}

            <ServIcon

                heading={'What Industries Need Image Annotation Services?'}

                svgIcons1={<ArchiveIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading1={'LAW/LEGAL'}
                para1={'Audio transcription experts in the legal sector transcribe audio footage to text format from legal briefs, depositions, official court hearings, testimonies, client depositions, interrogation, and general legal correspondence'}

                svgIcons2={<HeartPulseIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading2={'Medical AI'}
                para2={'iMerit’s experts in the medical lexicon dissect text and audio in medical records, digital documents, and clinical trial data to power Robotic Process Automation, clinical decision support algorithms, and virtual assistants.'}

                svgIcons3={<ShoppingCartIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading3={'Commerce'}
                para3={'In the insurance sector, audio transcription experts transcribe audio content including claims, calls with medical and legal professionals, recorded statements, and theft/property damage reports for the insurance investigation.'}

                svgIcons4={<DiameterIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading4={'Government'}
                para4={'Audio transcription experts in the government sector transcribe the audio footage to text format from dictation, court proceedings, witness statements, tribunals, and hearings.'}

                svgIcons5={<CoinsIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading5={'Finance'}
                para5={'Audio transcription experts help customers improve business operations like quarterly meetings, performance discussions, and future planning by leveraging Machine learning technology and RPA.'}

                svgIcons6={<CoinsIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading6={'Insurance'}
                para6={'In the insurance sector, audio transcription experts transcribe audio content including claims, calls with medical and legal professionals, and any other experts, recorded statements, and theft/property damage reports for the insurance investigation.'}

            />

            {/*Socila Proofs*/}

            <ServSociProf value1='1M+' text1='Image Annotation' value2='95%' text2='Accuracy' value3='100+' text3='Organizations' />

            {/*Client Section*/}

            <Client />

            {/*Features Sections*/}

            <section className="bg-black flex justify-center flex-col items-center w-full pl-16">
            <h2 className="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-white dark:text-white md:text-4xl">EARNINGS CALLS AUDIO TRANSCRIPTION{/*Image Annotation Use Case*/}</h2>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={bgImg4} alt="" />
                </div>&nbsp;
                <div className="mr-auto place-self-center lg:col-span-5">
                    <h1 className="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl text-white dark:text-white">{props.heading4}</h1>
                    <p className="max-w-xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">We has vast experience in two types of audio transcription. One is verbatim transcription and the other is edited transcription. The company’s audio experts have helped transcribe earning calls for public companies. The team of audio transcription experts has transcribed a high number of calls with critical and exclusive financial information about companies to be available in real-time. Lengthy calls were split into 30-70 seconds audio clips for quick turnaround and a two-step process introduced to ensure high accuracy of transcription on the speech to text content and the audio file.</p>
                </div>
            </div>

                        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-5">
                    <h1 className="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl text-white dark:text-white">E-COMMERCE AUDIO TRANSCRIPTION</h1>
                    <p className="max-w-xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">iMerit’s audio transcription experts have helped various e-commerce clients train voice assistants to enhance their customer service experience. We annotators have transcribed the audio clips with queries on the client interactions and then provided intent and slot annotations on the text transcribed. iMerit’s team processed more than 100K audio clips at an accuracy above 90%.</p>
                </div>&nbsp;
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={bgImg10} alt="" />
                </div>
            </div>


        </section>

            {/*Talk To An Expect Sections*/}

            <ServBtn

                headingf='GETTING STARTED WITH AUDIO TRANSCRIPTION'

                textf='The need for speed in high-quality audio transcription has never been greater. We combines the best predictive and automated transcription technology with world-class data transcription and subject matter experts to deliver the data you need to get to production, fast.'

                btn='Talk To An Expect'

            />

        </>
    )
}

export default Audioanno