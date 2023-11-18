import React from 'react'
import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import KeyWest from '../assets/keywest.jpg';
import { Carousel } from 'flowbite-react';



export const  ImgSlider=()=> {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src={BoraBora} alt="..." />
        <img src={BoraBora2} alt="..." />
        <img src={Maldives} alt="..." />
        <img src={Maldives2} alt="..." />
        <img src={KeyWest} alt="..." />
      </Carousel>
    </div>
  );
}
 
 