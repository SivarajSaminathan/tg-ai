import React from 'react'
import bgImg from '../../assets/ProCat/procat-hero.jpg'
import bgImg2 from '../../assets/ProCat/Procateg-2.jpg'
import bgImg3 from '../../assets/ProCat/Procateg-3.jpg'
import bgImg4 from '../../assets/ProCat/Procateg-4.jpg'
import bgImg5 from '../../assets/ProCat/Procateg-5.jpg'
import bgImg11 from '../../assets/ProCat/Procat-1.jpg'
import bgImg12 from '../../assets/ProCat/Procat-2.jpg'
import bgImg13 from '../../assets/ProCat/Procat-3.jpg'
import bgImg14 from '../../assets/ProCat/Procat-4.jpg'
import bgImg15 from '../../assets/ProCat/Procat-5.jpg'
import bgImg16 from '../../assets/ProCat/Procat-6.jpg'
import bgImg17 from '../../assets/ProCat/Procat-7.jpg'
import bgImg18 from '../../assets/ProCat/Procat-8.jpg'
import ServPara from '../ServiceComp/ServPara'
import ServHero from '../ServiceComp/ServHero'
import ServPrImg from '../ServiceComp/ServPrImg'
import ServGrid from '../ServiceComp/ServGrid'
import ServBtn from '../ServiceComp/ServBtn'


export const Procat = () => {
    return (
        <>

            {/*Image Annotation Hero Section */}
        
            <ServHero img={bgImg} heading='PRODUCT CATEGORIZATION SERVICE' text='We delivers product categorization services by classifying and labeling all forms of user-generated content such as text, video and images. Product categorization involves using training data to train a model to predict the category of a given product. The amount of data required is highly dependent on the number of products that must be categorized and the diversity of the product catalog.'/>

            {/*Types Image Annotation Para Section */}

            <ServPara heading='IMPORTANCE OF PRODUCT CATEGORIZATION SERVICES ' text='Product categorization is extremely important for the e-commerce sector. Through relevant new product suggestions, personalized recommendations, and query-understanding algorithms, companies can improve their user experience and increase their conversion rates and profitability. The key to solving the product classification system is obtaining a highly representative, labeled dataset.' />

            {/*Para & Image Section */}

            <ServPrImg img2={bgImg2} img3={bgImg3} heading='WHAT IS PRODUCT CATEGORIZATION?' text1='Product categorization, also called product classification, is the classification of products into different categories using natural language processing (NLP). Product categorization is both critical and challenging for the e-commerce industry. With the development of AI, companies are trying to apply machine learning to product categorization problems. To improve the user’s experience it is necessary to categorize products into product categories so that customers are able to find their desired products quickly and easily. Categorization typically requires knowledge of product data and product attributes to integrate into the model. Descriptive and comprehensive product titles, product information, and product descriptions are essential for getting a product classification model working correctly.' />

            {/*Image Annotation Services */}

            <ServGrid heading='PRODUCT CATEGORIZATION SOLUTION' text='Product categorization allows customers to find what they are looking for easily and in no time. Most users will not make a purchase on their first interaction with the website, they search for the best price or the highest quality offering. After comparing, they choose the site with the best price and most seamless shopping experience.'

            img12={bgImg12} heading1='STRENGTHEN THE SHOPPING EXPERIENCE' text1='The simplicity of bounding boxes is exactly their strength, making this method of image annotation applicable for a wide range of uses.'  

            img11={bgImg11} heading2='SEARCH ENGINE OPTIMIZATION' text2='Search engine is the first element where users will interact with online shopping sites and well-organized sites have a significant impact on SEO ranking. Product categorization maps the site which leads shoppers to know where to find what they are looking for.'

            img13={bgImg13} heading3='INCREASED SALES' text3='Product categorization naturally leads to higher sales. When a customer can easily find what they are searching for and can navigate through the e-commerce site easily, it’s more likely that there will be potential conversion.'

            img14={bgImg14} heading4='TAXONOMY CATEGORIZATION' text4='Taxonomy categorization involves training a model to perform product classification in a hierarchical manner, i.e. one producing a taxonomy structure or tree with a root, middle nodes, and leaf nodes. '

            img15={bgImg15} heading5='ATTRIBUTE CATEGORIZATION' text5='In machine learning, product categorization is a method of classifying products based on predefined parameters, making them easier to recognize for the users and improving search results.'

            img16={bgImg16} heading6='GENDER CATEGORIZATION' text6='To provide more efficient buying and selling experiences on online shopping sites, it is important for machine learning systems to understand relevant products for genders. Experts train the ML algorithm to predict gender.'

            img17={bgImg17} heading7='OBJECT CATEGORIZATION' text7='Object categorization from image search is a challenging task where machine learning models are trained to recognize and assign specific objects to a certain category. This process is sometimes called generic object categorization.'

            img18={bgImg18} heading8='PRODUCT AT SCALE' text8='Business owners come to our platform for its multiple sales/marketing channels, app and partner ecosystem, brick and mortar support, and so much more. By understanding the types of products they sell, we provide personalized insights to help them capitalize on valuable business opportunities. '

            />

            {/*Features Sections*/}


            <section className="bg-black flex justify-center flex-col items-center w-full pl-16">
            <h2 className="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-white dark:text-white md:text-4xl">PRODUCT CATEGORIZATION CASE STUDIES</h2>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={bgImg4} alt="" />
                </div>&nbsp;
                <div className="mr-auto place-self-center lg:col-span-5">
                    <h1 className="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl text-white dark:text-white">E-COMMERCE CATEGORIZATION</h1>
                    <p className="max-w-xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Client Profile : Large E-commerce company
                    <br />
                    Client data type: Product Taxonomies
                    <br />
                    Challenge: Product paths were inaccurate and as a result end-users were not finding the right results based on a search query and sellers were unhappy due to reduction in sales on the portal.
                    <br />
                    Volume: Over 3 million product paths were rectified in 1 year
                    <br />
                    Outcome: The company was able to enhance search relevance that led to improved user experience. We surpassed the client’s expressed expectations when a 60-member team trained for the task completed the project using an in-house platform. 16×7 coverage was provided with a 24-hour turnaround for each batch.
                    </p>
                </div>
            </div>

            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-5">
                    <h1 className="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl text-white dark:text-white">ONLINE HOME DECOR PRODUCT</h1>
                    <p className="max-w-xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Client Profile: Large home improvement online retailer
                    <br />
                    Client data type: Gender categorization
                    <br />
                    Challenge: Users were facing difficulty finding appropriate products for children on the platform.
                    <br />
                    Volume: ~5k tasks were completed in 2 weeks,
                    <br />
                    Outcome: For this task, a five-member team was trained. Gender was selected depending on the style of the product mentioned in the title, description, or interpreted by the image. Data quality was above 95%.
                    </p>
                </div>&nbsp;
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={bgImg5} alt="" />
                </div>
            </div>

        </section>

            <ServBtn 
            
            headingf='GETTING STARTED WITH PRODUCT CATEGORIZATION' 
            
            textf='The need for speed in high-quality product categorization has never been greater. We combines the best predictive and automated transcription technology with world-class data annotation and subject matter experts to deliver the data you need to get to production, fast.' 
            
            btn='Talk To An Expect' 

            />

        </>
    )
} 