import React from 'react'
import Navbar from '../Navbar/Navbar'
import Slide from './Slide'
import Catagories from '../Catagories'
import Listings from '../Listings'
import Footer from '../Footer'

const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Slide></Slide>
      <Catagories></Catagories>
      <Listings></Listings>
      <Footer></Footer>
    </>
  )
}

export default HomePage