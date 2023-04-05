import React from 'react'
import Navbar from '../components/Navbar'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import Categorycards from "../components/Categorycards"



export const Kiosk = () => {
  return (
    <div className="kiosk">
      <Navbar/>
      <Categorycards/>
      <Footer/>
    </div>
  )
}

export default Kiosk