import React from 'react'
import bgImg from '../../assets/ConMon/conmod-hero.jpg'
import bgImg2 from '../../assets/ConMon/conmod-2.jpg'
import bgImg3 from '../../assets/ConMon/conmod-3.jpg'
import bgImg4 from '../../assets/ConMon/conmon-4.jpg'
import bgImg5 from '../../assets/ConMon/conmon-5.jpg'
import bgImg11 from '../../assets/ConMon/conmon-1.jpg'
import bgImg12 from '../../assets/ConMon/conmon-2.jpg'
import bgImg13 from '../../assets/ConMon/conmon-3.jpg'
import ServPara from '../ServiceComp/ServPara'
import ServHero from '../ServiceComp/ServHero'
import ServPrImg from '../ServiceComp/ServPrImg'
import Client from '../AboutComp/Client'
import ServSociProf from '../ServiceComp/ServSociProf'
import { ServIcon } from '../ServiceComp/ServIcon'
import { ArchiveIcon } from '@heroicons/react/outline'
import { CoinsIcon, DiameterIcon, Globe2Icon, HeartPulseIcon, ShoppingCartIcon } from 'lucide-react'
import ServBtn from '../ServiceComp/ServBtn'


export const Conmon = () => {
    return (
        <>

            {/*Image Annotation Hero Section */}
        
            <ServHero img={bgImg} heading='CONTENT MODERATION' text='We delivers content moderation services that power Artificial Intelligence, Machine Learning, and data operation strategies.'/>

            {/*Types Image Annotation Para Section */}

            <ServPara heading='OUR CONTENT MODERATION SOLUTION' text='We provides various content moderation services that cater to a client’s project needs. Common workflows can be applied to varying types of content to include image moderation, video moderation, and text moderation. iMerit’s team works with a client to calibrate their quality and throughput requirements and builds custom processes to support client needs.' />

            {/*Para & Image Section */}

            <ServPrImg img2={bgImg2} img3={bgImg3} heading='WHAT IS CONTENT MODERATION?' text1='ontent moderation is the practice of monitoring, assessing, and filtering content based on a predetermined set of rules. Online marketplaces and social media platforms rely on user-generated content (UGC) for engagement and activity, and moderation helps maintain and enforce community guidelines. Moderation can be performed either by human moderators or an automated content moderating system.' />

            {/*Image Annotation Services */}

            <section className="bg-black">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">CONTENT MODERATION SOLUTION</h2>
                        <p className="font-light text-white lg:mb-16 sm:text-xl dark:text-gray-400"> Common workflows can be applied to varying types of content to include image moderation, video moderation, and text moderation. iMerit’s team works with a client to calibrate their quality and throughput requirements and builds custom processes to support client needs.</p>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        <div className="items-center bg-gray-900 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={bgImg11} alt="Bonnie Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">IMAGE MODERATION</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-white dark:text-gray-400">Expert moderators evaluate user-submitted images on online communities and forums for sensitive content, quality, and guideline violations. Platforms are then able to accurately identify violence, offensive comments, drug and weapon use, and to add metadata to large datasets.</p>

                            </div>
                        </div>
                        <div className="items-center bg-gray-900 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={bgImg12} alt="Jese Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">VIDEO MODERATION</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-white dark:text-gray-400">Video content moderation helps rate, evaluate and flag offensive video content and trolls that can harm brand image and removes that content from the videos. We expert moderators can moderate frame-by-frame and still images using real-time reporting.</p>

                            </div>
                        </div>
                        <div className="items-center bg-gray-900 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={bgImg13} alt="Sofia Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">TEXT MODERATION</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-white dark:text-gray-400">Text moderation is performed on documents, discussion boards, chatbot conversations, e-commerce catalogs, and chat room transcripts. Text moderators can search for duplicate content, offensive content, or other pieces of content that do not comply with community standards and remove them.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Icons & Features Services */}

            <ServIcon 

            heading={'INDUSTRIES USING MODERATION TODAY'} 

            svgIcons1={ <ArchiveIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading1={'Social Media'} 
            para1={'Moderating content and activity is seen in online platforms such as LinkedIn, Facebook, Twitter, and Instagram. Media moderators ensure that user-generated content complies with necessary policies and make content moderation decisions to that effect, ideally without curbing the user’s ability to engage in free and open dialogue.'} 
                        
            svgIcons2={ <HeartPulseIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading2={'Entertainment & Media'} 
            para2={'With international content distribution, content creators must abide by the laws and contextual practices of suitable content for a particular audience and location. iMerit’s content moderators identify restricted content on the basis of guidelines and tag them to perform corrective action.'}
                       
            svgIcons3={ <ShoppingCartIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading3={'E-commerce'} 
            para3={'Today every company needs a digital presence to tap new markets and to have quicker reach and engagement. However, there is a risk of pushing fake or offensive content. Content moderation processes help filter out user-generated content to maintain brand reputation and improve overall visual experience.'} 

            svgIcons4={ <DiameterIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading4={'Travel & Hospitality'} 
            para4={'The travel and hospitality industry is heavily influenced by user-generated content (UGC). Before making decisions, people look for reviews on either social media or the travel application itself. Content moderation helps manage UGC and feedback while also monitoring brand reputation.'}
                        
            svgIcons5={ <CoinsIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading5={'Government'} 
            para5={'Content in the government sector is far more abundant and diverse than ever before. Given today context, content moderators have to define policies on when and how to delete offensive and objectionable content, while also ensuring the right to free speech and expression is not curbed.'}

            svgIcons6={ <Globe2Icon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading6={'Healthcare'} 
            para6={'Efficacy of online healthcare platforms and telemedicine depends on proper interaction between doctors and patients and satisfactory online consultations. Content moderators keep a regular check on service content and the comments and feedback of patient and filter out offensive comment.'} 
                        
            />
                        
            {/*Socila Proofs*/}

            <ServSociProf value1='1M+' text1='Image Annotation'  value2='95%' text2='Accuracy' value3='100+' text3='Organizations' />

            {/*Client Section*/}

            <Client />

            {/*Features Sections*/}

            <section className="bg-black flex justify-center flex-col items-center w-full pl-16">
            <h2 className="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-white dark:text-white md:text-4xl">CONTENT MODERATION CASE STUDIES</h2>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={bgImg4} alt="" />
                </div>&nbsp;
                <div className="mr-auto place-self-center lg:col-span-5">
                    <h1 className="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl text-white dark:text-white">CONTENT MODERATION FOR E-COMMERCE SITES</h1>
                    <p className="max-w-xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Client Profile: Leading e-commerce site
                    <br />
                    Client data type: Customer reviews
                    <br />
                    Challenge: Content moderation and approval of user-generated content for the site
                    <br />
                    Outcome: We Content Moderation team reviewed all users being onboarded, with service level agreements, and the task was completed as required with all submissions moderated accurately.
                    </p>
                </div>
            </div>

            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-5">
                    <h1 className="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl text-white dark:text-white">CONTENT MODERATION FOR DONATION SOLUTION</h1>
                    <p className="max-w-xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Client Profile: Donation record platform
                    <br />
                    Client data type: Campaign images submitted by users
                    <br />
                    Challenge: Moderation and approval of user-submitted campaign content for donation campaigns
                    <br />
                    Outcome: iMerit’s image moderation team helped the client interpret subjective guidelines for disturbing and explicit imagery content and flag inappropriate material not adhering to the guidelines, along with actual abuse.
                    </p>
                </div>&nbsp;
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={bgImg5} alt="" />
                </div>
            </div>

        </section>

            <ServBtn 
            
            headingf='GETTING STARTED WITH CONTENT MODERATION' 
            
            textf='The need for speed in high-quality content moderation services has never been greater. We combines the best predictive and automated annotation technology with world-class data annotation and subject matter experts to deliver the data you need to get to production, fast.' 
            
            btn='Talk To An Expect' 

            />

        </>
    )
} 