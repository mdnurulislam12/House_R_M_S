import React from 'react'
import Navbar from '../Navbar/Navbar'
import Slide from './Slide'
import Catagories from '../Catagories'
import Listings from '../Listings'

const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Slide></Slide>
      <Catagories></Catagories>
      <Listings></Listings>
    </>
  )
}

export default HomePage