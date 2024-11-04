import React from 'react'
import Categories from './Categories'
import AllGadgetsData from './AllGadgetsData'
import { Outlet } from 'react-router-dom'

const GadgetsContainer = () => {
  return (
    <div className='grid grid-cols-5 gap-5 container mx-auto'>
            <div className='col-span-1'>
                <Categories></Categories>
            </div>
            <div className='col-span-4'>
                 <Outlet></Outlet>
                
            </div>
    </div>
  )
}

export default GadgetsContainer
