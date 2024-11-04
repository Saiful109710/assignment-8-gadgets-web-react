import React from 'react'
import Banner from '../components/Banner'
import Heading from '../components/Heading'
import GadgetsContainer from '../components/GadgetsContainer'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
            {/* banner */}
            <Banner></Banner>

            {/*  */}
            <Heading title='Explore Cutting-Edge Gadgets'></Heading>
            <GadgetsContainer></GadgetsContainer>
            
            

    </div>
  )
}

export default Home
