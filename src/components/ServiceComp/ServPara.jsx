import React from 'react'

const ServPara = (props) => {
  return (
    <section className="bg-black">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{props.heading} {/*What are the type of Image Annotation Services?*/}</h1>
            <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">{props.text}{/*iMerit provides various image annotation services that will cater to a client’s project needs, including bounding boxes, polygon annotations, keypoint annotation, LiDar, semantic segmentation, and image classification. iMerit’s team works with the client to calibrate the quality and throughput of the job and deliver the best cost-quality ratio as you iterate. We recommend running a sample batch to clarify instructions, edge cases, and approximate task times, before launching full batches.*/}</p>
        </div>
        </section>
  )
}

export default ServPara