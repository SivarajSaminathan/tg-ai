import React from 'react'
import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
import Fsection from "../components/Fsection";
import Ssection from "../components/Ssection";
import Tsection from "../components/Tsection";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";
import AllInOne from "../components/AllInOne";
import GridLayout from '../components/GridLayout';
 
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
