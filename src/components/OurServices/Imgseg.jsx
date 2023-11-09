import React from 'react'
import bgImg from '../../assets/ImgSeg/img-seg-hero.gif'
import bgImg2 from '../../assets/ImgSeg/ImgSeg-2.jpg'
import bgImg3 from '../../assets/ImgSeg/ImgSeg-3.jpg'
import bgImg4 from '../../assets/ImgSeg/ImgSeg-4.jpg'
import bgImg5 from '../../assets/ImgSeg/ImgSeg-5.jpg'
import bgImg11 from '../../assets/ImgSeg/ImgSegm-1.jpg'
import bgImg12 from '../../assets/ImgSeg/ImgSegm-2.jpg'
import bgImg13 from '../../assets/ImgSeg/ImgSegm-3.jpg'
import bgImg14 from '../../assets/ImgSeg/ImgSegm-4.jpg'
import bgImg15 from '../../assets/ImgSeg/ImgSegm-5.jpg'
import bgImg16 from '../../assets/ImgSeg/ImgSegm-6.jpg'
import bgImg17 from '../../assets/ImgSeg/ImgSegm-7.jpg'
import bgImg18 from '../../assets/ImgSeg/ImgSegm-8.jpg'
import ServPara from '../ServiceComp/ServPara'
import ServHero from '../ServiceComp/ServHero'
import ServPrImg from '../ServiceComp/ServPrImg'
import ServGrid from '../ServiceComp/ServGrid'
import ServBtn from '../ServiceComp/ServBtn'


export const Imgseg = () => {
    return (
        <>

            {/*Image Annotation Hero Section */}
        
            <ServHero img={bgImg} heading='IMAGE SEGMENTATION SERVICE' text='We delivers image segmentation services that power Artificial Intelligence, Machine Learning, and data operation strategies.'/>

            {/*Types Image Annotation Para Section */}

            <ServPara heading='COMMON MODELS AND DATA PROCESSING' text='Most image segmentation models use some sort of digital image processing to standardize original image data prior to training on the GPU. This can involve various filtering steps such as converting a given image to grayscale, normalizing pixel values and pixel intensities, clipping pixels at some threshold value, partitioning the input image, applying segmentation masks, applying a gaussian blur, implementing Otsu’s method for image thresholding, drawing bounding boxes around regions of interest for object detection, smoothing discontinuities, and other optimizations.'/>

            {/*Para & Image Section */}

            <ServPrImg img2={bgImg2} img3={bgImg3} heading='WHAT IS IMAGE SEGMENTATION?' text1='Image segmentation is a branch of computer vision that focuses on the division of a digital image into multiple segments (regions or categories) according to its properties and features. It is a form of image processing. The main purpose of any segmentation algorithm is to simplify the image and make it more meaningful and easier to analyze. In image segmentation, every pixel in an image is labeled such that pixels with the same label share certain attributes and characteristics. Most modern image segmentation workflows use deep learning models such as convolutional neural networks to perform the segmentation.' />

            {/*Image Annotation Services */}

            <ServGrid heading='IMAGE SEGMENTATION STEPS' text='We subject matter experts will guide you through the process to develop a customized end-to-end workflow.'

            img12={bgImg11} heading1='SEMANTIC SEGMENTATION' text1='Semantic segmentation helps to train computer vision models that involve taking as input as some raw data like 2D images and assigning a label to every pixel in the image.'  

            img11={bgImg12} heading2='INSTANCE SEGMENTATION' text2='Instance segmentation helps to train the machine learning model at the instance level where multiple objects of the same class are assigned as one class but as separate instances.'

            img13={bgImg13} heading3='PANOPTIC SEGMENTATION' text3='Coupling instance and semantic segmentation, panoptic segmentation performs pattern recognition and helps to identify the pixels in images as belonging to a class and to identify what instances of that class they belong to.'

            img14={bgImg14} heading4='AUTONOMOUS VECHICLE' text4='Image segmentation in autonomous technology helps to train machine learning and edge detection models to identify pedestrians, other vehicles, lanes, and other objects of interest, allowing self-driving cars to operate safely.'

            img15={bgImg15} heading5='AGRICULTURE' text5='Agricultural robots mostly depend on image segmentation for distinguishing between crops and weeds to perform weeding actions and increase crop health while reducing the number of chemicals used.'

            img16={bgImg16} heading6='MEDICAL AI' text6='Medical image segmentation in medical imaging helps to detect tumors, abscesses, other MRI abnormalities and also helps to augment analysis performed by radiologists, greatly reducing the time required to run diagnostic tests'

            img17={bgImg17} heading7='GEOSPATIAL TECHNOLOGY' text7='Image segmentation in geospatial technology labels satellite images and maps the world from above which enables infrastructure planning, land cover analysis, humanitarian crisis maps, and environmental assessments'

            img18={bgImg18} heading8='E-COMMERCE' text8='With changing technology, fashion retailers use image segmentation to automate inventory analysis within shops. It is also used to automatically collect product information, optimize store display, and verify shelf-share.'

            />

            {/*Features Sections*/}


            <section className="bg-black flex justify-center flex-col items-center w-full pl-16">
            <h2 className="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-white dark:text-white md:text-4xl">IMAGE SEGMENTATION SERVICES CASE STUDIES</h2>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={bgImg4} alt="" />
                </div>&nbsp;
                <div className="mr-auto place-self-center lg:col-span-5">
                    <h1 className="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl text-white dark:text-white">IMAGE SEGMENTATION FOR LEADING AUTOMOBILE MANUFACTURERS</h1>
                    <p className="max-w-xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Client Profile: Leading global automobile manufacturer
                    <br />
                    Client data type: Street scene images
                    <br />
                    Challenge: Building a highly accurate dataset to help train algorithms to interpret their environment
                    <br />
                    Volume: Around 100,000 street images segmented
                    <br />
                    Outcome: Our team has annotated the elements in the images into predetermined classes of objects, ultimately dividing the image into semantically meaningful parts, to train the machine learning algorithm not just to ‘see’ but also to understand and interpret its environment and accuracy.
                    </p>
                </div>
            </div>

            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-5">
                    <h1 className="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl text-white dark:text-white">SEMANTIC SEGMENTATION FOR A LARGE AV COMPANY</h1>
                    <p className="max-w-xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Client Profile: Large autonomous vehicle company
                    <br />
                    Client data type: 2D street scene images
                    <br />
                    Challenge: Building a training dataset that precisely identifies the different objects on a road scene for the AV to take real-time decisions and act accordingly when on the road. With more road scenes comes more complexity and more objects that need to be trained to the AV.
                    <br />
                    Volume: Around 100,000 images segmented
                    <br />
                    Outcome: The precise segmentation done by us was used in training the AV and then helped them in putting the vehicle in their testing environment. This takes the AV closer towards full autonomy.
                    </p>
                </div>&nbsp;
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={bgImg5} alt="" />
                </div>
            </div>

        </section>

            <ServBtn 
            
            headingf='GETTING STARTED WITH IMAGE SEGMENTATION' 
            
            textf='The need for speed in high-quality Image Segmentation has never been greater. We combines the best predictive and automated annotation technology with world-class data annotation and subject matter experts to deliver the data you need to get to production, fast.' 
            
            btn='Talk To An Expect' 

            />

        </>
    )
} 