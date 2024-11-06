import React from 'react'
import Heading from '../components/Heading'
import Cart from '../components/cart'
import { Navigate, NavLink, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom'



const DashBoard = () => {
  const navigate = useNavigate()
  const {pathname} = useLocation();

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
            <NavLink to="cart">
          {({ isActive }) => (
            <button onClick={()=>document.title='Gadget - Carts'} className={`btn px-10 rounded-3xl font-bold ${isActive?'bg-white text-purple-700':'bg-transparent text-white'}`}>
              Cart
            </button>
          )}
        </NavLink>
          <NavLink to='wishlist'> 
          {
            ({isActive})=>(
              <button onClick={()=>document.title='Gadget - Wishlists'}  className={`btn   px-10 rounded-3xl  font-bold ${isActive?'bg-white text-purple-700':'bg-transparent text-white'}`}>Wishlist</button>
            )
          } 
          </NavLink>

          <Routes>
        {/* Redirect from /dashboard to /dashboard/cart */}
            <Route path="" element={<Navigate to="cart" />} />
            
          </Routes>
        </div>
      </div>
        <Outlet></Outlet>
    </div>
  )
}

export default DashBoard
