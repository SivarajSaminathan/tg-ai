import React from 'react'
import Navbar from '../components/Navbar';
import Hero from "../components/HomeComp/Hero";
import Fsection from "../components/HomeComp/Fsection";
import Ssection from "../components/HomeComp/Ssection";
import Tsection from "../components/HomeComp/Tsection";
import JoinUs from "../components/HomeComp/JoinUs";
import Footer from "../components/Footer";
import AllInOne from "../components/HomeComp/AllInOne";
import GridLayout from '../components/HomeComp/GridLayout';
 
export const Home = () => {
  return (
   
<>
    <Navbar />
    <Hero />
    <Fsection />
    <Ssection />
    <Tsection />
    <GridLayout />
    <AllInOne />
    <JoinUs />
    <Footer />
</>

  )
}
