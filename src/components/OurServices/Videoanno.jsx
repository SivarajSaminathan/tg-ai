import React from 'react'
import bgImg from '../../assets/VidAnno/VidAnno-Hero.gif'
import bgImg2 from '../../assets/VidAnno/VidAnno-2.png'
import bgImg3 from '../../assets/VidAnno/VidAnno-3.png'
import bgImg4 from '../../assets/VidAnno/VidAnno-1.gif'
import bgImg5 from '../../assets/VidAnno/VidAnno-2.gif'
import bgImg6 from '../../assets/VidAnno/VidAnno-3.gif'
import bgImg7 from '../../assets/VidAnno/VidAnno-4.png'
import bgImg8 from '../../assets/VidAnno/VidAnno-5.gif'
import bgImg9 from '../../assets/VidAnno/VidAnno-6.png'
import bgImg10 from '../../assets/VidAnno/VidAnno-7.gif'
import bgImg11 from '../../assets/VidAnno/vid-1.png'
import bgImg12 from '../../assets/VidAnno/vid-2.png'
import bgImg13 from '../../assets/VidAnno/vid-3.png'
import bgImg14 from '../../assets/VidAnno/vid-4.png'
import bgImg15 from '../../assets/VidAnno/vid-5.png'
import bgImg16 from '../../assets/VidAnno/vid-6.png'
import bgImg17 from '../../assets/VidAnno/vid-7.png'
import bgImg18 from '../../assets/VidAnno/vid-8.png'
import ServHero from '../ServiceComp/ServHero'
import ServPara from '../ServiceComp/ServPara'
import ServPrImg from '../ServiceComp/ServPrImg'
import ServGrid from '../ServiceComp/ServGrid'
import Client from '../AboutComp/Client'
import ServSociProf from '../ServiceComp/ServSociProf'
import { ServIcon } from '../ServiceComp/ServIcon'
import { ArchiveIcon } from '@heroicons/react/outline'
import { CoinsIcon, DiameterIcon, FactoryIcon, Globe2Icon, HeartPulseIcon, ShoppingCartIcon } from 'lucide-react'
import ServiceBtn from '../ServComp/ServiceBtn'
import ServUseCase from '../ServiceComp/ServUseCase'

const Videoanno = () => {
    return (
        <>
            {/*Image Annotation Hero Section*/}
 
        
            <ServHero img={bgImg} heading='VIDEO ANNOTATION SERVICES' text='We delivers stellar video annotation services that power AI, machine learning, and data operation strategies.'/>
            
            
            {/*Types Image Annotation Para Section */}

            <ServPara heading='WHAT ARE THE TYPES OF VIDEO ANNOTATION SERVICES?' text='We provides video annotation services for all annotation projects including bounding box annotation, polygon annotation, keypoint annotation, and semantic segmentation. iMerit’s team works with the client to calibrate the quality and throughput of the job and deliver the best cost-quality ratio as you iterate. We recommend running a sample batch to clarify instructions, edge cases, and approximate task times, before launching full batches.' />

            {/*Para & Image Section */}

            <ServPrImg img2={bgImg2} img3={bgImg3} heading='WHAT IS VIDEO ANNOTATION?' text1='Video annotation is the process of labeling or tagging video clips which are used for training computer vision models to detect or identify objects. Unlike image annotation, video annotation involves annotating objects on a frame-by-frame basis to make them recognizable for machine learning models.' text2='High-quality video annotation generates ground truth datasets for optimal machine learning functionality. There are numerous deep learning applications for video annotation across industries including self-driving cars, medical AI, and geospatial technology.' />

            {/*Image Annotation Services */}

            <ServGrid heading='Video Annotation Services' text='Explore the whole collection of open-source web components and elements built with the utility classNamees from Tailwind'

                img12={bgImg12} heading1='BOUNDING BOXES' text1='It is the most commonly used type of video annotation in computer vision. We computer vision experts use rectangular box annotation to illustrate objects and create training data so apps and algorithms can identify and localize objects during ML processes.'

                img11={bgImg11} heading2='POLYGON ANNOTATION' text2='Expert annotators plot points on each vertex of the target object. Polygon annotation allows all of the object’s exact edges to be annotated, regardless of shape.'

                img13={bgImg13} heading3='SEMANTIC SEGMENTATION' text3='Videos are segmented into component parts, by the We team, and then annotated. We computer vision experts examine video frames and classify objects pixel by pixel.'

                img14={bgImg14} heading4='KEYPOINT ANNOTATION' text4='We teams outline objects and shape variations by connecting individual points across objects. This annotation type detects body features and could include facial expressions and emotions.'

                img15={bgImg15} heading5='LANDMARK ANNOTATION' text5='We experts use points on landmarks and peoples’ faces when annotating video footage. Expertly-conducted landmark annotation creates valuable training datasets for high-performing computer vision models.'

                img16={bgImg16} heading6='3D CUBOID ANNOTATION' text6='We experts perform object tracking by drawing cubes around objects. This allows systems to recognize a given object’s length, width, and height.'

                img17={bgImg17} heading7='POLYLINE ANNOTATION' text7='We experts create training datasets using polyline annotation that teach models to identify physical boundaries to operate within.'

                img18={bgImg18} heading8='RAPID ANNOTATION' text8='We video annotation platform utilizes video interpolation to rapidly annotate suitable video footage. We annotation experts create best-in-class video training datasets in rapid time for any AI or ML project.'

            />

            {/* Icons & Features Services */}

            <ServIcon

                heading={'What Industries Need Video Annotation Services?'}

                svgIcons1={<ArchiveIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading1={'Autonomous Technology & Transportation'}
                para1={'Video annotation services can help in the deployment of autonomous technology by detecting objects like sign-boards, signals, vehicles, street lights and other objects on the road.'}

                svgIcons2={<HeartPulseIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading2={'Medical AI'}
                para2={'Video annotation in healthcare helps pharmaceutical companies, device manufacturers, and healthcare provider networks to deliver quality services with the help of machine learning.'}

                svgIcons3={<ShoppingCartIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading3={'Commerce'}
                para3={'Use video annotation to understand the behaviors of consumers in stores to improve retail revenue. Analyze and track how consumers interact with shelves and use object tracking to automate mask identification.'}

                svgIcons4={<DiameterIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading4={'Geospatial Technology'}
                para4={'Video annotation tasks include extracting intelligence from satellite, aerial, and drone footage to power applications in energy, agriculture, logistics, security, and mapping.'}

                svgIcons5={<FactoryIcon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading5={'Manufacturing'}
                para5={'Video annotation makes manufacturing more efficient by increasing the productivity of industrial robots. Perceptive robots can help to identify defective items in production or manufacturing pitfalls.'}

                svgIcons6={<Globe2Icon className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} heading6={'Government'}
                para6={'Video annotation is helping authorities use facial recognition to identify criminals through the use of keypoint annotation on faces taken from public footage.'}

            />

            {/*Socila Proofs*/}

            <ServSociProf value1='1M+' text1='Video Annotation' value2='95%' text2='Accuracy' value3='100+' text3='Organizations' />

            {/*Client Section*/}

            <Client />

            {/*Features Sections*/}

            <ServUseCase heading='VIDEO ANNOTATION USE CASES'

                img4={bgImg4} heading4='SEMANTIC VIDEO ANNOTATION OF SURVEILLANCE IMAGES' text4='iMerit’s video annotation experts have processed 500+ video datasets of various formats at a much higher level of detail than the client’s own teams. Our expert annotators solved the challenge of frame-by-frame manual processing of CCTV videos by accurately identifying and annotating required objects.'

                img5={bgImg5} heading5='MOVING BOUNDING BOXES USING VIDEO ANNOTATION' text5='iMerit’s video annotation experts created datasets to train the world’s most advanced machine learning solutions for rearview cameras and alert systems. Our experts annotated still and moving objects using bounding boxes in video material to identify potentially dangerous objects.'

                img6={bgImg6} heading6='DETECTING OPERATING BOUNDARIES WITH POLYLINE ANNOTATION' text6='We experts will comb through an entire video using the We proprietary annotation platform to teach a vehicle to accurately detect street lanes, road markings, directions, divergence, and traffic.'

                img7={bgImg7} heading7='FACIAL RECOGNITION USING KEYPOINT ANNOTATION' text7='We experts used video editing to pause and apply keypoints on a person’s face. This allowed We to create world-class training datasets for use in facial recognition models. This advanced technology is helping in public areas where crimes occur to identity and apprehend perpetrators.'

                img9={bgImg9} heading9='VIDEO ANNOTATION FOR COMPUTER VISION AND ROBOTICS' text9='Industrial robots are being taught to see with We video annotation. These perceptive robots are adaptive to their environment, allowing them to respond to their environment without any human interaction. This automation is creating high production and less human accidents.'

                img8={bgImg8} heading8='CREATE LARGER HARVEST YIELDS WITH COMPUTER VISION' text8='Farmers use computer vision to monitor their crops for pests and plant diseases. Through the use of footage collected by drones, We experts can teach a model to recognize pests and potential threats to crop fields by annotating the footage.'

                img10={bgImg10} heading10='OPTIMAL ATHLETIC PERFORMANCE WITH COMPUTER VISION' text10='Virtual training and home workouts can use computer vision to coach clients on form, posture, and performance. We experts use video annotation to teach sports AI models how to recognize when a client is performing in a way that puts them at risk for injury or challenges their performance'

            />

            {/*Talk To An Expect Sections*/}

            <ServiceBtn

            headingf='Getting Starting With Image Annotation' 

            textf='We annotation experts apply keypoints on a face, taking care to apply them to key locations such as the eyes, nose, and mouth. This allows We to create world-class training datasets for use in facial recognition models. This advanced technology is helping in public areas where crimes occur to identity and apprehend perpetrators.' 
            
            btn='Talk To An Expect'
            
            />

        </>
    )
}

export default Videoanno