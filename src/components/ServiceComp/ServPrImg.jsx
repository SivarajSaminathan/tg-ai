import React from 'react'

const ServPrImg = props => {
  return (
    <section className="bg-Black">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">{props.heading}{/*What is Image Annotation?*/}</h2>
          <p className="mb-4 text-white">{props.text1}{/*Image annotation is the process of labeling an image, which strategically involves human-powered work and sometimes, computer-assisted help. It is an important step in creating computer vision models for tasks like image segmentation, image classification, and object detection. Image annotation can range from annotating every group of pixels within an image to one label for an entire image.*/}</p>
          <p className="mb-4 text-white">{props.text2}{/*Successful image annotation projects involving computer vision are built on high-quality annotation. The type of annotation needed will depend on the use case the project is designed for.*/}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img className="w-full rounded-lg" src={props.img2} alt="office content 1" />
          <img className="mt-4 w-full lg:mt-10 rounded-lg" src={props.img3} alt="office content 2" />
        </div>
      </div>
    </section>
  )
}



export default ServPrImg