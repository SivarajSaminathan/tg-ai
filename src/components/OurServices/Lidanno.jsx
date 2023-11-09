import React from 'react'
import bgImg from '../../assets/LidAnno/LidarAnno-Hero.gif'
import bgImg2 from '../../assets/LidAnno/LidAnno-2.jpg'
import bgImg3 from '../../assets/LidAnno/LidAnno-3.jpg'
import bgImg4 from '../../assets/LidAnno/LidAnno-4.jpg'
import bgImg5 from '../../assets/LidAnno/LidAnno-5.jpg'
import bgImg11 from '../../assets/LidAnno/LidarAnno-1.jpg'
import bgImg12 from '../../assets/LidAnno/LidarAnno-2.jpg'
import bgImg13 from '../../assets/LidAnno/LidarAnno-3.jpg'
import bgImg14 from '../../assets/LidAnno/LidarAnno-4.jpg'
import bgImg15 from '../../assets/LidAnno/LidarAnno-5.jpg'
import bgImg16 from '../../assets/LidAnno/LidarAnno-6.jpg'
import bgImg17 from '../../assets/LidAnno/LidarAnno-7.jpg'
import bgImg18 from '../../assets/LidAnno/LidarAnno-8.jpg'
import ServPara from '../ServiceComp/ServPara'
import ServPrImg from '../ServiceComp/ServPrImg'
import ServGrid from '../ServiceComp/ServGrid'
import ServBtn from '../ServiceComp/ServBtn'
import ServHero from '../ServiceComp/ServHero'

export const Lidanno = () => {
    return (
        <>

            {/*Image Annotation Hero Section*/}
        
            <ServHero img={bgImg} heading='LIDAR ANNOTATION SERVICES' text='We delivers Lidar annotation services that power AI, Machine Learning, and data operation strategies.'/>

            {/*Types Image Annotation Para Section */}

            <ServPara heading='LIDAR ANNOTATION SOLUTION' text='We experts are trained in annotating Lidar point cloud data and bring decades of individual experience processing thousands of data points. We provides various Lidar data labeling services that cater to a client’s project needs including semantic annotation, 3D cuboid/box annotation, landmark annotation, polygon annotation, and polyline annotation. iMerit’s team provides a full-service annotation platform and builds custom automation processes for clients after calibrating their quality and throughput requirements.' />

            {/*Para & Image Section */}

            <ServPrImg img2={bgImg2} img3={bgImg3} heading='WHAT IS LIDAR ANNOTATION?' text1='Lidar (Light Detection & Ranging) data is an essential sensor for geospatial technology, autonomous technology, and many other industry applications. Lidar utilizes lasers, scanners, and specialized GPS receivers to calculate distances to a given object. Annotating Lidar data is a challenging and time-consuming task that demands an expert-level understanding of data annotation. Lidar annotation can be combined with image annotation to train computer vision and other deep learning models to perform a variety of tasks.' />

            {/*Image Annotation Services */}

            <ServGrid heading='INDUSTRIES USING LIDAR ANNOTATION SERVICE TODAY' text='Explore the whole collection of open-source web components and elements built with the utility classNamees from Tailwind'

            img12={bgImg12} heading1='AUTONOMOUS VECHICLE' text1='AV uses a combination of three forms of sensors – cameras, laser-based Lidar, and traditional 2D radar – that work in tandem to sense the road, identify objects and discern differences between passing scenery and potentially threatening objects.'  

            img11={bgImg11} heading2='AGRICULTURE' text2='In agriculture, Lidar training data can be used to train machine learning algorithms to identify areas that require more water or fertilizer. This information can help farmers save on cost, time, and labor.'

            img13={bgImg13} heading3='GOVERNMENT' text3='Lidar technology in government agencies is used in numerous ways. It is used by intelligence agencies to secure a direct line of sight and clear built-up areas visited by high-risk category of people.'
            
            img14={bgImg14} heading4='SEMANTIC SEGMENTATION' text4='Lidar semantic segmentation is one of the key building blocks of autonomous technology, where a class label is assigned to each data point in the input modality.'

            img15={bgImg15} heading5='3D POINT CLOUD ANNOTATION' text5='Fine-grained details can be captured through 3d point cloud annotation, allowing models to perform object detection and distinguish multiple 3d objects in a scene.'

            img16={bgImg16} heading6='BOUNDING BOX ANNOTATION' text6='Lidar box labeling helps autonomous vehicles identify objects from 3D images. Through 3d Lidar sensor data machines learn to easily identify annotated objects instead of generalized ones within a given environment.'

            img17={bgImg17} heading7='LANDMARK ANNOTATION' text7='Lidar landmark annotation labels anatomical or structural points of interest to generate accurate datasets determining the shape of different sized objects, thus enabling machine learning algorithms to detect smaller images.'

            img18={bgImg18} heading8='POLYGON ANNOTATION' text8='Lidar polygon annotations are suitable for training object localization & detection algorithms for objects like logos, signboards, and different postures of humans, with pixel-perfect polygons that are accurately drawn around the object of interest.'

            />

            {/*Features Sections*/}

            <section className="bg-black flex justify-center flex-col items-center w-full pl-16">
            <h2 className="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-white dark:text-white md:text-4xl">LIDAR ANNOTATION SERVICES CASE STUDIES</h2>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={bgImg4} alt="" />
                </div>&nbsp;
                <div className="mr-auto place-self-center lg:col-span-5">
                    <h1 className="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl text-white dark:text-white">LIDAR BOX LABELING FOR AUTONOMOUS VEHICLE COMPANY</h1>
                    <p className="max-w-xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Client Profile: Leading developer of autonomous vehicles
                    <br />
                    Client data type: Street scene imagery
                    <br />
                    Challenge: Data annotation in the areas of pedestrian classification, headlight tagging, and driver behavioral prediction
                    <br />
                    Outcome: Working closely with the limited data on hand, We experts annotated images using Lidar box labeling, a method that helps the machine to ‘see’ and understand the surrounding environment and react appropriately.                    </p>
                </div>
            </div>

            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-5">
                    <h1 className="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl text-white dark:text-white">LIDAR LABELING FOR TOP AGRICULTURAL SERVICES COMPANY</h1>
                    <p className="max-w-xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Client Profile: Top agricultural services company
                    <br />
                    Client data type: Lidar imagery of palm oil plantations
                    <br />
                    Challenge: Analyzing the proliferation of palm oil trees within a specific region.
                    <br />
                    Volume: Over 1 million aerial images
                    <br />
                    Outcome: Using LiDar, the teams classified the region into three specific layers of images: RGB, false color, and near-infrared. In just three months, this team successfully identified areas that were ripe for the planting of new palm oil trees.                    </p>
                </div>&nbsp;
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={bgImg5} alt="" />
                </div>
            </div>

            </section>

            <ServBtn 
            
            headingf='GETTING STARTED WITH LIDAR ANNOTATION' 
            
            textf='The need for speed in high-quality Lidar annotation has never been greater. We combines the best predictive and automated annotation technology with world-class data annotation and subject matter experts to deliver the data you need to get to production, fast.' 
            
            btn='Talk To An Expect' 

            />

        </>
    )
} 