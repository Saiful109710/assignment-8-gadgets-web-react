import React from 'react'

const GadgetCards = ({gadget}) => {
  console.log(gadget)
  const {product_title,product_image,price}=gadget 
  return (
    <div className='p-4 shadow-md rounded-md space-y-2'>
        <div className='flex justify-center p-4 '>
           <img className='h-[200px]' src={product_image} alt="" />
        </div>
        <h2 className='text-lg font-bold'>{product_title}</h2>
        <p className='text-gray-700 font-semibold'>Price: {price}</p>
        <button className='btn bg-transparent border text-purple-700 border-[#9538E2] hover:bg-[#9538E2] hover:text-white'>View Details</button>
    </div>
  )
}

export default GadgetCards

