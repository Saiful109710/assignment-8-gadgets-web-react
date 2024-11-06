import React from 'react'
import Categories from './Categories'
import AllGadgetsData from './AllGadgetsData'
import { Outlet } from 'react-router-dom'

const GadgetsContainer = () => {
  return (
    <div className='grid grid-cols-5 gap-1 sm:gap-5 container mx-auto'>
            <div className=' col-span-2 md:col-span-1'>
                <Categories></Categories>
            </div>
            <div className='col-span-3 md:col-span-4'>
                 <Outlet></Outlet>
                
            </div>
    </div>
  )
}

export default GadgetsContainer
