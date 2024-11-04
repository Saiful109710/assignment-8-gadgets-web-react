import React from 'react'
import { useLoaderData } from 'react-router-dom'
import GadgetCards from '../components/GadgetCards'

const AllGadgetsCard = () => {
    const allGadgets = useLoaderData()
  return (
    <div className='grid grid-cols-3 gap-5 container mx-auto my-8'>
        {
            allGadgets.map((gadget)=><GadgetCards key={gadget.id} gadget={gadget}></GadgetCards>)
        }
    </div>
  )
}

export default AllGadgetsCard
