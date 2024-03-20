import React from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/mainPage/HeroSection';
import AboutUsSection from '../components/mainPage/AboutUsSection';
import ContactSection from '../components/mainPage/ContactSection';
function Home() {
  return (
   
   <>
      <HeroSection />
      <AboutUsSection />  
      <ContactSection />  
      <Footer />
   </>
  )
}

export default Home