import React from 'react'
import Navbar from '../components/Navbar'
import AHero from '../components/AHero'
import Footer from '../components/Footer'
import Support from '../components/Support'
import AFSection from '../components/AFSection'
import ASSection from '../components/ASSection'
import Features from '../components/Features'
import Client from '../components/Client'
import Grid2x2 from '../components/Grid2x2'
import Team from '../components/Team'
import Contact from '../components/Contact'

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
    <Contact />
    <Footer />
    </>
  )
}

