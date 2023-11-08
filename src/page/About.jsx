import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AHero from '../components/AboutComp/AHero'
import Support from '../components/AboutComp/Support'
import AFSection from '../components/AboutComp/AFSection'
import ASSection from '../components/AboutComp/ASSection'
import Features from '../components/AboutComp/Features'
import Client from '../components/AboutComp/Client'
import Grid2x2 from '../components/AboutComp/Grid2x2'
import Team from '../components/AboutComp/Team'

export const About = () => {
  return (
    <>
    <Navbar />
    <AHero />
    <Client />
    <Grid2x2 />
    <Features />
    <Support/>
    <AFSection />
    <ASSection />
    <Team />
    <Footer />
    </>
  )
}

