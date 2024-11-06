import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import GadgetCards from './GadgetCards';

const AllGadgetsData = () => {
  const {category} = useParams();
  const navigate = useNavigate();
  
    const allGadgetData = useLoaderData();

    const [gadgets,setGadgets] = useState([]);

    useEffect(()=>{
       if(category){
        const categoryGadgets = [...allGadgetData].filter(gadget=>gadget.category.split(' ').join('')===category);
        setGadgets(categoryGadgets)
       }else{
          setGadgets(allGadgetData.slice(0,8))
       }
    },[category,allGadgetData])
    
  return (
    <div className='space-y-3'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>
        {
            gadgets.map((gadget)=><GadgetCards key={gadget.id} gadget={gadget}></GadgetCards>)
        }
        </div>
        <div className=''>
          <button onClick={()=>{navigate('/allGadgets');document.title='Gadget - All Gadget'}} className='btn bg-purple-700 text-white'>
            View Details
          </button>
        </div>
    </div>

  )
}

export default AllGadgetsData
