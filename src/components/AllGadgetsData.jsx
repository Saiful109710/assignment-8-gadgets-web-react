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
    <div className='grid grid-cols-3 gap-5'>
        {
            gadgets.map((gadget)=><GadgetCards key={gadget.id} gadget={gadget}></GadgetCards>)
        }
        <div className='col-span-3'>
          <button onClick={()=>navigate('/allGadgets')} className='btn'>
            View Details
          </button>
        </div>
    </div>

  )
}

export default AllGadgetsData
