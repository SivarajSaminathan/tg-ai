import React from 'react'
import bgImg from '../../assets/ImgAnno/imganno-1.png'
import bgImg2 from '../../assets/ImgAnno/imganno-2.png'
import bgImg3 from '../../assets/ImgAnno/imganno-3.png'
import bgImg4 from '../../assets/ImgAnno/imganno-4.png'
import bgImg5 from '../../assets/ImgAnno/imganno-5.png'
import bgImg6 from '../../assets/ImgAnno/imganno-6.png'
import bgImg7 from '../../assets/ImgAnno/imganno-7.png'
import bgImg8 from '../../assets/ImgAnno/imganno-8.png'
import bgImg9 from '../../assets/ImgAnno/imganno-9.png'
import bgImg10 from '../../assets/ImgAnno/imganno-10.png'
import txt1 from '../../assets/TxtAnno/txt-1.jpg'
import txt2 from '../../assets/TxtAnno/txt-2.jpg'
import txt3 from '../../assets/TxtAnno/txt-3.jpg'
import txt4 from '../../assets/TxtAnno/txt-4.jpg'
import txt5 from '../../assets/TxtAnno/txt-5.jpg'
import txt6 from '../../assets/TxtAnno/txt-6.jpg'
import ServHero from '../ServiceComp/ServHero'
import ServPara from '../ServiceComp/ServPara'
import ServPrImg from '../ServiceComp/ServPrImg'
import Client from '../AboutComp/Client'
import ServSociProf from '../ServiceComp/ServSociProf'
import { ServIcon } from '../ServiceComp/ServIcon'
import ServiceBtn from '../ServComp/ServiceBtn'
import ServUseCase from '../ServiceComp/ServUseCase'
import { ArchiveIcon } from '@heroicons/react/outline'
import { CoinsIcon, DiameterIcon, Globe2Icon, HeartPulseIcon, ShoppingCartIcon } from 'lucide-react'

const Textanno = () => {
    return (
        <>
            {/*Image Annotation Hero Section*/}
 
        
            <ServHero img={bgImg} heading='TEXT ANNOTATION SERVICES' text='iMerit offers high-quality text annotation strategies and services to help deploy AI and machine learning in Medical AI, Finance & Insurance, and Government.'/>
            
            
            {/*Types Image Annotation Para Section */}

            <ServPara heading='WHAT ARE THE TYPES OF TEXT ANNOTATION?' text='iMerit provides various text annotation services that cater to a client’s project needs. Common workflows include sentiment analysis, intent analysis, named entity recognition (NER), natural language processing (NLP) and entity classification. iMerit’s team works with clients to calibrate their quality and throughput requirements and builds custom processes to support client needs and integrate with their existing workflows. iMerit’s teams deliver the highest quality results of cost-effective human language text annotation across batches and iterations. We recommend running a sample batch to clarify instructions, edge cases, and approximate task times, before launching full batches.' />

            {/*Para & Image Section */}

            <ServPrImg img2={bgImg2} img3={bgImg3} heading='WHAT IS TEXT ANNOTATION?' text1='Text annotation helps machine learning models understand text data. Common workflows that utilize text annotation include sentiment and intent analysis, part-of-speech tagging, entity recognition and classification. During the text annotation process, the data is parsed into the required categories including phrases, sentences, and keywords, based on the guidelines of the project.' text2='Text annotation can be used in the creation of training data to improve the performance of search engines, build chatbots, design a question answering system, help students improve their reading comprehension, facilitate translation of text from one language to another, and so much more. Text annotation can also be combined with image annotation to train multimodal machine learning models.' />

            {/*Image Annotation Services */}

            <section className="bg-black">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">TEXT ANNOTATION SERVICES</h2>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={txt1} alt="Bonnie Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">SENTIMENT ANALYSIS</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">iMerit’s advanced sentiment and topic analysts can identify trends and nuances in large volumes of text data including product reviews, financial news, and social media. Useable in any language, annotation for sentiment analysis enables companies to better understand how their customer bases view their products, which way a stock price may be trending, identify unsolved customer needs, and more.</p>

                            </div>
                        </div>
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={txt2} alt="Jese Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">INTENT ANALYSIS</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">iMerit text annotation experts bring the building blocks of NLU together to drive the development of next-generation chatbots, digital assistants, and conversational AI products in retail, tech media, finance, and healthcare.</p>

                            </div>
                        </div>
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={txt3} alt="Michael Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">NAMED ENTITY RECOGNITION</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">By identifying, classifying, underlining, and linking relevant text and metadata strings, iMerit powers innovations in digital document analysis, conversational AI development, and knowledge base curation.</p>
                            </div>
                        </div>
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={txt4} alt="Michael Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">NATURAL LANGUAGE PROCESSING</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Understand the sentiment between the lines of text. Glean valuable insights to improve things like search relevance and improve automated chat systems that are commonly employed in customer service.</p>
                            </div>
                        </div>
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={txt5} alt="Michael Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">IMAGE ANNOTATION</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Add iMerit’s image annotation services to your existing (or iMerit provided) text annotation workflow to train models that operate jointly on images and text. Useful for intelligent document processing (IDP), generating better word embeddings, image summarization, logo and product identification + recognition, and more.</p>
                            </div>
                        </div>
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className='w-full'>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={txt6} alt="Sofia Avatar" />
                            </a>
                            <div className="p-5 w-full">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">RAPID ANNOTATION</a>
                                </h3>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">iMerit annotation experts create best-in-class text training datasets in rapid time for any AI or ML project.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Icons & Features Services */}

            <ServIcon

                heading={'What Industries Need Text Annotation Services?'}

                svgIcons1={<ArchiveIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading1={'Legal'}
                para1={'Automatically review contracts, extract dates and key information, and speed up case law searches. The legal industry is replete with large, often inscrutable and highly technical documents that require tens of thousands of man hours to process. Text annotation provides the first step towards automating this process and saving valuable time.'}

                svgIcons2={<HeartPulseIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading2={'Medical AI'}
                para2={'Text annotation helps to turn a healthcare database into valuable insights. These insights can improve patient outcomes, streamline operations, and manage regulatory compliance.'}

                svgIcons3={<ShoppingCartIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading3={'Commerce'}
                para3={'Text annotation in commerce helps to analyze the sentiment and intent within customer reviews and comments, and to mine useful information from unstructured data to improve customer experience for shoppers.'}

                svgIcons4={<DiameterIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading4={'Finance'}
                para4={'Text annotation workflows can transform complex documents into intelligence that leads to a better customer experience.'}

                svgIcons5={<CoinsIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading5={'Insurance'}
                para5={'Insurance companies are using text annotation to extract details contained in application forms, adjuster notes, and other unstructured text sources, to minimize their risk and improve efficiency.'}

                svgIcons6={<Globe2Icon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading6={'Government'}
                para6={'Teams trained in domain-specific lexicons work on linguistic projects to extract intelligence from vast government records and datasets to enable automation of processes.'}

            />

            {/*Socila Proofs*/}

            <ServSociProf value1='1M+' text1='Image Annotation' value2='95%' text2='Accuracy' value3='100+' text3='Organizations' />

            {/*Client Section*/}

            <Client />

            {/*Features Sections*/}

            <ServUseCase heading='Image Annotation Use Case'

                img4={bgImg4} heading4='IMAGE ANNOTATION TOOL FOR SPORTS AI' text4='iMerit has developed a customized end-to-end workflow for its engagement with KinaTrax, leveraging its proprietary tools and technology as well as the expertise of its experienced computer vision teams. Our expert labelers extract still images from in-game video footage of the players captured from numerous angles. The images are annotated precisely based on KinaTrax’s requirements.'

                img5={bgImg5} heading5='SEMANTIC SEGMENTATION FOR AUTONOMOUS VEHICLES' text5='iMerit employs a team of visual data experts who have performed image annotation on up to 100,000 street images for a client who is a leading global automobile manufacturer and a major contender in the autonomous vehicle segment. The iMerit team has annotated the elements in the images into predetermined classes of objects, ultimately dividing the image into semantically meaningful parts, to train the machine learning algorithm not just to ‘see’ but also to understand and interpret its environment and accuracy.'

                img6={bgImg6} heading6='DETECTING OPERATING BOUNDARIES WITH POLYLINE ANNOTATION' text6='iMerit experts will comb through each pixel of an image using the iMerit proprietary annotation platform to teach a vehicle to accurately detect and identify lines and splines such as street lanes, road markings, directions, divergence, and traffic.'

                img7={bgImg7} heading7='BOUNDING BOXES FOR BETTER DATA EXTRACTION' text7='To improve the performance of their proprietary tax software, this company worked asked iMerit to annotate a series of documents using bounding boxes. This taught the algorithm to see and automatically extract the numbers that were in the fields on the documentation, sparing users from manual entry and automating and otherwise time-consuming process.'

                img9={bgImg9} heading9='3D CUBOIDS FOR ROBOTIC AUTOMATION' text9='Through the use of 2D and 3D cuboids, iMerit experts are teaching robots in warehouses, factories, and other sorting and manufacturing facilities how to see and interact with objects. This helps further AI in robotics by allowing the robots to identify the dimensions of a given object, and interact with them accordingly to carry out a certain goal.'

                img8={bgImg8} heading8='CREATE LARGER HARVEST YIELDS WITH COMPUTER VISION' text8='Farmers use computer vision to monitor their crops for pests and plant diseases. Through the use of images collected by drones, iMerit experts can teach a model to recognize pests and potential threats to crop fields by annotating every pixel of a given image.'

                img10={bgImg10} heading10='FACIAL RECOGNITION USING KEYPOINT ANNOTATION' text10='Farmers use computer vision to monitor their crops for pests and plant diseases. Through the use of images collected by drones, iMerit experts can teach a model to recognize pests and potential threats to crop fields by annotating every pixel of a given image.'

            />

            {/*Talk To An Expect Sections*/}

            <ServiceBtn

            headingf='Getting Starting With Image Annotation' 

            textf='iMerit annotation experts apply keypoints on a face, taking care to apply them to key locations such as the eyes, nose, and mouth. This allows iMerit to create world-class training datasets for use in facial recognition models. This advanced technology is helping in public areas where crimes occur to identity and apprehend perpetrators.' 
            
            btn='Talk To An Expect'
            
            />

        </>
    )
}

export default Textanno