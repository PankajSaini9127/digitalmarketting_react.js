import React from 'react'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
import News from './News&Event'
import OurStudio from './OurStudio'
import PortFolio from './PortFolio'

export default function Routes() {
  return (
    <>
      <Navbar/>
      <Home/>
      <OurStudio/>
      <PortFolio/>
      <News/>
      <Contact/>
      <Footer/>
    </>
  )
}
