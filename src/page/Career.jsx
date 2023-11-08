import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import ApplyJob from '../components/CareerComp/ApplyJob';
import CareerTopic from '../components/CareerComp/CareerTopic';
import CareerHero from '../components/CareerComp/CareerHero';
import ExploreJob from '../components/CareerComp/ExploreJob';
import ApplyJob2 from '../components/CareerComp/ApplyJob2';

export const Career = () => {
    return (

        <>
            <Navbar />
            <CareerTopic />
            <ApplyJob />
            <ApplyJob2 />
            <ExploreJob />
            <CareerHero />
            <Footer />
        </>

    )
}
