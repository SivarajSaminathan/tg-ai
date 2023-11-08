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
import bgImg11 from '../../assets/ImgAnno/ias-1.png'
import bgImg12 from '../../assets/ImgAnno/ias-2.png'
import bgImg13 from '../../assets/ImgAnno/ias-3.png'
import bgImg14 from '../../assets/ImgAnno/ias-4.png'
import bgImg15 from '../../assets/ImgAnno/ias-5.png'
import bgImg16 from '../../assets/ImgAnno/ias-6.png'
import bgImg17 from '../../assets/ImgAnno/ias-7.png'
import bgImg18 from '../../assets/ImgAnno/ias-8.png'
import ServPara from '../ServiceComp/ServPara'
import ServHero from '../ServiceComp/ServHero'
import ServPrImg from '../ServiceComp/ServPrImg'
import ServUseCase from '../ServiceComp/ServUseCase'
import ServGrid from '../ServiceComp/ServGrid'
import Client from '../AboutComp/Client'
import ServSociProf from '../ServiceComp/ServSociProf'
import { ServIcon } from '../ServiceComp/ServIcon'
import { ArchiveIcon } from '@heroicons/react/outline'
import { CoinsIcon, DiameterIcon, Globe2Icon, HeartPulseIcon, ShoppingCartIcon } from 'lucide-react'
import ServiceBtn from '../ServComp/ServiceBtn'


const Imageanno = () => {
    return (
        <>

            {/*Image Annotation Hero Section */}
        
            <ServHero img={bgImg} heading='IMAGE ANNOTATION SERVICES' text='We delivers stellar image annotation services that power AI, machine learning, and data operation strategies.'/>

            {/*Types Image Annotation Para Section */}

            <ServPara heading='What are the type of Image Annotation Services?' text='iMerit provides various image annotation services that will cater to a client’s project needs, including bounding boxes, polygon annotations, keypoint annotation, LiDar, semantic segmentation, and image classification. iMerit’s team works with the client to calibrate the quality and throughput of the job and deliver the best cost-quality ratio as you iterate. We recommend running a sample batch to clarify instructions, edge cases, and approximate task times, before launching full batches.' />

            {/*Para & Image Section */}

            <ServPrImg img2={bgImg2} img3={bgImg3} heading='What is Image Annotation?' text1='Image annotation is the process of labeling an image, which strategically involves human-powered work and sometimes, computer-assisted help. It is an important step in creating computer vision models for tasks like image segmentation, image classification, and object detection. Image annotation can range from annotating every group of pixels within an image to one label for an entire image.' text2='Successful image annotation projects involving computer vision are built on high-quality annotation. The type of annotation needed will depend on the use case the project is designed for.' />

            {/*Image Annotation Services */}

            <ServGrid heading='Image Annotation Services' text='Explore the whole collection of open-source web components and elements built with the utility classNamees from Tailwind'

            img12={bgImg12} heading1='BOUNDING BOXES' text1='The simplicity of bounding boxes is exactly their strength, making this method of image annotation applicable for a wide range of uses.'  

            img11={bgImg11} heading2='POLYGON ANNOTATION' text2='This technique is especially useful in computer vision as annotators can use it to identify irregular shapes, allowing computers to identify and respond to them.'

            img13={bgImg13} heading3='SEMANTIC SEGMENTATION' text3='The expert semantic segmentation, data can be organized in multiple formats for AI models across a variety of use cases.'

            img14={bgImg14} heading4='LIDAR ANNOTATION' text4='The high-quality ground truth datasets for use in computer vision models such as autonomous vehicles.'

            img15={bgImg15} heading5='IMAGE CLASSIFICATION' text5='Expert image classification turns image data into image insights for AI and ML models.'

            img16={bgImg16} heading6='3D CUBOID ANNOTATION' text6='We can generate training datasets to teach machine learning models to recognize the depth of objects.'

            img17={bgImg17} heading7='KEYPOINT ANNOTATION' text7='This annotation type detects body features and could include facial expressions and emotions.'

            img18={bgImg18} heading8='POLYLINE ANNOTATION' text8='Popular use cases include autonomous vehicles and teaching them road boundaries.'

            />

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

            <ServUseCase heading='Image Annotation Use Case'
                        
            img4={bgImg4} heading4='IMAGE ANNOTATION TOOL FOR SPORTS AI' text4='iMerit has developed a customized end-to-end workflow for its engagement with KinaTrax, leveraging its proprietary tools and technology as well as the expertise of its experienced computer vision teams. Our expert labelers extract still images from in-game video footage of the players captured from numerous angles. The images are annotated precisely based on KinaTrax’s requirements.' 
            
            img5={bgImg5} heading5='SEMANTIC SEGMENTATION FOR AUTONOMOUS VEHICLES' text5='iMerit employs a team of visual data experts who have performed image annotation on up to 100,000 street images for a client who is a leading global automobile manufacturer and a major contender in the autonomous vehicle segment. The iMerit team has annotated the elements in the images into predetermined classes of objects, ultimately dividing the image into semantically meaningful parts, to train the machine learning algorithm not just to ‘see’ but also to understand and interpret its environment and accuracy.'
                        
            img6={bgImg6} heading6='SEMANTIC SEGMENTATION FOR AUTONOMOUS VEHICLES' text6='iMerit experts will comb through each pixel of an image using the iMerit proprietary annotation platform to teach a vehicle to accurately detect and identify lines and splines such as street lanes, road markings, directions, divergence, and traffic.'

            img7={bgImg7} heading7='BOUNDING BOXES FOR BETTER DATA EXTRACTION' text7='To improve the performance of their proprietary tax software, this company worked asked iMerit to annotate a series of documents using bounding boxes. This taught the algorithm to see and automatically extract the numbers that were in the fields on the documentation, sparing users from manual entry and automating and otherwise time-consuming process.'
     
            img9={bgImg9} heading9='3D CUBOIDS FOR ROBOTIC AUTOMATION' text9='Through the use of 2D and 3D cuboids, iMerit experts are teaching robots in warehouses, factories, and other sorting and manufacturing facilities how to see and interact with objects. This helps further AI in robotics by allowing the robots to identify the dimensions of a given object, and interact with them accordingly to carry out a certain goal.'
            
            img8={bgImg8} heading8='CREATE LARGER HARVEST YIELDS WITH COMPUTER VISION' text8='Farmers use computer vision to monitor their crops for pests and plant diseases. Through the use of images collected by drones, iMerit experts can teach a model to recognize pests and potential threats to crop fields by annotating every pixel of a given image.'

            img10={bgImg10} heading10='FACIAL RECOGNITION USING KEYPOINT ANNOTATION' text10='Farmers use computer vision to monitor their crops for pests and plant diseases. Through the use of images collected by drones, iMerit experts can teach a model to recognize pests and potential threats to crop fields by annotating every pixel of a given image.'
            
            />

            <ServiceBtn 
            
            headingf='Getting Starting With Image Annotation' 
            
            textf='iMerit annotation experts apply keypoints on a face, taking care to apply them to key locations such as the eyes, nose, and mouth. This allows iMerit to create world-class training datasets for use in facial recognition models. This advanced technology is helping in public areas where crimes occur to identity and apprehend perpetrators.' 
            
            btn='Talk To An Expect' 

            />

        </>
    )
}

export default Imageanno