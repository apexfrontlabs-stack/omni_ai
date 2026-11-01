import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Industries from '../components/sections/Industries'
import Features from '../components/sections/Features'
import HowItWorks from '../components/sections/HowItWorks'
import Pricing from '../components/sections/Pricing'
import Testimonials from '../components/sections/Testimonials'
import CTA from '../components/sections/CTA'
import Footer from '../components/common/Footer'
import Contact from '../components/sections/Contact'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Industries/>
        <Features/>
       <HowItWorks/>
       <Pricing/>
       <Testimonials/>
       <CTA/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default Home
