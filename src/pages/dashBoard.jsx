import React from 'react'
import Heading from '../components/Heading'
import Cart from '../components/cart'
import { Outlet, useNavigate } from 'react-router-dom'


const DashBoard = () => {
  const navigate = useNavigate()
  return (
    <div>
        <div className="bg-purple-700 py-5  flex justify-center flex-col gap-5">
        <Heading
          
          title="Dash Board"
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        ></Heading>
        <div className='flex justify-center gap-5'>
          <button onClick={()=>navigate('cart')} className='btn px-10 rounded-3xl text-purple-700 font-bold'>Cart</button>
          <button onClick={()=>navigate('wishlist')} className='btn bg-transparent  px-10 rounded-3xl text-white font-bold'>wishlist</button>
        </div>
      </div>
        <Outlet></Outlet>
    </div>
  )
}

export default DashBoard
